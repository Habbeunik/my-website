import { H3 } from './Typography.jsx';
import ExperienceItem from './ExperienceItem.jsx';

export default function Experience() {
	const experiences = [
		{
			title: 'Senior Frontend Developer',
			company: 'React Squad',
			location: 'Remote',
			period: 'Dec 2024 — Present',
			description:
				'Built full-stack apps (SocialKit, VoySaude, DealDeploy). Integrated AI for company enrichment and automated outreach. Improved backend efficiency and development speed.',
			tools: [
				'React',
				'Next.js',
				'TypeScript',
				'AI Integration',
			],
		},
		{
			title: 'Lead Frontend Engineer',
			company: 'Datangle',
			location: 'London',
			period: 'May 2024 — Nov 2024',
			description:
				'Architected the visual DataOps workflow builder with conditional branching and YAML config export. Led design discussions and mentored a junior engineer.',
			tools: [
				'Next.js',
				'TypeScript',
				'React Flow',
				'Workflow Builder',
			],
		},
		{
			title: 'Senior Software Engineer',
			company: 'TheoremOne',
			location: 'California',
			period: 'Mar 2022 — Nov 2023',
			description:
				'Developed large-scale enterprise software for a title insurance company. Led chat and bulk operations features, and guided implementation research.',
			tools: ['React', 'Vue.js', 'Node.js', 'TypeScript'],
		},
		{
			title: 'Senior Frontend Engineer',
			company: 'Pangaea Holdings',
			location: 'California',
			period: 'Jan 2021 — Feb 2022',
			description:
				'Improved conversions by 10% through A/B testing (Optimizely), built multi-language support via Crowdin, and developed gift card systems.',
			tools: [
				'React',
				'TypeScript',
				'A/B Testing',
				'Localization',
			],
		},
		{
			title: 'Lead Software Engineer',
			company: 'Enyata',
			location: 'Lagos',
			period: 'Oct 2019 — Jan 2021',
			description:
				'Led teams, established coding standards, mentored developers, and translated client goals into scalable technical solutions.',
			tools: [
				'React',
				'JavaScript',
				'Project Architecture',
				'Mentoring',
			],
		},
	];

	return (
		<section
			id="experience"
			className="w-full h-full flex flex-col fade-in gap-16 px-4 md:px-12 py-16 md:py-24 relative">
			<div className="text-center max-w-4xl mx-auto relative z-10 mb-8">
				<div className="space-y-4">
					<H3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						Professional Experience
					</H3>
					<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full mx-auto"></div>
				</div>
			</div>

			<div className="max-w-5xl mx-auto w-full relative z-10">
				<div className="flex flex-col gap-16">
					{experiences.map((exp, index) => (
						<ExperienceItem
							key={index}
							title={exp.title}
							company={exp.company}
							location={exp.location}
							period={exp.period}
							description={exp.description}
							tools={exp.tools}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
