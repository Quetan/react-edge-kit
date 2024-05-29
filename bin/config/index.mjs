import themes from './theme.mjs';
import fonts from './fonts.mjs';

function getCSS(themeColor, fontName) {
	return `
    @import url('${fonts[fontName].importUrl}');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    ${themes[themeColor]}
    
    @layer base {
        * {
            @apply border-border;
        }
        html {
            @apply bg-background;
        }
        body {
            @apply max-w-full overflow-x-hidden bg-background text-foreground;
            font-family: ${fonts[fontName].fontFamily};
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
        }
        html,
        body {
            @apply h-full w-full overflow-auto overscroll-none;
        }
    }
    `;
}

export default getCSS;
