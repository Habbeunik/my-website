import { H2, P } from './Typography';

export default function About() {
	return (
		<div className="w-full px-4 md:px-12 py-20 md:py-32 relative">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted-foreground/[0.02] to-transparent"></div>
			</div>

			<div className="max-w-4xl mx-auto relative">
				<div className="mb-12 md:mb-16">
					<H2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
						About
					</H2>
					<div className="w-16 h-1 bg-gradient-to-r from-foreground/50 to-transparent rounded-full"></div>
				</div>

				<div className="space-y-8 md:space-y-10">
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						I'm a product engineer who works at the
						intersection of design, engineering, and product
						strategy — building systems that are as
						thoughtful as they are scalable.
					</P>
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						Over the past seven years, I've helped teams
						across e-commerce, DataOps, and enterprise
						software ship reliable, high-impact products. My
						work often sits behind the scenes — shaping
						design systems, improving performance, and
						building architectures that make teams faster
						and products stronger.
					</P>
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						Lately, I've been exploring how modern AI can
						enhance everyday tools — from intelligent
						interfaces to workflow automation — bringing
						simplicity to complex systems.
					</P>
				</div>
			</div>
		</div>
	);
}
