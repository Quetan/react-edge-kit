import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

interface IProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

const PageWrapper: FC<IProps> = ({ children, className, ...props }) => (
	<div className={cn('container relative min-h-96', className)} {...props}>
		{children}
	</div>
);

export default PageWrapper;
