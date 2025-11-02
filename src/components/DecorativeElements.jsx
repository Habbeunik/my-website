// Decorative SVG illustrations for visual enhancement

export function BlobDecoration({ className = '' }) {
	return (
		<svg
			className={`absolute pointer-events-none ${className}`}
			width="400"
			height="400"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			opacity="0.1">
			<path
				d="M200 50C250 50 300 100 300 150C300 200 250 250 200 250C150 250 100 200 100 150C100 100 150 50 200 50Z"
				fill="url(#blob-gradient)"
				style={{
					filter: 'blur(40px)',
				}}
			/>
			<defs>
				<linearGradient
					id="blob-gradient"
					x1="0"
					y1="0"
					x2="400"
					y2="400"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="rgba(255, 255, 255, 0.1)" />
					<stop
						offset="1"
						stopColor="rgba(255, 255, 255, 0.05)"
					/>
				</linearGradient>
			</defs>
		</svg>
	);
}

export function GridPattern({ className = '' }) {
	return (
		<div
			className={`absolute inset-0 pointer-events-none ${className}`}
			style={{
				backgroundImage: `
					linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
					linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
				`,
				backgroundSize: '50px 50px',
			}}
		/>
	);
}

export function SectionDivider({ variant = 'default' }) {
	if (variant === 'minimal') {
		return (
			<div className="relative w-full py-12 md:py-16 flex items-center justify-center">
				<div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
			</div>
		);
	}
	
	return (
		<div className="relative w-full py-8 md:py-12 flex items-center justify-center">
			<div className="absolute inset-0 flex items-center">
				<div className="w-full border-t border-muted-foreground/20"></div>
			</div>
			<div className="relative flex items-center gap-2">
				<div className="w-2 h-2 rounded-full bg-white/40"></div>
				<div className="w-1 h-1 rounded-full bg-white/60"></div>
				<div className="w-1 h-1 rounded-full bg-white/60"></div>
				<div className="w-2 h-2 rounded-full bg-white/40"></div>
			</div>
		</div>
	);
}

export function CodeIcon({ className = '' }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="16 18 22 12 16 6"></polyline>
			<polyline points="8 6 2 12 8 18"></polyline>
		</svg>
	);
}

export function DatabaseIcon({ className = '' }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
			<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
			<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
		</svg>
	);
}

export function SparklesIcon({ className = '' }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"></path>
		</svg>
	);
}

export function CpuIcon({ className = '' }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect
				x="4"
				y="4"
				width="16"
				height="16"
				rx="2"
				ry="2"></rect>
			<rect x="9" y="9" width="6" height="6"></rect>
			<line x1="9" y1="1" x2="9" y2="4"></line>
			<line x1="15" y1="1" x2="15" y2="4"></line>
			<line x1="9" y1="20" x2="9" y2="23"></line>
			<line x1="15" y1="20" x2="15" y2="23"></line>
			<line x1="20" y1="9" x2="23" y2="9"></line>
			<line x1="20" y1="14" x2="23" y2="14"></line>
			<line x1="1" y1="9" x2="4" y2="9"></line>
			<line x1="1" y1="14" x2="4" y2="14"></line>
		</svg>
	);
}

export function PaletteIcon({ className = '' }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle
				cx="13.5"
				cy="6.5"
				r=".5"
				fill="currentColor"></circle>
			<circle
				cx="17.5"
				cy="10.5"
				r=".5"
				fill="currentColor"></circle>
			<circle
				cx="8.5"
				cy="7.5"
				r=".5"
				fill="currentColor"></circle>
			<circle
				cx="6.5"
				cy="12.5"
				r=".5"
				fill="currentColor"></circle>
			<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.644-.432-1.003-.432-.526 0-1.003.384-1.5.732-.496.348-.994.732-1.5.732s-.994-.384-1.5-.732C5.97 19.248 5.472 19.01 5.03 18.842c.277-.5.416-1.056.416-1.658 0-1.618-1.312-3-3-3s-3 1.382-3 3c0 .602.14 1.158.416 1.658C1.472 19.01 1.97 19.248 2.5 19.248c.506 0 1.004-.384 1.5-.732.496-.348.974-.732 1.5-.732s1.004.384 1.5.732c.506.348 1.004.584 1.5.584.358 0 .712-.144 1.003-.432.256-.29.437-.688.437-1.125 0-.942.722-1.688 1.648-1.688.926 0 1.648.746 1.648 1.688 0 .437-.18.835-.437 1.125-.29.289-.644.432-1.003.432-.526 0-1.003-.384-1.5-.732-.496-.348-.994-.732-1.5-.732s-1.004.384-1.5.732"></path>
		</svg>
	);
}

export function UsersIcon({ className = '' }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
			<circle cx="9" cy="7" r="4"></circle>
			<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
			<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
		</svg>
	);
}
