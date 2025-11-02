import { H2, P } from './Typography';
import {
	BlobDecoration,
	GridPattern,
} from './DecorativeElements.jsx';

export default function About() {
	return (
		<div className="w-full px-4 md:px-12 py-20 md:py-32 relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<GridPattern />
				<BlobDecoration className="top-20 -right-40" />
				<BlobDecoration className="bottom-20 -left-40 animate-delay-200" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted-foreground/[0.02] to-transparent"></div>
			</div>

			<div className="max-w-4xl mx-auto relative">
				<div className="mb-12 md:mb-16">
					<div className="space-y-4">
						<H2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
							About
						</H2>
						<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
					</div>
				</div>

				<div className="space-y-8 md:space-y-10">
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						I'm Abbey — a product engineer with 7+ years of
						experience building systems that balance
						technical precision with real-world impact.
					</P>
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						I've led full-stack projects across e-commerce,
						DataOps, and enterprise software — designing
						scalable architecture, mentoring engineers, and
						integrating AI to make tools more intuitive and
						efficient.
					</P>
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						Lately, I've been focused on AI-driven
						applications — from document intelligence to
						workflow automation — building products that
						feel as thoughtful as they are powerful.
					</P>
					<P className="text-lg md:text-xl leading-8 md:leading-9 text-foreground">
						Beyond code, I'm curious about systems, design,
						and the human side of technology. I believe the
						best products are built with empathy and
						intention.
					</P>
				</div>
			</div>
		</div>
	);
}
