import type { FC } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
	routeTree,
	defaultPreload: 'intent'
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const AppRouter: FC = () => (
	<main className='relative min-h-dvh'>
		<RouterProvider router={router} />
	</main>
);

export default AppRouter;
