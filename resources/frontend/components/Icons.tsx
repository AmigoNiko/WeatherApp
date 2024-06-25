import { ArrowLeft, Cloudy, Droplet, PlusCircle, SortAsc, SortDesc, Sun, Thermometer, Wind } from 'lucide-react';
import {
	AlertTriangle,
	ArrowRight,
	Check,
	ChevronLeft,
	ChevronRight,
	ClipboardCheck,
	Copy,
	CreditCard,
	File,
	FileText,
	HelpCircle,
	Image,
	Laptop,
	Loader2,
	LucideProps,
	Moon,
	MoreVertical,
	Pizza,
	Plus,
	Settings,
	SunMedium,
	Trash,
	Twitter,
	User,
	X,
	BarChart3,
	Store,
	ShoppingBag,
	MapPin,
	Star,
	Map,
	ShieldAlert,
	Info,
	XIcon,
	type Icon as LucideIcon,
	Pen,
	ChevronsUpDown,
} from 'lucide-react';

interface LogoProps extends LucideProps {
	variant?: 'default' | 'dark';
}

export type Icon = LucideIcon;

export const Icons = {
	// Sort icons
	droplet: Droplet,
	wind: Wind,
	thermometer: Thermometer,
	cloudy: Cloudy,
	//Needed icons

	//Not needed icons
	sortDesc: SortDesc,
	plusCircle: PlusCircle,
	sortAsc: SortAsc,
	info: Info,
	x: XIcon,
	admin: ShieldAlert,
	projects: BarChart3,
	marketplace: Store,
	orders: ShoppingBag,
	close: X,
	delete: Trash,
	spinner: Loader2,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	trash: Trash,
	post: FileText,
	page: File,
	media: Image,
	chevronUpDown: ChevronsUpDown,
	settings: Settings,
	billing: CreditCard,
	ellipsis: MoreVertical,
	add: Plus,
	edit: Pen,
	warning: AlertTriangle,
	user: User,
	arrowRight: ArrowRight,
	arrowLeft: ArrowLeft,
	help: HelpCircle,
	pizza: Pizza,
	twitter: Twitter,
	check: Check,
	copy: Copy,
	copyDone: ClipboardCheck,
	sun: SunMedium,
	moon: Moon,
	laptop: Laptop,
	pin: MapPin,
	map: Map,
	star: Star,

	// App logo
	logo: ({ variant, ...props }: LogoProps) => {
		const fillColor = variant === 'dark' ? '#000' : '#fff'; // 'dark' for black, default is white

		return (
			<svg role="img" viewBox="0 0 244.95 158.25" {...props}>
				<g>
					<g>
						<polygon
							fill={fillColor}
							points="15.18 107.62 .18 107.62 .18 70.87 99.06 0 188.4 64.03 221.9 30.52 232.51 41.12 190 83.63 99.06 18.46 15.18 78.57 15.18 107.62"
						/>
						<rect fill={fillColor} x="74.69" y="59.15" width="19.39" height="19.39" />
						<rect fill={fillColor} x="102.8" y="59.15" width="19.39" height="19.39" />
						<rect fill={fillColor} x="74.69" y="88.23" width="19.39" height="19.39" />
						<rect fill={fillColor} x="102.8" y="88.23" width="19.39" height="19.39" />
						<polygon fill={fillColor} points="244.87 17.5 210.45 20.62 241.74 51.92 244.87 17.5" />
						<g>
							<path
								fill={fillColor}
								d="m18,157.61l-1.21-3.6h-8.65l-1.31,3.6H0l9.99-24.9h5.01l9.89,24.9h-6.9Zm-5.45-17.12l-.1-.03-2.56,8.51h5.21l-2.56-8.48Z"
							/>
							<path
								fill={fillColor}
								d="m38.93,157.61v-10.36c0-2.52-.87-3.7-2.93-3.7-2.25,0-3.2,1.25-3.2,3.77v10.29h-5.58v-18.67h5.21v1.98h.07c1.18-1.92,2.83-2.62,5.08-2.62,3.36,0,6.93,1.88,6.93,7.4v11.91h-5.58Z"
							/>
							<path
								fill={fillColor}
								d="m62.51,157.61v-2.02h-.07c-.81,1.65-3.03,2.66-5.48,2.66-5.52,0-9.35-4.34-9.35-9.99s4-9.96,9.35-9.96c2.29,0,4.41.91,5.48,2.62h.07v-1.98h5.58v18.67h-5.58Zm0-9.35c0-2.62-2.12-4.74-4.74-4.74s-4.58,2.12-4.58,4.81,2.05,4.71,4.64,4.71,4.68-2.09,4.68-4.78Z"
							/>
							<path fill={fillColor} d="m72.33,157.61v-24.9h5.58v24.9h-5.58Z" />
							<path
								fill={fillColor}
								d="m81.95,136.95v-4.24h5.58v4.24h-5.58Zm0,20.66v-18.67h5.58v18.67h-5.58Z"
							/>
							<path
								fill={fillColor}
								d="m90.06,157.61v-3.84l7.87-10.6h-7.87v-4.24h13.89v4.24l-7.3,10.19h7.3v4.24h-13.89Z"
							/>
							<path
								fill={fillColor}
								d="m106.51,136.95v-4.24h5.58v4.24h-5.58Zm0,20.66v-18.67h5.58v18.67h-5.58Z"
							/>
							<path
								fill={fillColor}
								d="m116.1,157.61v-18.67h5.25v1.98h.07c.98-1.98,2.52-2.62,4.68-2.62v5.62c-3.33.03-4.41,1.28-4.41,3.4v10.29h-5.58Z"
							/>
							<path
								fill={fillColor}
								d="m142.11,157.61v-2.02h-.07c-.81,1.65-3.03,2.66-5.48,2.66-5.52,0-9.35-4.34-9.35-9.99s4-9.96,9.35-9.96c2.29,0,4.41.91,5.48,2.62h.07v-1.98h5.58v18.67h-5.58Zm0-9.35c0-2.62-2.12-4.74-4.74-4.74s-4.58,2.12-4.58,4.81,2.05,4.71,4.64,4.71,4.68-2.09,4.68-4.78Z"
							/>
							<path
								fill={fillColor}
								d="m151.76,136.95v-4.24h5.58v4.24h-5.58Zm0,20.66v-18.67h5.58v18.67h-5.58Z"
							/>
							<path fill={fillColor} d="m161.76,157.61v-5.72h5.82v5.72h-5.82Z" />
							<path
								fill={fillColor}
								d="m185.14,146.14c-.81-1.75-2.25-2.62-4.17-2.62-2.56,0-4.31,2.12-4.31,4.74s1.85,4.74,4.44,4.74c1.88,0,3.2-.88,4.04-2.49h5.69c-1.11,4.68-5.11,7.7-9.89,7.7-5.52,0-9.89-4.47-9.89-9.99s4.41-9.92,9.79-9.92c4.91,0,8.92,3.09,9.96,7.84h-5.65Z"
							/>
							<path
								fill={fillColor}
								d="m203.07,158.18c-5.69,0-10.06-4.21-10.06-9.92s4.47-9.92,10.06-9.92,10.06,4.21,10.06,9.86-4.44,9.99-10.06,9.99Zm4.47-9.92c0-2.49-1.88-4.71-4.51-4.71-2.46,0-4.44,2.15-4.44,4.71s1.95,4.71,4.47,4.71,4.47-2.22,4.47-4.71Z"
							/>
							<path
								fill={fillColor}
								d="m239.37,157.61v-10.06c0-2.93-.94-4-2.86-4-2.12,0-3.1,1.28-3.1,3.73v10.33h-5.58v-10.29c0-2.42-.87-3.77-2.79-3.77-2.19,0-3.16,1.41-3.16,4v10.06h-5.58v-18.67h5.21v1.98h.07c.98-1.75,2.76-2.62,5.15-2.62s4.21,1.21,5.38,3.33c1.35-2.12,3.36-3.33,5.92-3.33,4.17,0,6.93,2.56,6.93,7.77v11.54h-5.59Z"
							/>
						</g>
					</g>
				</g>
			</svg>
		);
	},
};
