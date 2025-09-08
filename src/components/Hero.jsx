import { H1, Lead, P } from './Typography.jsx';

export default function Hero() {
	return (
		<section id="home" className="py-20 text-center">
			<div className="max-w-4xl mx-auto">
				<H1 className="text-5xl md:text-6xl font-bold text-white mb-6">
					Hi, I'm{' '}
					<span className="text-gray-300">Your Name</span>
				</H1>
				<Lead className="text-xl md:text-2xl text-gray-300 mb-8">
					Full Stack Developer & UI/UX Designer
				</Lead>
				<P className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
					I create beautiful, functional, and user-centered
					digital experiences that bring ideas to life
					through code and design.
				</P>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="#projects"
						className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
						View My Work
					</a>
					<a
						href="#contact"
						className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
						Get In Touch
					</a>
				</div>
			</div>
		</section>
	);
}
