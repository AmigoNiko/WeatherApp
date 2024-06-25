import { ModeToggle } from '@/components/ModeToggle';
export function AppHeader() {
	return (
		<header className="border-b bg-background">
			<div className="flex items-center h-16 px-4">		
				<div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
					<nav className="flex items-center space-x-2">				
						<ModeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
