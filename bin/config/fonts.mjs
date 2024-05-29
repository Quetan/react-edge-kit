// export type Font = 'Roboto' | 'Unbounded' | 'Montserrat' | 'Jost';

// export type FontData = {
// 	fontFamily: string;
// 	importUrl: string;
// };

const fonts = {
	Roboto: {
		fontFamily: '"Roboto", sans-serif',
		importUrl:
			'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
	},
	Unbounded: {
		fontFamily: '"Unbounded", sans-serif',
		importUrl:
			'https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap'
	},
	Montserrat: {
		fontFamily: '"Montserrat", sans-serif',
		importUrl:
			'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
	},
	Jost: {
		fontFamily: '"Jost", sans-serif',
		importUrl:
			'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap'
	}
};

export default fonts;
