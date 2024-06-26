import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export function Layout() {
	// Guest Layout
	return (
		<div className="flex flex-col min-h-screen">
			{/* Background pattern */}
			<div className="pattern"></div>

			{/* Header */}
			<AppHeader />

			{/* Page Content */}
			<main className="flex-1 flex flex-col gap-4 p-4 sm:p-8 pt-6 xl:mx-[5%] 2xl:mx-[8%]">
				<Outlet />
			</main>
		</div>
	);
}
