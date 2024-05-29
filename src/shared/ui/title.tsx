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
			default: 'text-lg lg:text-xl font-semibold',
			xs: 'text-base font-medium',
			sm: 'text-base lg:text-lg font-medium',
			lg: 'text-xl lg:text-2xl font-bold',
			xl: 'text-4xl lg:text-5xl font-bold'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

interface ITitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof TitleVariants>,
		React.PropsWithChildren {}

const Title: FC<ITitleProps> = ({
	children,
	variant,
	size,
	className,
	...props
}) => (
	<h1 className={cn(TitleVariants({ variant, size, className }))} {...props}>
		{children}
	</h1>
);

export { Title, TitleVariants };
export type { ITitleProps };
