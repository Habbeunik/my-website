import { H3, Lead } from './Typography.jsx';
import SectionContainer from './SectionContainer.jsx';
import ExperienceItem from './ExperienceItem.jsx';

export default function Experience() {
	const experiences = [
		{
			title: 'Senior Frontend Developer',
			company: 'React Squad',
			location: 'Remote',
			period: 'Dec 2024 — Present',
			description:
				'Leading frontend development initiatives for cutting-edge web applications. Building scalable component libraries and design systems that enhance developer productivity. Mentoring junior developers and conducting code reviews to maintain high code quality standards.',
			tools: [
				'React',
				'Next.js',
				'TypeScript',
				'Component Libraries',
				'Design Systems',
			],
		},
		{
			title: 'Lead Frontend Engineer',
			company: 'Datangle',
			location: 'London',
			period: 'May 2024 — Nov 2024',
			description:
				'Built a comprehensive pipeline workflow builder for data engineers, enabling visual data processing workflows. Led frontend architecture decisions and mentored junior engineers. Collaborated with cross-functional teams to deliver high-performance applications.',
			tools: [
				'NextJS',
				'TypeScript',
				'React Flow',
				'Frontend Architecture',
			],
		},
		{
			title: 'Senior Software Engineer',
			company: 'Theoremone',
			location: 'California',
			period: 'Mar 2022 — Nov 2023',
			description:
				'Built various products for partners using modern web technologies. Contributed to frontend architecture of a title insurance application, focusing on scalability and user experience. Conducted feasibility studies and collaborated with UI designers.',
			tools: [
				'React',
				'VueJS',
				'NodeJS',
				'HTML',
				'CSS',
				'JavaScript',
				'TypeScript',
			],
		},
		{
			title: 'Senior Frontend Engineer',
			company: 'Pangaea Holdings',
			location: 'California',
			period: 'Jan 2021 — Feb 2022',
			description:
				'Developed e-commerce solutions for multiple company brands, ensuring optimal UI/UX quality and code standards. Integrated web applications with Shopify API for seamless inventory management. Achieved significant performance improvements by reducing web application load time by 40%.',
			tools: [
				'React',
				'TypeScript',
				'Shopify API',
				'HTML',
				'CSS',
				'Performance Optimization',
			],
		},
		{
			title: 'Lead Software Engineer',
			company: 'Enyata',
			location: 'Lagos',
			period: 'Oct 2019 — Jan 2021',
			description:
				'Built various products including an anonymous dating app and a vehicle maintenance and inventory app for partners. Mentored junior engineers and conducted code reviews to improve code quality. Set up standard project architectures and translated product requirements to technical specifications.',
			tools: [
				'React',
				'JavaScript',
				'Project Architecture',
				'Code Review',
				'Mentoring',
			],
		},
	];

	return (
		<section
			id="experience"
			className="w-full h-full flex flex-col fade-in gap-12  px-4 md:px-12 py-10 md:py-20">
			{/* Header Section */}
			<div className="text-center max-w-3xl mx-auto">
				<H3 className="text-2xl md:text-4xl font-bold mb-4">
					Professional Experience
				</H3>
			</div>

			{/* Experience List */}
			<div className="max-w-4xl mx-auto w-full">
				<div className="flex flex-col gap-12">
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
