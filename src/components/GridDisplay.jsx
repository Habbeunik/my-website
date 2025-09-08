import { H3 } from './Typography.jsx';

export default function GridDisplay({
	title,
	items,
	renderItem,
}) {
	return (
		<section className="w-full h-full flex flex-col fade-in px-12 py-10 gap-12">
			<H3 className="w-fit">{title}</H3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{items.map((item, index) =>
					renderItem(item, index, items.length)
				)}
			</div>
		</section>
	);
}
