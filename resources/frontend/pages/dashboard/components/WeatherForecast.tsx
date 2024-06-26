import { useNavigate } from 'react-router-dom';
import { Forecast } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface GroupedWeatherData {
	[date: string]: Forecast[];
}

interface WeatherForecastCardProps {
	data: Forecast[];
}

export function WeatherForecastCard({ data }: WeatherForecastCardProps) {
	const navigate = useNavigate();
	const groupedData = groupByDate(data);
	const filteredGroupedData = filterGroupedData(groupedData);
	const extremes = findExtremes(groupedData);
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

	function filterGroupedData(groupedData: GroupedWeatherData): Forecast[] {
		const dates = Object.keys(groupedData);
		if (dates.length === 0) return [];

		const firstGroupCount = groupedData[dates[0]].length;
		let step;

		if (firstGroupCount === 4) {
			step = 4;
		} else if (firstGroupCount < 4) {
			step = 5;
		} else if (firstGroupCount === 5) {
			step = 3;
		} else if (firstGroupCount === 6) {
			step = 2;
		} else {
			step = 1;
		}

		const result: Forecast[] = [];
		for (let i = 1; i <= 5; i++) {
			if (groupedData[dates[i]]) {
				const forecast = groupedData[dates[i]].find((_, index) => index === step - 1);
				if (forecast) {
					result.push(forecast);
				}
			}
		}

		return result;
	}

	function findExtremes(groupedData: GroupedWeatherData): { date: string; maxTemp: number; minTemp: number }[] {
		const dates = Object.keys(groupedData);
		if (dates.length === 0) return [];

		const extremes: { date: string; maxTemp: number; minTemp: number }[] = [];

		dates.forEach((date) => {
			const forecasts = groupedData[date];
			let maxTemp = -Infinity;
			let minTemp = Infinity;

			forecasts.forEach((forecast) => {
				if (forecast.main.temp_max > maxTemp) {
					maxTemp = forecast.main.temp_max;
				}
				if (forecast.main.temp_min < minTemp) {
					minTemp = forecast.main.temp_min;
				}
			});

			extremes.push({ date, maxTemp, minTemp });
		});

		return extremes;
	}

	function handleForecastClick(forecast: Forecast) {
		navigate(`/weather/${forecast.dt}`, { state: { forecast } });
	}

	function renderForecastForDate(forecasts: Forecast[]) {
		return forecasts.map((forecast) => (
			<div
				key={forecast.dt}
				className="flex flex-row justify-between items-center flex-grow hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
				onClick={() => handleForecastClick(forecast)}
			>
				<div className="w-20 text-3xl">
					{new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
				</div>
				<div className="flex">
					<img
						src={weatherIconImport[`/resources/frontend/assets/icons/${forecast.weather[0].icon}.png`]}
						alt="Weather Icon"
						className="w-20 h-20 mr-7"
					/>
					<div className="m-auto w-28 ">{forecast.weather[0].description}</div>
				</div>
				<div>
					{extremes.map(
						(extreme) =>
							extreme.date === new Date(forecast.dt_txt).toISOString().split('T')[0] && (
								<div key={extreme.date}>
									<span className="text-2xl text-muted-foreground">
										{Math.round(extreme.maxTemp)}°C
									</span>{' '}
									/ {Math.round(extreme.minTemp)}°C
								</div>
							),
					)}
				</div>
			</div>
		));
	}

	console.log(filteredGroupedData);
	return (
		<Card className=" w-full h-lvh animate-fade-left">
			<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
				<CardTitle className="text-2xl text-muted-foreground font-medium">5-DAY FORECAST</CardTitle>
			</CardHeader>
			<CardContent className="h-full flex flex-col pb-20">
				{filteredGroupedData.map((forecast) => (
					<div key={forecast.dt} className="flex-grow flex flex-col justify-between">
						{renderForecastForDate([forecast])}
					</div>
				))}
			</CardContent>
		</Card>
	);
}
