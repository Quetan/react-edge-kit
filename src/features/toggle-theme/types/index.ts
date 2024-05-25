type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (_theme: Theme) => void;
};

export type { Theme, ThemeProviderProps, ThemeProviderState };
