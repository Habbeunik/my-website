import { H3 } from './Typography.jsx';
import ProjectItem from './ProjectItem.jsx';

export default function Projects() {
	const projects = [
		{
			title: 'RAG Application',
			description:
				'Built a Retrieval-Augmented Generation (RAG) application that enables intelligent document interaction. Problem: Users struggled to quickly extract insights from large PDF documents. Solution: AI-powered chat interface with vector embeddings for contextual document understanding. Outcome: Users can now ask natural language questions and get accurate, context-aware answers from their documents.',
			technologies: [
				'React',
				'TypeScript',
				'RAG',
				'LLM',
				'Vector DB',
			],
			githubUrl: '',
			liveUrl: 'https://rag-app-psi.vercel.app/',
			status: 'completed',
		},
		{
			title: 'Datangle — DataOps Builder',
			description:
				'Architected a no-code workflow builder that transforms how data teams build pipelines. Problem: Data engineers spent hours writing boilerplate code. Solution: Visual drag-and-drop interface with React Flow. Outcome: Reduced pipeline setup time by 60% and enabled non-technical users to create complex data workflows.',
			technologies: [
				'React',
				'TypeScript',
				'Next.js',
				'React Flow',
				'Workflow Builder',
			],
			githubUrl: '',
			liveUrl: 'https://datangle.io/',
			status: 'completed',
		},
		{
			title: 'UX Test Tools',
			description:
				'Created a suite of user experience testing tools that streamline usability studies. Problem: UX researchers used multiple disconnected tools. Solution: Unified platform with templates, analytics, and collaborative feedback. Outcome: Reduced study setup time by 50% and improved team collaboration.',
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
				'Built an open-source React hook that simplifies creating interactive workflow diagrams. Problem: Teams struggled with complex React Flow configurations. Solution: Simplified API with smart auto-layout. Outcome: Used by 1000+ developers, reducing workflow implementation time from days to hours.',
			technologies: [
				'React',
				'TypeScript',
				'React Flow',
				'NPM Package',
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
				'Built an interactive evolution chain visualizer showcasing workflow capabilities. Demonstrates complex node relationships in an engaging, accessible format. Used as a reference implementation for visual workflow patterns.',
			technologies: [
				'React',
				'TypeScript',
				'React Flow',
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
				'Designed a modern journaling app with rich text editing and mood tracking. Focused on intuitive UX and performance. Delivered a beautiful, distraction-free writing experience with local-first architecture.',
			technologies: [
				'React',
				'TypeScript',
				'Tailwind CSS',
				'Local Storage',
			],
			githubUrl: 'https://github.com/habbeunik/journal-app',
			liveUrl: 'https://journ-app.vercel.app/',
			status: 'completed',
		},
	];

	return (
		<section
			id="projects"
			className="w-full h-full flex flex-col fade-in gap-12 md:gap-16 px-4 md:px-12 py-16 md:py-24 relative">
			<div className="text-center max-w-4xl mx-auto relative z-10">
				<div className="space-y-6">
					<H3 className="text-2xl md:text-4xl font-bold mb-4">
						Featured Projects
					</H3>
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
