import { Sun } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import useTheme from '../lib/use-theme';
import type { FC } from 'react';
import type { ButtonProps } from '@/shared/ui/button';

interface ThemeTogglerProps extends ButtonProps {}

const ThemeToggler: FC<ThemeTogglerProps> = ({ className, ...props }) => {
	const { setTheme, theme } = useTheme();
	return (
		<Button
			variant='outline'
			size='icon'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={className}
			{...props}>
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 ' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
};

export default ThemeToggler;
