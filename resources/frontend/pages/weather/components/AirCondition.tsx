import { Forecast } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Icons } from '@/components/Icons';

interface WeatherForecastCardProps {
	data: Forecast;
}

export function AirConditionCard({ data }: WeatherForecastCardProps) {
	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
				<CardTitle className="text-2xl text-muted-foreground font-medium">AIR CONDITION</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row justify-evenly">
					<section className='space-y-20'>
						<div className="flex flex-col ">
							<div className="flex">
								<Icons.thermometer className='w-14 h-14' /> <span className='text-3xl m-auto'>Real Feel</span>
							</div>
							<div className="text-6xl text-muted-foreground">{Math.round(data.main.feels_like)}°C</div>
						</div>
						<div className="flex flex-col ">
							<div className="flex">
								<Icons.droplet className='w-14 h-14'/> <span className='text-3xl m-auto'>Chance of rain</span>
							</div>
							<div className="text-6xl text-muted-foreground">{data.pop} %</div>
						</div>
					</section>
					<section className='space-y-20'>
						<div className="flex flex-col ">
							<div className="flex">
								<Icons.wind className='w-14 h-14'/> <span className='text-3xl m-auto'>Wind</span>
							</div>
							<div className="text-6xl text-muted-foreground">{data.wind.speed} km/h</div>
						</div>

						<div className="flex flex-col ">
							<div className="flex">
								<Icons.cloudy className='w-14 h-14'/> <span className='text-3xl m-auto'>Cloudiness</span>
							</div>
							<div className="text-6xl text-muted-foreground">{data.clouds.all} %</div>
						</div>
					</section>
				</div>
			</CardContent>
		</Card>
	);
}
