import { Forecast } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface GroupedWeatherData {
    [date: string]: Forecast[];
}

interface WeatherForecastCardProps {
    data: Forecast[];
    selectedDate: string; // Assuming selectedDate is passed as a string in ISO format 'yyyy-mm-dd'
}

export function DateSpecificForecastCard({ data, selectedDate }: WeatherForecastCardProps) {
    const groupedData = groupByDate(data);

    const weatherIconImport = import.meta.glob('@/assets/icons/*.png', { eager: true, as: 'url' });

    function groupByDate(data: Forecast[]): GroupedWeatherData {
        return data.reduce((acc: GroupedWeatherData, obj: Forecast) => {
            const datePart = obj.dt_txt.split(' ')[0];

            if (!acc[datePart]) {
                acc[datePart] = [];
            }

            acc[datePart].push(obj);

            return acc;
        }, {});
    }

    function renderForecastForDate(forecasts: Forecast[]) {
        return forecasts?.map((forecast) => (
            <div key={forecast.dt} className="flex flex-col">
                <div className="m-auto">
                    {new Date(forecast.dt_txt).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </div>
                <div className="flex">
                    <img
                        src={weatherIconImport[`/resources/frontend/assets/icons/${forecast.weather[0].icon}.png`]}
                        alt="Weather Icon"
                        className="w-20 h-20"
                    />
                </div>
                <div className="m-auto text-3xl">{Math.round(forecast.main.temp)}°</div>
            </div>
        ));
    }

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-2xl text-muted-foreground font-medium">{selectedDate}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row justify-evenly items-center">
                    {renderForecastForDate(groupedData[selectedDate] || [])}
                </div>
            </CardContent>
        </Card>
    );
}
