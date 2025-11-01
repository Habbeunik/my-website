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
				'Leading frontend architecture for AI-powered applications, building scalable component libraries that enable faster shipping across teams. Mentoring engineers and driving code quality standards that support intelligent product development at scale.',
			tools: [
				'React',
				'Next.js',
				'TypeScript',
				'Design Systems',
				'AI Integration',
			],
		},
		{
			title: 'Lead Frontend Engineer',
			company: 'Datangle',
			location: 'London',
			period: 'May 2024 — Nov 2024',
			description:
				'Architected a no-code DataOps workflow builder that transformed how data teams build and manage pipelines. Delivered visual workflow capabilities that reduced pipeline setup time by 60% and enabled non-technical users to create complex data flows.',
			tools: [
				'Next.js',
				'TypeScript',
				'React Flow',
				'Workflow Builder',
			],
		},
		{
			title: 'Senior Software Engineer',
			company: 'Theoremone',
			location: 'California',
			period: 'Mar 2022 — Nov 2023',
			description:
				'Delivered enterprise-grade title insurance platform serving thousands of users. Scaled frontend architecture to handle complex workflows while maintaining reliability. Built features that improved transaction processing speed by 45%.',
			tools: ['React', 'Vue.js', 'Node.js', 'TypeScript'],
		},
		{
			title: 'Senior Frontend Engineer',
			company: 'Pangaea Holdings',
			location: 'California',
			period: 'Jan 2021 — Feb 2022',
			description:
				'Redesigned e-commerce platforms for multiple brands, boosting conversion rates through performance optimization and UX improvements. Reduced load times by 40% and integrated Shopify APIs to streamline inventory management across channels.',
			tools: [
				'React',
				'TypeScript',
				'Shopify API',
				'Performance Optimization',
			],
		},
		{
			title: 'Lead Software Engineer',
			company: 'Enyata',
			location: 'Lagos',
			period: 'Oct 2019 — Jan 2021',
			description:
				'Built and shipped MVP products including a dating platform and vehicle maintenance app, translating product vision into scalable technical architecture. Mentored junior engineers and established coding standards that accelerated team productivity.',
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
			<div className="text-center max-w-4xl mx-auto relative z-10">
				<div className="space-y-6">
					<H3 className="text-2xl md:text-4xl font-bold mb-4">
						Professional Experience
					</H3>
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
