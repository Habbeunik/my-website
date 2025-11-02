import { H3 } from './Typography.jsx';
import ProjectItem from './ProjectItem.jsx';
import { GridPattern } from './DecorativeElements.jsx';

export default function Projects() {
	const projects = [
		{
			title: 'RAG-Enabled PDF Chat',
			description:
				'AI document tool that turns PDFs into interactive chat interfaces using RAG for faster, context-aware insights.',
			technologies: [
				'React',
				'TypeScript',
				'RAG',
				'Vector DB',
			],
			githubUrl: '',
			liveUrl: 'https://rag-app-psi.vercel.app/',
			status: 'completed',
		},
		{
			title: 'Datangle',
			description:
				'No-code DataOps platform with visual workflow builder and YAML config export for backend execution.',
			technologies: [
				'React',
				'TypeScript',
				'Next.js',
				'React Flow',
			],
			githubUrl: '',
			liveUrl: 'https://datangle.io/',
			status: 'completed',
		},
		{
			title: 'UX Test Tools',
			description:
				'UX research suite that streamlines testing and team collaboration, reducing research cycles by 40%.',
			technologies: [
				'React',
				'TypeScript',
				'Next.js',
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
				'Open-source React hook for workflow diagrams, reducing integration boilerplate by 60%.',
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
	];

	return (
		<section
			id="projects"
			className="w-full h-full flex flex-col fade-in gap-12 md:gap-16 px-4 md:px-12 py-16 md:py-24 relative overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<GridPattern className="opacity-30" />
			</div>
			<div className="text-center max-w-4xl mx-auto relative z-10 mb-8">
				<div className="space-y-4">
					<H3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						Featured Projects
					</H3>
					<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full mx-auto"></div>
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
