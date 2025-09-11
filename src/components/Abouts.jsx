import { H1, Muted, Lead } from './Typography';

export default function About() {
	return (
		<div className="w-full h-auto md:min-h-[70vh] flex items-center justify-center px-4 py-12 md:px-12 py-24 md:py-32 relative overflow-hidden ">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			</div>

			<div className="max-w-5xl mx-auto w-full text-center relative z-10">
				<div className="flex flex-col gap-12">
					<div className="space-y-8">
						<div className="relative">
							<H1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
								Abbey Kumapayi
							</H1>
						</div>

						<div className="flex items-center justify-center gap-4 md:gap-6">
							<div className="px-4 py-2 md:px-4 md:py-2 rounded-full border border-muted-foreground/20 bg-background/80 backdrop-blur-xl">
								<Muted className="text-sm md:text-lg font-semibold text-foreground">
									Product Engineer
								</Muted>
							</div>
							<div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
							<div className="px-4 py-2 md:px-4 md:py-2 rounded-full border border-muted-foreground/20 bg-background/80 backdrop-blur-xl">
								<Muted className="text-sm md:text-lg font-semibold text-foreground">
									7+ years experience
								</Muted>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<Lead className="text-xl md:text-3xl leading-relaxed text-foreground max-w-4xl mx-auto font-light">
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

						<div className="space-y-6 max-w-4xl mx-auto">
							<Muted className="text-base md:text-xl leading-8 md:leading-9">
								Product Engineer with extensive experience
								building software across{' '}
								<span className="text-foreground font-semibold">
									e-commerce
								</span>
								,{' '}
								<span className="text-foreground font-semibold">
									transportation
								</span>
								, and{' '}
								<span className="text-foreground font-semibold">
									insurance
								</span>{' '}
								industries.
							</Muted>
							<Muted className="text-base md:text-xl leading-8 md:leading-9">
								Currently working as a{' '}
								<span className="text-foreground font-bold">
									Senior Frontend Developer
								</span>{' '}
								at{' '}
								<span className="text-foreground font-bold">
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

					<div className="flex justify-center mt-12">
						<div className="flex flex-row gap-3 md:gap-6">
							<a
								href="https://github.com/Habbeunik"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 md:p-4 border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-300 rounded-xl bg-background/80 backdrop-blur-xl"
								aria-label="GitHub">
								<svg
									className="w-5 h-5 md:w-6 md:h-6"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/abbey-kumapayi-45699b140/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 md:p-4 border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-300 rounded-xl bg-background/80 backdrop-blur-xl"
								aria-label="LinkedIn">
								<svg
									className="w-5 h-5 md:w-6 md:h-6"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
							<a
								href="https://x.com/AbbeyKumap27186"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 md:p-4 border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-300 rounded-xl bg-background/80 backdrop-blur-xl"
								aria-label="X (Twitter)">
								<svg
									className="w-5 h-5 md:w-6 md:h-6"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="mailto:abbeykumapayi@gmail.com"
								className="p-3 md:p-4 border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 transition-all duration-300 rounded-xl bg-background/80 backdrop-blur-xl"
								aria-label="Email">
								<svg
									className="w-5 h-5 md:w-6 md:h-6"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
