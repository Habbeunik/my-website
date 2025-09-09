import { H1, Muted, Lead } from './Typography';
import Socials from './Socials';

export default function About() {
	return (
		<section
			id="about"
			className="w-full h-auto md:min-h-[65vh] flex items-center justify-center px-4 md:px-12 py-24 md:py-32 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-500/8 to-blue-500/8 rounded-full blur-2xl animate-pulse delay-500"></div>
				<div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-sky-500/12 to-indigo-500/12 rounded-full blur-xl animate-pulse delay-700"></div>
			</div>

			<div className="max-w-4xl mx-auto w-full text-center relative z-10">
				<div className="flex flex-col gap-8">
					<div className="space-y-6">
						<div className="relative">
							<H1 className="text-5xl lg:text-6xl font-bold tracking-tight hover-scale cursor-default">
								Abbey Kumapayi
							</H1>
							{/* Enhanced underline accent */}
							<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full"></div>
							<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent rounded-full"></div>
						</div>
						<div className="flex items-center justify-center gap-4">
							<Muted className="text-base md:text-xl text-foreground">
								Product Engineer
							</Muted>
							<div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
							<Muted className="text-base md:text-xl text-foreground">
								7+ years experience
							</Muted>
						</div>
					</div>
					<Lead className="text-2xl leading-relaxed text-foreground max-w-3xl mx-auto">
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

					<div className="space-y-4 max-w-3xl mx-auto">
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
							, leading frontend development initiatives and
							building scalable component libraries using{' '}
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

					{/* Social Links */}
					<div className="flex justify-center mt-8">
						<div className="flex flex-row gap-4">
							<a
								href="https://github.com/Habbeunik"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/50 backdrop-blur-sm border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-200 rounded-lg hover:scale-105"
								aria-label="GitHub">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/abbey-kumapayi-45699b140/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/50 backdrop-blur-sm border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-200 rounded-lg hover:scale-105"
								aria-label="LinkedIn">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
							<a
								href="https://x.com/AbbeyKumap27186"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-background/50 backdrop-blur-sm border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-200 rounded-lg hover:scale-105"
								aria-label="X (Twitter)">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="mailto:abbeykumapayi@gmail.com"
								className="p-3 bg-background/50 backdrop-blur-sm border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-200 rounded-lg hover:scale-105"
								aria-label="Email">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
