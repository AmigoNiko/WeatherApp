import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/DropdownMenu';
import { Button } from './ui/Button';
import { useMetric } from '@/metric'; // Import useMetric hook

export function AppHeader() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { selectedMetric, updateMetric } = useMetric(); // Use selectedMetric and updateMetric from useMetric

	const handleSelectMetric = (metric: any) => {
		updateMetric(metric); // Update selectedMetric using updateMetric from context
		setDropdownOpen(false); // Close dropdown after selection
	};

	return (
		<header className="border-b bg-background">
			<div className="flex items-center h-16 px-4">
				<div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
					<nav className="flex items-center space-x-2">
						<DropdownMenu open={dropdownOpen} onOpenChange={(open) => setDropdownOpen(open)}>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="sm"
									className="flex flex-row gap-2 p-0 px-2 py-0.5 text-xs min-w-max rounded-none"
								>
									<span className="hidden w-fit sm:flex">{selectedMetric}</span>
								</Button>
							</DropdownMenuTrigger>

							<DropdownMenuContent className="sm:max-w-[425px]" align="start">
								{/* Dropdown menu content */}
								<div className="flex flex-col w-full gap-1 max-h-[177px]">
									<button
										className="text-left p-2 hover:bg-gray-200"
										onClick={() => handleSelectMetric('standard')}
									>
										Standard
									</button>
									<button
										className="text-left p-2 hover:bg-gray-200"
										onClick={() => handleSelectMetric('metric')}
									>
										Metric
									</button>
									<button
										className="text-left p-2 hover:bg-gray-200"
										onClick={() => handleSelectMetric('imperial')}
									>
										Imperial
									</button>
								</div>
							</DropdownMenuContent>
						</DropdownMenu>

						{/* ModeToggle component or any other components */}
					</nav>
				</div>
			</div>
		</header>
	);
}
