import type { FC, PropsWithChildren } from 'react';

const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
	<div className='container min-h-dvh py-24'>{children}</div>
);

export default PageWrapper;
