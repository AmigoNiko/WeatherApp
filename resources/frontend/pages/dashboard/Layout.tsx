import { useEffect, useState } from 'react';
import { fetchWeatherData } from '@/data';
import { WeatherForecastCard } from './components/WeatherForecast';
import { TodaysForecastCard } from './components/TodaysForcast';
import { AirConditionCard } from './components/AirCondition';
import { useQuery } from '@tanstack/react-query';
import { useMetric } from '@/metric';

const useWeatherData = (selectedMetric:any) => {
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
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  const { isLoading, data, isError, error: queryError, refetch } = useQuery(
    ['weatherData', location, selectedMetric],
    () => fetchWeatherData(location.latitude, location.longitude, selectedMetric),
    {
      enabled: !!location,
    }
  );

  useEffect(() => {
    refetch(); // Refetch data whenever selectedMetric changes
  }, [selectedMetric, refetch]);

  return { isLoading, data, isError, error: isError ? queryError.message : error, refetch };
};

export default useWeatherData;

export function DashboardLayout() {
    const { selectedMetric } = useMetric(); // Assuming useMetric provides selectedMetric
  const { isLoading, data: forecastData, isError, error } = useWeatherData(selectedMetric);
    const [weatherIconUrl, setWeatherIconUrl] = useState<string>('');

    useEffect(() => {
        if (forecastData) {
            const weatherIconImport = import.meta.glob('@/assets/icons/*.png', { eager: true, as: 'url' });
            const iconCode = forecastData.list[0].weather[0].icon;
            const iconPath = `/resources/frontend/assets/icons/${iconCode}.png`;
            const iconUrl = weatherIconImport[iconPath];
            if (iconUrl) {
                setWeatherIconUrl(iconUrl);
            } else {
                console.error('Icon URL not found');
            }
        }
    }, [forecastData]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="flex lg:flex-row flex-col ">
                {/* Current Weather */}
                <div className="w-full mr-9 animate-fade-right">
                    <section className="flex justify-between">
                        <div>
                            <div className="flex flex-col space-y-2">
                                <h2 className="text-7xl font-bold tracking-tight">{forecastData?.city?.name}</h2>
                                <div className="text-3xl text-muted-foreground">
                                    Population: {forecastData?.city?.population}
                                </div>
                            </div>
                            <div className="text-6xl mt-20">{Math.round(forecastData?.list[0].main.temp!)}°</div>
                        </div>

                        <img src={weatherIconUrl} alt="Weather Icon" className="w-72 h-72 mr-7" />
                    </section>
                    <div className="space-y-4">
                        {forecastData?.list && <TodaysForecastCard data={forecastData.list} />}
                        {forecastData?.list && <AirConditionCard data={forecastData.list} />}
                    </div>
                </div>

                {forecastData?.list && <WeatherForecastCard data={forecastData.list} />}
            </div>
        </>
    );
}
