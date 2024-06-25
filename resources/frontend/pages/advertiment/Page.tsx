import { QUERY_KEY } from '@/data/constants';
import { useEffect, useState } from 'react';
import { fetchWeatherData } from '@/data';
import { TodaysForecastCard } from '../dashboard/components/TodaysForcast';
import { AirConditionCard } from '../dashboard/components/AirCondition';
import { useQuery } from '@tanstack/react-query';

const lang = 'bg'; // Bulgarian language

const useWeatherData = () => {
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

    const { isLoading, data, isError, error: queryError } = useQuery(
        ['weatherData', location],
        () => fetchWeatherData(location.latitude, location.longitude),
        {
            enabled: !!location,
        }
    );

    return { isLoading, data, isError, error: isError ? queryError.message : error };
};

export function WeatherPage() {
    const { isLoading, data: forecastData, isError, error } = useWeatherData();
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
            <div className="flex md:flex-row flex-col ">
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
            </div>
        </>
    );
}
