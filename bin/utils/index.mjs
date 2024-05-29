import { sync as spawnSync } from 'cross-spawn';

// Function to execute shell commands
const execCommand = (command, args, options) => {
	const result = spawnSync(command, args, options);
	if (result.error) {
		console.error(`❌ Error executing command: ${command} ${args.join(' ')}`);
		console.error(result.error);
		process.exit(1);
	}
};

export default execCommand;
