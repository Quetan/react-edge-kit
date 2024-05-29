import { input, select } from '@inquirer/prompts';

async function selectOptions() {
	const projectName = await input({
		message: 'Enter your project name:',
		default: 'my-project'
	});

	const primaryColor = await select({
		message: 'Choose primary color:',
		choices: [
			{ name: 'Orange (default)', value: 'Orange' },
			{ name: 'Blue', value: 'Blue' },
			{ name: 'Rose', value: 'Rose' },
			{ name: 'Green', value: 'Green' }
		],
		default: 'Orange'
	});

	const defaultFont = await select({
		message: 'Choose a default font:',
		choices: [
			{ name: 'Unbounded (default)', value: 'Unbounded' },
			{ name: 'Roboto', value: 'Roboto' },
			{ name: 'Montserrat', value: 'Montserrat' },
			{ name: 'Jost', value: 'Jost' }
		],
		default: 'Unbounded'
	});

	return [projectName, primaryColor, defaultFont];
}

export default selectOptions;
