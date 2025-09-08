import { useState, useEffect } from 'react';
import { Muted } from './Typography.jsx';

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			return document.documentElement.classList.contains(
				'dark'
			);
		}
		return false;
	});

	useEffect(() => {
		const currentIsDark =
			document.documentElement.classList.contains('dark');
		setIsDark(currentIsDark);

		const mediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);
		const handleChange = (e) => {
			if (!localStorage.getItem('theme')) {
				if (e.matches) {
					setIsDark(true);
					document.documentElement.classList.add('dark');
				} else {
					setIsDark(false);
					document.documentElement.classList.remove('dark');
				}
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () =>
			mediaQuery.removeEventListener(
				'change',
				handleChange
			);
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);

		if (newTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<button
			onClick={toggleTheme}
			className="relative p-2 rounded-lg border border-border hover:bg-muted/30 transition-all duration-300 hover:border-muted-foreground/30 hover-lift group"
			aria-label={
				isDark
					? 'Switch to light mode'
					: 'Switch to dark mode'
			}>
			<div className="relative w-6 h-6">
				{/* Sun icon */}
				<svg
					className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out ${
						isDark
							? 'opacity-0 rotate-180 scale-75'
							: 'opacity-100 rotate-0 scale-100'
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
				</svg>

				{/* Moon icon */}
				<svg
					className={`absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out ${
						isDark
							? 'opacity-100 rotate-0 scale-100'
							: 'opacity-0 -rotate-180 scale-75'
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			</div>

			{/* Tooltip */}
			<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
				{isDark ? 'Light mode' : 'Dark mode'}
			</div>
		</button>
	);
}
