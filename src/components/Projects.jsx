import { H3, Lead } from './Typography.jsx';
import ProjectItem from './ProjectItem.jsx';

export default function Projects() {
	const projects = [
		{
			title: 'UX Test Tools',
			description:
				'A comprehensive suite of user experience testing tools designed to help UX researchers and designers conduct effective usability studies. Features include user testing templates, analytics dashboards, and collaborative feedback systems.',
			technologies: [
				'React',
				'TypeScript',
				'Next.js',
				'Node.js',
				'PostgreSQL',
			],
			githubUrl:
				'https://github.com/habbeunik/ux-test-tools',
			liveUrl: 'https://uxtesttools.com/',
			status: 'completed',
		},
		{
			title: 'React Flow Workflow',
			description:
				'A powerful React hook for building interactive workflow diagrams with React Flow. Features smart layout engine, configurable spacing, and simplified API for creating node-based workflows with automatic layout capabilities.',
			technologies: [
				'React',
				'TypeScript',
				'React Flow',
				'NPM Package',
				'Node.js',
			],
			githubUrl:
				'https://github.com/habbeunik/react-flow-workflow',
			liveUrl:
				'https://www.npmjs.com/package/react-flow-workflow',
			status: 'completed',
		},
		{
			title: 'Pokemon Flow Visualizer',
			description:
				'An interactive Pokemon evolution flow visualizer built with React Flow. Demonstrates the power of the react-flow-workflow library with a fun, engaging interface showing Pokemon evolution chains and relationships.',
			technologies: [
				'React',
				'TypeScript',
				'React Flow',
				'Vercel',
				'Tailwind CSS',
			],
			githubUrl:
				'https://github.com/habbeunik/pokemon-flow-visualizer',
			liveUrl:
				'https://pokemon-flow-visualizer-omega.vercel.app/',
			status: 'completed',
		},
		{
			title: 'Journal App',
			description:
				'A modern personal journaling application with rich text editing, mood tracking, and data visualization. Features include search functionality, tags, export capabilities, and beautiful UI for daily reflection.',
			technologies: [
				'React',
				'TypeScript',
				'Vercel',
				'Tailwind CSS',
				'Local Storage',
			],
			githubUrl: 'https://github.com/habbeunik/journal-app',
			liveUrl: 'https://journ-app.vercel.app/',
			status: 'completed',
		},
		{
			title: 'Study App',
			description:
				'An AI-powered study tool designed to enhance learning efficiency and retention. Features intelligent content generation, adaptive quizzes, progress tracking, and personalized study recommendations based on learning patterns.',
			technologies: [
				'React',
				'TypeScript',
				'AI/ML',
				'Node.js',
				'PostgreSQL',
			],
			githubUrl: 'https://github.com/habbeunik/study-app',
			liveUrl: '',
			status: 'in-progress',
		},
	];

	return (
		<section
			id="projects"
			className="w-full h-full flex flex-col fade-in gap-12 md:gap-16 px-4 md:px-12 py-16 md:py-24 relative">
			<div className="text-center max-w-4xl mx-auto relative z-10">
				<div className="space-y-6">
					<H3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
						Featured Projects
					</H3>
					<Lead className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						A collection of projects showcasing my expertise
						in full-stack development, from data engineering
						tools to consumer applications.
					</Lead>
				</div>
			</div>

			<div className="max-w-7xl mx-auto w-full relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
					{projects.map((project, index) => (
						<ProjectItem
							key={index}
							title={project.title}
							description={project.description}
							technologies={project.technologies}
							githubUrl={project.githubUrl}
							liveUrl={project.liveUrl}
							status={project.status}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
