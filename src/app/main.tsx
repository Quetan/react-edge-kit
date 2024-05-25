import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './globals.css';
import { ThemeProvider } from '@/features/toggle-theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='react-edge-ui-theme'>
			<AppRouter />
		</ThemeProvider>
	</React.StrictMode>
);
