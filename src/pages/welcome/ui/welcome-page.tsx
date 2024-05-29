import { ThemeToggler } from '@/features/toggle-theme';
import { Button } from '@/shared/ui/button';
import PageWrapper from '@/shared/ui/page-wrapper';
import { Title } from '@/shared/ui/title';
import { StarIcon } from 'lucide-react';
import type { FC } from 'react';

const Welcome: FC = () => (
	<PageWrapper className='min-h-dvh py-24'>
		<ThemeToggler className='fixed right-6 top-4' />
		<div className='mx-auto max-w-screen-sm px-4 tracking-tighter sm:px-6 lg:px-8'>
			<div className='flex items-center justify-center'>
				<img src='./logo.svg' alt='React Edge Kit logo' />
			</div>

			<Title
				size='xl'
				variant='primary'
				className='mx-auto mt-6 block text-center'>
				React Edge Kit
			</Title>

			<p className='mt-6 text-center text-xl font-medium leading-tight text-muted-foreground'>
				React Edge Kit - is a powerful template for creating single-page
				applications (SPA) using TypeScript, React, TanStack Router, Shadcn/ui,
				and TailwindCSS. This starter kit follows the{' '}
				<a className='text-primary' href='https://feature-sliced.design'>
					Feature-Sliced Design
				</a>{' '}
				(FSD) architecture and PWA-ready.
			</p>

			<div className='mb-4 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-2'>
				<Button className='text-lg' asChild size='lg' variant='default'>
					<a
						className='items-cente flex'
						href='https://github.com/quetan/react-edge-kit'>
						Rate on GitHub <StarIcon className='ml-2 h-4 w-4' />
					</a>
				</Button>
			</div>

			<div className='mt-10'>
				<h2 className='mb-4 text-2xl font-bold tracking-tight text-foreground'>
					Author
				</h2>
				<div className='flex flex-row items-center gap-10'>
					<div className='flex flex-col items-center'>
						<img
							src='https://avatars.githubusercontent.com/u/22724980?v=4'
							className='mb-2 block h-auto w-32 rounded-full border-4 border-primary/40'
						/>
						<h3 className='text-center text-lg font-medium leading-tight text-foreground'>
							Quetan <br /> (Korkin Kirill)
						</h3>
					</div>
					<ul className='space-y-2'>
						<li className='text-lg font-medium tracking-tight text-foreground'>
							Contacts
						</li>
						<li className='text-lg leading-tight text-muted-foreground'>
							Telegram:
							<br />
							<a
								href='https://t.me/KorkinK'
								className='text-base text-primary underline'>
								@quetan
							</a>
						</li>
						<li className='text-lg leading-tight text-muted-foreground'>
							GitHub:
							<br />
							<a
								href='https://github.com/quetan'
								className='text-base text-primary underline'>
								github/quetan
							</a>
						</li>
						<li className='text-lg leading-tight text-muted-foreground'>
							Email:
							<br />
							<a
								href='mailto:quetan@vk.com'
								className='text-base text-primary underline'>
								quetan@vk.com
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-tight text-foreground'>
					Features
				</h2>
				<ul className='mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2'>
					<li className='col-span-1 flex flex-col rounded-lg border border-muted bg-card p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								Development Environment
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 text-left'>
							<li className='text-base text-muted-foreground'>
								{' '}
								<a
									className='text-primary underline'
									href='https://vitejs.dev/'>
									Vite
								</a>{' '}
								- Fast and optimized build tool for modern web projects (
								<a href='./vite.config.ts' className='text-primary underline'>
									configuration
								</a>
								).
							</li>
						</ul>
						<img
							className='mx-auto mt-4 block'
							src='https://vitejs.dev/logo.svg'
							alt='Vite logo'
							width={80}
							height={80}
						/>
					</li>
					<li className='col-span-1 flex flex-col rounded-lg border border-muted bg-card p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								App Routing
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 text-left'>
							<li className='text-base text-muted-foreground'>
								<a
									className='text-primary underline'
									href='https://tanstack.com/router/'>
									TanStack Router
								</a>{' '}
								- Powerful and flexible routing solution.
							</li>
						</ul>
						<img
							className='mx-auto mt-4 block'
							src='https://tanstack.com/_build/assets/logo-color-100w-lPbOTx1K.png'
							alt='TanStack router logo'
							width={80}
							height={80}
						/>
					</li>
					<li className='col-span-1 flex flex-col rounded-lg border border-muted bg-card p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>UI</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 text-left'>
							<li className='text-base text-muted-foreground'>
								<a
									href='https://ui.shadcn.com/'
									className='text-primary underline'>
									Shadcn/ui
								</a>{' '}
								- Customizable component library (
								<a href='./components.json' className='text-primary underline'>
									configuration
								</a>
								).
							</li>
							<li className='text-base text-muted-foreground'>
								<a
									href='https://lucide.dev/icons/'
									className='text-primary underline'>
									Lucide icons
								</a>{' '}
								- Beautiful & consistent icons made by the community.
							</li>
							<li className='text-base text-muted-foreground'>
								<a
									href='https://tailwindcss.com/'
									className='text-primary underline'>
									Tailwind CSS
								</a>{' '}
								- Utility-first CSS framework (
								<a
									href='./tailwind.config.js'
									className='text-primary underline'>
									configuration
								</a>
								).
							</li>
						</ul>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 256 256'
							className='mx-auto mt-4 block h-20 w-20'>
							<rect width='256' height='256' fill='none'></rect>
							<line
								x1='208'
								y1='128'
								x2='128'
								y2='208'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='16'></line>
							<line
								x1='192'
								y1='40'
								x2='40'
								y2='192'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='16'></line>
						</svg>
					</li>
					<li className='col-span-1 flex flex-col rounded-lg border border-muted bg-card p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								Code Formatting
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2  text-left'>
							<li className='text-base text-muted-foreground'>
								Prettier: Ensures consistent code style (
								<a href='./.prettierrc' className='text-primary underline'>
									configuration
								</a>
								).
							</li>
							<li className='text-base text-muted-foreground'>
								ESLint: Maintains code quality and consistency (
								<a href='./.eslintrc.cjs' className='text-primary underline'>
									configuration
								</a>
								).
							</li>
						</ul>
						<img
							className='mx-auto mt-4 block'
							src='https://prettier.io/icon.png'
							alt='Prettier logo'
							width={80}
							height={80}
						/>
					</li>
					<li className='col-span-1 flex flex-col rounded-lg border border-muted bg-card p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								Architectural Methodology
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2  text-left'>
							<li className='text-base text-muted-foreground'>
								FSD (
								<a
									href='https://feature-sliced.design'
									className='text-primary underline'>
									Documentation
								</a>
								) - a methodology for scalable frontend architecture.
							</li>
						</ul>
						<img
							className='mx-auto mt-4 block'
							src='https://feature-sliced.design/ru/img/brand/logo-primary.png'
							alt='Prettier logo'
							width={120}
							height={80}
						/>
					</li>
					<li className='col-span-1 flex flex-col rounded-lg border border-muted bg-card p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>PWA-Ready</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2  text-left'>
							<li className='text-base text-muted-foreground'>
								Includes a{' '}
								<a
									className='text-primary underline'
									href='./favicon/site.webmanifest'>
									webmanifest
								</a>{' '}
								for Progressive Web App (PWA) support.
							</li>
						</ul>
						<img
							className='mx-auto mt-4 block'
							src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Progressive_Web_Apps_Logo.svg'
							alt='PWA logo'
							width={120}
							height={80}
						/>
					</li>
				</ul>
			</div>
			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-tight text-foreground'>
					About Feature-Sliced Design
				</h2>

				<div className='mt-4'>
					<p className='text-base text-muted-foreground'>
						Feature-Sliced Design (FSD) is an architectural methodology for
						scaffolding front-end applications. Simply put, it's a compilation
						of rules and conventions on organizing code. The main purpose of
						this methodology is to make the project more understandable and
						structured in the face of ever-changing business requirements.
					</p>

					<div className='mt-4 flex items-center justify-center'>
						<img
							src='https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg'
							alt='Feature slice design scheme'
							className='h-auto w-full dark:invert-[0.96]'
						/>
					</div>
				</div>
			</div>

			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-tight text-foreground'>
					Contribution
				</h2>

				<div className='mt-4'>
					<p className='text-base text-muted-foreground'>
						Feel free to open issues or submit pull requests to help improve
						this project. Your contributions are welcome!
					</p>
				</div>
			</div>

			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-tight text-foreground'>
					License
				</h2>

				<div className='mt-4'>
					<p className='text-base text-muted-foreground'>
						<a
							href='https://github.com/Quetan/react-edge-kit#MIT-1-ov-file'
							className='text-primary underline'>
							MIT
						</a>
					</p>
				</div>
			</div>
		</div>
	</PageWrapper>
);

export default Welcome;
