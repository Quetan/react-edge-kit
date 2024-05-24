import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const TitleVariants = cva('flex flex-row items-center gap-4', {
	variants: {
		variant: {
			default: 'text-foreground',
			primary: 'text-primary'
		},
		size: {
			default: 'text-xl font-semibold',
			sm: 'text-lg font-medium',
			lg: 'text-2xl font-bold tracking-wide',
			xl: 'text-5xl font-bold tracking-tight',
			xs: 'text-base font-medium'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

interface ITitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof TitleVariants> {
	title: string;
	backButton?: boolean;
}

const Title: FC<ITitleProps> = ({
	title,
	variant,
	size,
	className,
	...props
}) => (
	<h1 className={cn(TitleVariants({ variant, size, className }))} {...props}>
		{title}
	</h1>
);

export { Title, TitleVariants };
export type { ITitleProps };
