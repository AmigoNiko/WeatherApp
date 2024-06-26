import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { DashboardLayout } from '@/pages/dashboard/Layout.tsx';

import { WeatherPage } from '@/pages/weather/Page.tsx';

// This is the topmost app component
export default function App() {
	const [searchParams] = useSearchParams();

	return (
		<Routes>
			{/* Redirect */}
			<Route path="*" element={<Navigate replace to={`/dashboard?${searchParams.toString()}`} />} />
			{/* Authenticated pages */}
			<Route element={<Layout />}>
				<Route path="dashboard" element={<DashboardLayout />} />
				<Route path="/weather/:id" element={<WeatherPage />} />
			</Route>
		</Routes>
	);
}
