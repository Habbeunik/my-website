import {
	H1,
	P,
	Small,
	Muted,
	H3,
	Lead,
} from './Typography.jsx';

const DeveloperIllustration = () => (
	<svg
		width="400"
		height="300"
		viewBox="0 0 400 300"
		className="w-full h-auto max-w-md mx-auto animate-fade-in-up animate-delay-300"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		{/* Background elements */}
		<rect
			x="50"
			y="50"
			width="300"
			height="200"
			rx="10"
			fill="none"
			stroke="hsl(var(--muted-foreground))"
			strokeWidth="2"
			strokeOpacity="0.3"
		/>

		{/* Developer figure */}
		<circle
			cx="200"
			cy="120"
			r="25"
			fill="none"
			stroke="hsl(var(--foreground))"
			strokeWidth="2"
		/>
		<rect
			x="185"
			y="145"
			width="30"
			height="40"
			rx="5"
			fill="none"
			stroke="hsl(var(--foreground))"
			strokeWidth="2"
		/>

		{/* Code elements */}
		<rect
			x="80"
			y="80"
			width="60"
			height="4"
			rx="2"
			fill="hsl(var(--muted-foreground))"
			opacity="0.6"
		/>
		<rect
			x="80"
			y="90"
			width="80"
			height="4"
			rx="2"
			fill="hsl(var(--muted-foreground))"
			opacity="0.4"
		/>
		<rect
			x="80"
			y="100"
			width="70"
			height="4"
			rx="2"
			fill="hsl(var(--muted-foreground))"
			opacity="0.5"
		/>

		{/* Terminal window */}
		<rect
			x="250"
			y="80"
			width="100"
			height="60"
			rx="5"
			fill="none"
			stroke="hsl(var(--foreground))"
			strokeWidth="2"
		/>
		<rect
			x="250"
			y="80"
			width="100"
			height="15"
			rx="5"
			fill="hsl(var(--muted-foreground))"
			opacity="0.2"
		/>
		<circle
			cx="260"
			cy="87"
			r="2"
			fill="hsl(var(--destructive))"
		/>
		<circle
			cx="270"
			cy="87"
			r="2"
			fill="hsl(var(--warning))"
		/>
		<circle
			cx="280"
			cy="87"
			r="2"
			fill="hsl(var(--success))"
		/>

		{/* Terminal content */}
		<rect
			x="255"
			y="105"
			width="40"
			height="3"
			rx="1"
			fill="hsl(var(--foreground))"
			opacity="0.7"
		/>
		<rect
			x="255"
			y="115"
			width="60"
			height="3"
			rx="1"
			fill="hsl(var(--muted-foreground))"
			opacity="0.5"
		/>
		<rect
			x="255"
			y="125"
			width="50"
			height="3"
			rx="1"
			fill="hsl(var(--muted-foreground))"
			opacity="0.4"
		/>

		{/* Floating elements */}
		<circle
			cx="100"
			cy="200"
			r="3"
			fill="hsl(var(--muted-foreground))"
			opacity="0.4"
		/>
		<circle
			cx="300"
			cy="180"
			r="2"
			fill="hsl(var(--muted-foreground))"
			opacity="0.3"
		/>
		<circle
			cx="320"
			cy="220"
			r="4"
			fill="hsl(var(--muted-foreground))"
			opacity="0.2"
		/>

		{/* Connection lines */}
		<path
			d="M200 145 L200 200 L150 200"
			stroke="hsl(var(--muted-foreground))"
			strokeWidth="1"
			opacity="0.3"
			fill="none"
		/>
		<path
			d="M200 145 L200 200 L250 200"
			stroke="hsl(var(--muted-foreground))"
			strokeWidth="1"
			opacity="0.3"
			fill="none"
		/>
	</svg>
);

export default function About() {
	return (
		<section
			id="about"
			className="w-full h-auto md:h-[65vh] flex items-center justify-center px-4 md:px-12 py-20">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
					<div className="flex flex-col gap-8 order-2 lg:order-1">
						<div className="space-y-4">
							<H1 className="text-5xl lg:text-6xl font-bold tracking-tight hover-scale cursor-default">
								Abbey Kumapayi
							</H1>
							<div className="flex items-center gap-4">
								<Muted className="text-base md:text-xl text-foreground">
									Product Engineer
								</Muted>
								<div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
								<Muted className="text-base md:text-xl text-foreground">
									7+ years experience
								</Muted>
							</div>
						</div>
						<Lead className="text-2xl leading-relaxed text-foreground max-w-2xl">
							I build{' '}
							<span className="text-foreground font-bold">
								fast, accessible, beautiful
							</span>{' '}
							web experiences and solutions that{' '}
							<span className="text-foreground font-bold">
								drive impact
							</span>{' '}
							in the real world.
						</Lead>

						<div className="space-y-4">
							<Muted className="text-lg leading-8">
								Product Engineer with extensive experience
								building software across{' '}
								<span className="text-foreground font-medium">
									e-commerce
								</span>
								,{' '}
								<span className="text-foreground font-medium">
									transportation
								</span>
								, and{' '}
								<span className="text-foreground font-medium">
									insurance
								</span>{' '}
								industries.
							</Muted>
							<Muted className="text-lg leading-8">
								{' '}
								Currently working as a{' '}
								<span className="text-foreground font-semibold">
									Senior Frontend Developer
								</span>{' '}
								at{' '}
								<span className="text-foreground font-semibold">
									React Squad
								</span>
								, leading frontend development initiatives
								and building scalable component libraries
								using{' '}
								<span className="text-foreground font-semibold">
									React
								</span>
								,{' '}
								<span className="text-foreground font-semibold">
									Next.js
								</span>
								, and{' '}
								<span className="text-foreground font-semibold">
									TypeScript
								</span>
								.
							</Muted>
						</div>
					</div>

					<div className="flex justify-center lg:justify-end order-1 lg:order-2">
						<div className="relative">
							<DeveloperIllustration />
							<div className="absolute -top-4 -right-4 w-8 h-8 bg-muted-foreground/20 rounded-full animate-pulse"></div>
							<div className="absolute -bottom-4 -left-4 w-6 h-6 bg-muted-foreground/15 rounded-full animate-pulse delay-1000"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
