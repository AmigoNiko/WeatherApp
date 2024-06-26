import { useEffect, useState } from 'react';
import { AirConditionCard } from './components/AirCondition';
import { useQuery } from '@tanstack/react-query';
import { useMetric } from '@/metric';
import { useLocation } from 'react-router-dom';
import { fetchWeatherData } from '@/data';
import { Forecast } from '@/types';
import { DateSpecificForecastCard } from './components/DayForcast';

const useWeatherData = (selectedMetric: any) => {
	const [location, setLocation] = useState(null);
	const [error, setError] = useState('');

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation({ latitude, longitude });
				},
				(error) => {
					setError(error.message);
				},
			);
		} else {
			setError('Geolocation is not supported by this browser.');
		}
	}, []);

	const {
		isLoading,
		data: forecastsData,
		isError,
		error: queryError,
		refetch,
	} = useQuery(
		['weatherData', location, selectedMetric],
		() => fetchWeatherData(location.latitude, location.longitude, selectedMetric),
		{
			enabled: !!location,
		},
	);

	useEffect(() => {
		refetch(); // Refetch data whenever selectedMetric changes
	}, [selectedMetric, refetch]);

	return { isLoading, forecastsData, isError, error: isError ? queryError.message : error, refetch };
};

export default useWeatherData;

export function WeatherPage() {
	const { selectedMetric } = useMetric(); // Assuming useMetric provides selectedMetric
	const { isLoading, forecastsData, isError, error } = useWeatherData(selectedMetric);
	const [weatherIconUrl, setWeatherIconUrl] = useState<string>('');
	const state = useLocation();
	const forecast: Forecast | undefined = state.state?.forecast;

	// Find the forecast that matches the selected forecast
	const forecastid = forecastsData?.list?.find((forecasts: Forecast) => {
		return forecasts.dt === forecast?.dt;
	});

	useEffect(() => {
		if (forecastsData) {
			if (forecast) {
				const weatherIconImport = import.meta.glob('@/assets/icons/*.png', { eager: true, as: 'url' });
				const iconCode = forecast.weather[0].icon;
				const iconPath = `/resources/frontend/assets/icons/${iconCode}.png`;
				const iconUrl = weatherIconImport[iconPath];
				if (iconUrl) {
					setWeatherIconUrl(iconUrl);
				} else {
					console.error('Icon URL not found');
				}
			}
		}
	}, [forecastsData]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<div className="flex md:flex-row flex-col ">
				{/* Current Weather */}
				<div className="w-full mr-9 animate-fade-right">
					<section className="flex justify-between">
						<div>
							<div className="flex flex-col space-y-2">
								{/* Display city name and population */}
								<h2 className="text-7xl font-bold tracking-tight">{forecastsData?.city?.name}</h2>
								<div className="text-3xl text-muted-foreground">
									Population: {forecastsData?.city?.population}
								</div>
							</div>
							{/* Display current temperature */}
							<div className="text-6xl mt-20">{Math.round(forecastid?.main.temp!)}°</div>
						</div>

						{/* Display weather icon */}
						<img src={weatherIconUrl} alt="Weather Icon" className="w-72 h-72 mr-7" />
					</section>
					<div className="space-y-4">
						{/* Display today's forecast and air condition */}
						{forecast && <DateSpecificForecastCard data={forecastsData.list} selectedDate={new Date(forecastid.dt_txt).toISOString().split('T')[0]}/>}
						{forecast && <AirConditionCard data={forecastid} />}
					</div>
				</div>
			</div>
		</>
	);
}
