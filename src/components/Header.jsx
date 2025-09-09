import { useState } from 'react';
import { Muted } from './Typography.jsx';

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] =
		useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleDownloadCV = () => {
		// Create a temporary link to download CV
		const link = document.createElement('a');
		link.href = '/assets/cv/abbeykumapayi.pdf';
		link.download = 'Abbey-Kumapayi-CV.pdf';
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const navigationLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#blog', label: 'Blog' },
		{ href: '#chat-with-me', label: 'Contact' },
	];

	return (
		<>
			<header className="flex justify-between items-center h-full px-4 md:px-12 animate-slide-in-top">
				<div className="flex flex-col gap-2">
					{/* Logo/Brand */}
					<div className="text-xl font-semibold text-foreground hover-scale cursor-pointer">
						AK
					</div>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<div className="flex gap-8">
						{navigationLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="nav-link relative text-lg hover:text-foreground active:text-foreground transition-all duration-200 cursor-pointer group">
								<Muted className="text-muted-foreground group-hover:text-foreground group-active:text-foreground active:text-foreground transition-colors duration-200">
									{link.label}
								</Muted>
								<div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 active:opacity-100 transition-opacity duration-200"></div>
							</a>
						))}
					</div>

					<button
						onClick={handleDownloadCV}
						className="bg-transparent border border-border rounded-lg px-4 py-2 hover:bg-muted/30 transition-all duration-300 hover:border-muted-foreground/30 hover:-translate-y-0.5 hover-lift">
						<Muted className="text-foreground font-medium text-sm">
							Download CV
						</Muted>
					</button>
				</nav>

				{/* Mobile Navigation */}
				<div className="flex md:hidden items-center gap-4">
					<button
						onClick={toggleMobileMenu}
						className="p-2 rounded-lg border border-border hover:bg-muted/30 transition-all duration-300"
						aria-label="Toggle mobile menu">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div
					className="mobile-overlay open"
					onClick={closeMobileMenu}
				/>
			)}

			{/* Mobile Menu */}
			<div
				className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
				<div className="flex flex-col h-full">
					{/* Mobile Menu Header */}
					<div className="flex justify-between items-center p-4 border-b border-border">
						<div className="text-xl font-semibold text-foreground">
							AK
						</div>
						<button
							onClick={closeMobileMenu}
							className="p-2 rounded-lg hover:bg-muted/30 transition-all duration-300"
							aria-label="Close mobile menu">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Mobile Navigation Links */}
					<nav className="flex-1 p-4">
						<div className="flex flex-col gap-6">
							{navigationLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={closeMobileMenu}
									className="nav-link text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors duration-200">
									{link.label}
								</a>
							))}
						</div>
					</nav>

					{/* Mobile CV Download */}
					<div className="p-4 border-t border-border">
						<button
							onClick={() => {
								handleDownloadCV();
								closeMobileMenu();
							}}
							className="w-full bg-transparent border border-border rounded-lg px-4 py-3 hover:bg-muted/30 transition-all duration-300">
							<Muted className="text-foreground font-medium">
								Download CV
							</Muted>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
