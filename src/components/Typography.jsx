import React from 'react';
import { cn } from '../lib/utils';

const typographyVariants = {
	h1: 'scroll-m-20 text-4xl font-semibold tracking-tight',
	h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
	h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
	h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
	h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
	h6: 'scroll-m-20 text-base font-semibold tracking-tight',
	p: 'leading-7 [&:not(:first-child)]:mt-6',
	blockquote: 'mt-6 border-l-2 pl-6 italic',
	list: 'my-6 ml-6 list-disc [&>li]:mt-2',
	inlineCode:
		'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
	lead: 'text-xl text-muted-foreground',
	large: 'text-lg font-semibold',
	small: 'text-sm font-medium leading-none',
	muted: 'text-sm text-muted-foreground',
};

const Typography = React.forwardRef(
	(
		{ className, variant = 'p', as, children, ...props },
		ref
	) => {
		const Component =
			as || (variant === 'p' ? 'p' : variant);

		return React.createElement(
			Component,
			{
				className: cn(
					typographyVariants[variant],
					className
				),
				ref,
				...props,
			},
			children
		);
	}
);

Typography.displayName = 'Typography';

// Specific typography components for convenience
export const H1 = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="h1"
			className={className}
			{...props}
		/>
	)
);
H1.displayName = 'H1';

export const H2 = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="h2"
			className={className}
			{...props}
		/>
	)
);
H2.displayName = 'H2';

export const H3 = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="h3"
			className={className}
			{...props}
		/>
	)
);
H3.displayName = 'H3';

export const H4 = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="h4"
			className={className}
			{...props}
		/>
	)
);
H4.displayName = 'H4';

export const H5 = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="h5"
			className={className}
			{...props}
		/>
	)
);
H5.displayName = 'H5';

export const H6 = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="h6"
			className={className}
			{...props}
		/>
	)
);
H6.displayName = 'H6';

export const P = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="p"
			className={className}
			{...props}
		/>
	)
);
P.displayName = 'P';

export const Blockquote = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="blockquote"
			className={className}
			{...props}
		/>
	)
);
Blockquote.displayName = 'Blockquote';

export const List = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="list"
			className={className}
			{...props}
		/>
	)
);
List.displayName = 'List';

export const InlineCode = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="inlineCode"
			className={className}
			{...props}
		/>
	)
);
InlineCode.displayName = 'InlineCode';

export const Lead = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="lead"
			className={className}
			{...props}
		/>
	)
);
Lead.displayName = 'Lead';

export const Large = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="large"
			className={className}
			{...props}
		/>
	)
);
Large.displayName = 'Large';

export const Small = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="small"
			className={className}
			{...props}
		/>
	)
);
Small.displayName = 'Small';

export const Muted = React.forwardRef(
	({ className, ...props }, ref) => (
		<Typography
			ref={ref}
			variant="muted"
			className={className}
			{...props}
		/>
	)
);
Muted.displayName = 'Muted';

export default Typography;
