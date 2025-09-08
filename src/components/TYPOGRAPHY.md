# Typography Component System

A comprehensive typography system inspired by shadcn/ui, designed for consistent and beautiful text styling across your application.

## Features

- **Consistent Design**: All typography follows a unified design system
- **Flexible**: Support for custom styling and color variants
- **Accessible**: Proper semantic HTML elements and ARIA support
- **TypeScript Support**: Full TypeScript definitions included
- **Tailwind Integration**: Built with Tailwind CSS classes

## Components

### Basic Typography Components

- `H1` - Main page titles
- `H2` - Section headings
- `H3` - Subsection headings
- `H4` - Minor headings
- `H5` - Small headings
- `H6` - Smallest headings
- `P` - Regular paragraphs
- `Lead` - Introduction/summary text
- `Large` - Emphasized text
- `Small` - Captions and footnotes
- `Muted` - Secondary text
- `Blockquote` - Quoted content
- `List` - Unordered lists
- `InlineCode` - Inline code snippets

### Main Typography Component

The main `Typography` component allows you to specify any variant and customize it further:

```jsx
import { Typography } from './Typography.jsx';

<Typography
	variant="h1"
	color="muted"
	className="text-center">
	Custom Heading
</Typography>;
```

## Usage Examples

### Basic Usage

```jsx
import { H1, H2, P, Lead } from './Typography.jsx';

function MyComponent() {
	return (
		<div>
			<H1>Main Title</H1>
			<Lead>This is a lead paragraph</Lead>
			<P>Regular paragraph content goes here.</P>
		</div>
	);
}
```

### With Custom Styling

```jsx
import { H2, P } from './Typography.jsx';

function MyComponent() {
	return (
		<div>
			<H2 className="text-center text-blue-400">
				Custom Styled Heading
			</H2>
			<P className="bg-gray-800 p-4 rounded">
				Custom styled paragraph
			</P>
		</div>
	);
}
```

### Using Color Variants

```jsx
import { Typography } from './Typography.jsx';

function MyComponent() {
	return (
		<div>
			<Typography variant="p" color="default">
				Default text
			</Typography>
			<Typography variant="p" color="muted">
				Muted text
			</Typography>
			<Typography variant="p" color="destructive">
				Error text
			</Typography>
			<Typography variant="p" color="success">
				Success text
			</Typography>
		</div>
	);
}
```

### Custom Elements

```jsx
import { Typography } from './Typography.jsx';

function MyComponent() {
	return (
		<Typography
			variant="h1"
			as="div"
			className="custom-class">
			This renders as a div with h1 styling
		</Typography>
	);
}
```

## Color Variants

- `default` - Primary text color (white)
- `muted` - Secondary text color (gray-300)
- `subtle` - Subtle text color (gray-400)
- `accent` - Accent text color (gray-200)
- `destructive` - Error/destructive text (red-400)
- `success` - Success text (green-400)
- `warning` - Warning text (yellow-400)

## Typography Variants

Each variant comes with predefined styling:

- **h1**: `text-4xl font-extrabold tracking-tight lg:text-5xl`
- **h2**: `text-3xl font-semibold tracking-tight border-b pb-2`
- **h3**: `text-2xl font-semibold tracking-tight`
- **h4**: `text-xl font-semibold tracking-tight`
- **h5**: `text-lg font-semibold tracking-tight`
- **h6**: `text-base font-semibold tracking-tight`
- **p**: `leading-7 [&:not(:first-child)]:mt-6`
- **lead**: `text-xl text-muted-foreground`
- **large**: `text-lg font-semibold`
- **small**: `text-sm font-medium leading-none`
- **muted**: `text-sm text-muted-foreground`
- **blockquote**: `mt-6 border-l-2 pl-6 italic`
- **list**: `my-6 ml-6 list-disc [&>li]:mt-2`
- **inlineCode**: `relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`

## Props

### Typography Component Props

| Prop        | Type        | Default     | Description               |
| ----------- | ----------- | ----------- | ------------------------- |
| `variant`   | `string`    | `'p'`       | Typography variant to use |
| `color`     | `string`    | `'default'` | Color variant             |
| `as`        | `string`    | `variant`   | HTML element to render    |
| `className` | `string`    | `undefined` | Additional CSS classes    |
| `children`  | `ReactNode` | -           | Content to render         |

### Individual Component Props

All individual components (H1, H2, P, etc.) accept the same props as the main Typography component, except they have a fixed `variant` prop.

## Best Practices

1. **Use semantic components**: Prefer `H1`, `H2`, `P` over the generic `Typography` component when possible
2. **Consistent hierarchy**: Maintain proper heading hierarchy (H1 → H2 → H3, etc.)
3. **Color consistency**: Use the predefined color variants for consistent theming
4. **Custom styling**: Add custom classes when needed, but maintain consistency with the design system
5. **Accessibility**: The components render proper semantic HTML elements for screen readers

## Migration from Regular HTML

Replace your existing HTML elements with the typography components:

```jsx
// Before
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-lg text-gray-300">Content</p>

// After
<H1>Title</H1>
<P color="muted">Content</P>
```

This ensures consistent styling and makes it easier to maintain your design system.
