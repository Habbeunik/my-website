import { H3 } from './Typography.jsx';
import { Badge } from './Badge.jsx';
import {
	CodeIcon,
	DatabaseIcon,
	SparklesIcon,
	PaletteIcon,
	CpuIcon,
	UsersIcon,
} from './DecorativeElements.jsx';

export default function Skills() {
	const skillCategories = [
		{
			title: 'Frontend',
			skills: ['React', 'Next.js', 'React Router', 'TypeScript', 'Tailwind CSS'],
			icon: CodeIcon,
		},
		{
			title: 'Backend',
			skills: ['Node.js', 'Supabase', 'Prisma', 'Convex DB', 'PostgreSQL'],
			icon: DatabaseIcon,
		},
		{
			title: 'AI & Data',
			skills: ['LangChain', 'Vector Databases', 'OpenAI API', 'RAG Systems'],
			icon: SparklesIcon,
		},
		{
			title: 'Product & Design',
			skills: ['Design Systems', 'A/B Testing (Optimizely)', 'Localization (Crowdin)', 'Performance Optimization'],
			icon: PaletteIcon,
		},
		{
			title: 'Architecture & Ops',
			skills: ['API Design', 'CI/CD', 'Microservices', 'Authentication'],
			icon: CpuIcon,
		},
		{
			title: 'Collaboration',
			skills: ['Mentorship', 'Product Strategy', 'Documentation', 'Agile'],
			icon: UsersIcon,
		},
	];

	return (
		<section
			id="skills"
			className="w-full h-full flex flex-col fade-in gap-12 md:gap-16 px-4 md:px-12 py-16 md:py-24 relative">
			<div className="text-center max-w-4xl mx-auto relative z-10 mb-8">
				<div className="space-y-4">
					<H3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						Skills & Tools
					</H3>
					<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full mx-auto"></div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto w-full relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
					{skillCategories.map((category, index) => {
						const Icon = category.icon;
						const delayClass = `animate-delay-${(index % 4) * 100}`;
						return (
							<div
								key={index}
								className={`flex flex-col gap-4 p-6 rounded-xl border border-muted-foreground/10 bg-background/40 backdrop-blur-sm hover:bg-background/60 hover:border-primary/20 transition-all duration-300 group animate-fade-in-up ${delayClass}`}>
								<div className="flex items-center justify-center gap-3">
									<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
										<Icon className="w-5 h-5 text-primary" />
									</div>
									<h4 className="text-lg md:text-xl font-semibold text-foreground text-center">
										{category.title}
									</h4>
								</div>
								<div className="flex flex-wrap gap-3 justify-center">
									{category.skills.map((skill, skillIndex) => (
										<Badge
											key={skillIndex}
											variant="tech"
											size="sm"
											className="font-medium hover:scale-105 transition-transform">
											{skill}
										</Badge>
									))}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
