import axios from 'axios';

export const fetchWeatherData = async (latitude: any, longitude: any, metric:any) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
            lat: latitude,
            lon: longitude,
            appid: '600c0fc961665a6d198b6bef424b378e',
            units: metric,
        },
    });
    return response.data;
};
