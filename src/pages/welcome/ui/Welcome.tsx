import PageWrapper from '@/shared/ui/page-wrapper';
import { Title } from '@/shared/ui/title';
import type { FC } from 'react';

const Welcome: FC = () => (
	<PageWrapper>
		<div className='mx-auto max-w-screen-sm px-4 tracking-tighter sm:px-6 lg:px-8'>
			<div className='flex items-center justify-center'>
				<img src='/logo.svg' alt='ReactEdge Kit logo' />
			</div>

			<Title
				title='ReactEdge Kit'
				size='xl'
				variant='primary'
				className='mx-auto mt-6 block text-center'
			/>

			<blockquote className='mt-6 text-center text-xl font-medium text-muted-foreground'>
				<p>
					ReactEdge Kit - is a powerful template for creating single-page
					applications (SPA) using TypeScript, React, TanStack Router,
					Shadcn/ui, and TailwindCSS. This starter kit follows the{' '}
					<a
						className='text-primary underline'
						href='https://feature-sliced.design'>
						Feature-Sliced Design
					</a>{' '}
					(FSD) architecture and PWA-ready.
				</p>
			</blockquote>

			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-tight text-foreground'>
					Features
				</h2>

				<ul className='mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2'>
					<li className='col-span-1 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								Development Environment
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 bg-card text-left'>
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
								) .
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
					<li className='col-span-1 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								App Routing
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 bg-card text-left'>
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
					<li className='col-span-1 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>UI</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 bg-card text-left'>
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
					<li className='col-span-1 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								Code Formatting
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 bg-card text-left'>
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
					<li className='col-span-1 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>
								Architectural Methodology
							</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 bg-card text-left'>
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
					<li className='col-span-1 flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
						<div className='flex items-center justify-center'>
							<h3 className='text-lg font-medium text-foreground'>PWA-Ready</h3>
						</div>
						<ul className='mx-auto mb-auto mt-4 min-h-24 space-y-2 bg-card text-left'>
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
					Author
				</h2>
				<img
					src='https://avatars.githubusercontent.com/u/22724980?v=4'
					className='my-4 block h-32 w-32 rounded-full border-4 border-primary/40'
				/>

				<div className='mt-4 flex items-center'>
					<h3 className='text-lg font-medium text-foreground'>
						Quetan (Korkin Kirill)
					</h3>
				</div>
				<ul className='mt-4 space-y-2'>
					<li className='text-lg text-muted-foreground'>
						Telegram:{' '}
						<a href='https://t.me/KorkinK' className='text-primary underline'>
							@quetan
						</a>
					</li>
					<li className='text-lg text-muted-foreground'>
						GitHub:{' '}
						<a
							href='https://github.com/quetan'
							className='text-primary underline'>
							quetan
						</a>
					</li>
					<li className='text-lg text-muted-foreground'>
						Email:{' '}
						<a href='mailto:quetan@vk.com' className='text-primary underline'>
							quetan@vk.com
						</a>
					</li>
				</ul>
			</div>

			<div className='mt-10'>
				<h2 className='text-2xl font-bold tracking-tight text-foreground'>
					Getting Started
				</h2>

				<div className='mt-4 space-y-6'>
					<div className='space-y-2'>
						<h3 className='text-lg font-medium text-foreground'>
							Prerequisites
						</h3>

						<p className='text-base text-muted-foreground'>
							Ensure you have Node.js and Yarn (or npm, pnpm, bun) installed on
							your machine.
						</p>
					</div>

					<div className='space-y-2'>
						<h3 className='text-lg font-medium text-foreground'>
							Detailed Steps
						</h3>

						<ol className='flex list-inside list-decimal flex-col space-y-2 text-base text-muted-foreground'>
							<li>
								<span>Clone the repository:</span>
								<br />
								<code className='bg-muted text-xs text-muted-foreground'>
									git clone https://github.com/quetan/react-edge-kit.git
									<br />
									cd react-edge-kit
								</code>
							</li>
							<li>
								<span>Install dependencies:</span>
								<br />
								<code className='bg-muted text-xs text-muted-foreground'>
									yarn install
								</code>
							</li>
							<li>
								<span>Run the development server:</span>
								<br />
								<code className='bg-muted text-xs text-muted-foreground'>
									yarn dev
								</code>
								<p>
									The application will be available at{' '}
									<a
										className='text-primary underline'
										href='http://localhost:5173'>
										http://localhost:5173
									</a>
									.
								</p>
							</li>
							<li>
								<span>Build for production:</span>
								<br />
								<code className='bg-muted text-xs text-muted-foreground'>
									yarn build
								</code>
								<p>
									The built files will be in the{' '}
									<code className='bg-muted text-xs text-muted-foreground'>
										dist
									</code>{' '}
									directory.
								</p>
							</li>
							<li>
								<span> Preview the production build:</span>
								<br />
								<code className='bg-muted text-xs text-muted-foreground'>
									yarn preview
								</code>
								<p>
									This will start a local server to preview the production
									build.
								</p>
							</li>
						</ol>
					</div>
				</div>
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
							className='h-96 w-auto'
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
		</div>
	</PageWrapper>
);

export default Welcome;
