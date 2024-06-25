export type SortDirection = 'asc' | 'desc';

export interface User {
	id: number;
	name: string;
	email: string;
	active: number; // 1 or 0
	isAdmin: number; // 1 or 0
	emailVerifiedAt: string | null; // ISO date
	monthlyAdvertisementsDone: number;
	advertisementsRemaining: number;
	advertisementsLimit: number;
	createdAt: string | null; // ISO date
	updatedAt: string | null; // ISO date
	phoneNumber: string;
}

export interface ErrorResponse {
	message: string;
	errors?: {
		[key: string]: string[];
	} | null;
}

export interface PopulationRange {
	age: string;
	men: number;
	women: number;
}

export interface Fuel {
	id: number;
	name: string;
	active: boolean;
}

export interface VehicleModelType {
	id: number;
	name: string;
	vehicleModel: VehicleModel;
	active: boolean;
}

export interface VehicleBrand {
	id: number;
	name: string;
	active: boolean;
}

export interface VehicleCategory {
	id: number;
	name: string;
	active: boolean;
}

export interface VehicleModel {
	id: number;
	name: string;
	vehicleBrand: VehicleBrand;
	active: boolean;
}

export interface Transmission {
	id: number;
	name: string;
	active: boolean;
}
export interface Location {
	id: number;
	name: string;
	active: boolean;
}

export interface Image {
	advertisement_id: number;
	createdAt: string;
	path: string;
	title: string;
}

export interface Advertisement {
	id: number;
	name: string;
	price: number;
	mileage: number;
	horsePower: number;
	engine_capacity: number;
	color: string;
	description: string;
	images: Image[];
	user: User;
	comments: Comment[];
	year: number;
	location: Location;
	vehicleBrand: VehicleBrand;
	vehicleModel: VehicleModel;
	vehicleModelType: VehicleModelType | null;
	vehicleCategory: VehicleCategory;
	fuel: Fuel;
	transmission: Transmission;
}

export interface GetAdvertisementParams {
	pageIndex?: number;
	pageSize?: number;
	sort?: SortDirection;
	sortBy?: string;
	locations?: string[] | null;
	brands?: string[] | null;
	categories?: string[] | null;
	models?: string[] | null;
	types?: string[] | null;
}

export interface AdvertisementInput {
	[key: string]: any;
	price: number;
	mileage: number;
	horse_power: number;
	engine_capacity: number;
	year: number;
}

export interface DashboardStats {
	total: {
		advertisements: number;
		brands: number;
		locations: number;
		getTodayAdvertisements: number;
	};
	getAveragePriceByBrand: {
		vehicleBrand: string | null;
		price: number;
	}[];
	advertisementsCountByCategory: {
		name: string;
		count: number;
	}[];
	advertisementsCountLastWeek: {
		date: string;
		count: number;
	}[];
}
export interface Comment {
	id: number;
	advertisementId: number;
	user: User;
	description: string;
	createdAt: string; // ISO date
	updatedAt: string; // ISO date
}

export interface AdminPanelUser {
	id: number;
	name: string;
	email: string;
	isAdmin: number;
	active: number;
	createdAt: string; // ISO date
	updatedAt: string; // ISO date
	advertisementsDone: number;
}

export interface AdminPanelAdvertisements {
	id: number;
	estateId: number;
	description: string;
	createdAt: string; // ISO date
	updatedAt: string; // ISO date
	user: { id: number; name: string; email: string };
}

export interface WeatherData {
	cod: string;
	message: number;
	cnt: number;
	list: Forecast[];
	city: City;
  }
  
  export interface Forecast {
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	rain?: Rain;
	sys: Sys;
	dt_txt: string;
  }
  
  export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
  }
  
  export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
  }
  
  export interface Clouds {
	all: number;
  }
  
  export interface Wind {
	speed: number;
	deg: number;
	gust: number;
  }
  
  export interface Rain {
	'3h': number;
  }
  
  export interface Sys {
	pod: string;
  }
  
  export interface City {
	id: number;
	name: string;
	coord: Coordinates;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
  }
  
  export interface Coordinates {
	lat: number;
	lon: number;
  }
  
