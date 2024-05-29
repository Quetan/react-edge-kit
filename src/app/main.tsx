import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';
import { ThemeProvider } from '@/features/toggle-theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='react-edge-ui-theme'>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
