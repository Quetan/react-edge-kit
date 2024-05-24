import { createRootRoute } from '@tanstack/react-router';
import PageWrapper from '@/shared/ui/page-wrapper';
import Welcome from '@/pages/welcome';

export const Route = createRootRoute({
	component: () => <Welcome />,
	notFoundComponent: () => <PageWrapper>Page not found :(</PageWrapper>,
	errorComponent: () => <PageWrapper>Something went wrong :(</PageWrapper>,
	pendingComponent: () => <PageWrapper>Loading...</PageWrapper>
});
