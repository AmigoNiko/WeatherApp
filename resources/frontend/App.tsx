import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/auth.hook';
import useDarkMode from '@/hooks/darkMode.hook';
import { Layout } from '@/components/Layout';
import { DashboardLayout } from '@/pages/dashboard/Layout';
import { NotFoundPage } from '@/pages/404/Page';
import { WeatherPage } from '@/pages/advertiment/Page';
import { useEffect } from 'react';
import { toast } from './hooks/toast.hook';
import { ToastCookiesAction } from './components/ui/ToastCookiesAction';
import { getLocations, getVehicleBrands } from './data';
import { QUERY_KEY } from './data/constants';
import { useQuery } from '@tanstack/react-query';

// import { TermsAndConditions } from './pages/t&c/Page';

// This is the topmost app component
export default function App() {
	const { isDarkMode } = useDarkMode();
	const { isLoading, isAuthenticated } = useAuth();
	const [searchParams] = useSearchParams();

	const backgroundImages = Object.values(
		import.meta.glob('@/assets/background/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }),
	);

	// Load vehicle brands
	useQuery({ queryKey: [QUERY_KEY.vehicleBrands], queryFn: getVehicleBrands });
	useQuery({ queryKey: [QUERY_KEY.locations], queryFn: () => getLocations() });
	// Imame kukita maina
	useEffect(() => {
		// Check if the 'cookiesAccepted' flag exists in localStorage
		const cookiesAccepted = localStorage.getItem('cookiesAccepted');

		if (!isLoading && !cookiesAccepted) {
			toast({
				title: `Бисквитки`,
				description: `Този сайт използва "бисквитки", за да подобри вашето потребителско изживяване.`,
				action: <ToastCookiesAction />,
				duration: Infinity,
			});
		}
	}, [isLoading]);

	return isLoading ? (
		// Loading screen
		<div className="flex items-center justify-center h-screen text-lg font-medium animate-pulse">
			{isDarkMode ? <img src={backgroundImages[1]}></img> : <img src={backgroundImages[0]}></img>}
		</div>
	) : (
		<Routes>
			{/* Redirect */}
			<Route
				path="*"
				element={<Navigate replace to={isAuthenticated ? `/dashboard?${searchParams.toString()}` : '/login'} />}
			/>

			{/* Authenticated pages */}
			<Route element={<Layout variant="auth" />}>
				<Route path="dashboard" element={<DashboardLayout />}/>
				<Route path="/weather/:id" element={<WeatherPage />} />
			</Route>

			{/* 404 */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
