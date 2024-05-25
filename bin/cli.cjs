#!/usr/bin/env node
const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');
const { cwd } = require('process');

// The first argument will be the project name.
const projectName = process.argv[2];

if (!projectName) {
	console.error(
		'Please provide a project name. For example: npx react-edge-kit <my-project>'
	);
	process.exit(1);
}

// Function to execute shell commands
const execCommand = (command, args, options) => {
	const result = spawn.sync(command, args, options);
	if (result.error) {
		console.error(`Error executing command: ${command} ${args.join(' ')}`);
		console.error(result.error);
		process.exit(1);
	}
};

// Check if git is installed
execCommand('git', ['--version'], { stdio: 'inherit' });

// Check if npm is installed
execCommand('npm', ['--version'], { stdio: 'inherit' });

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);

console.log(`Creating project directory: ${projectDir}`);
fs.mkdirSync(projectDir, { recursive: true });

console.log('Cloning the starter template...');
execCommand(
	'git',
	['clone', 'https://github.com/quetan/react-edge-kit.git', projectDir],
	{ stdio: 'inherit' }
);

const projectPackageJsonPath = path.join(projectDir, 'package.json');
if (!fs.existsSync(projectPackageJsonPath)) {
	console.error('Error: package.json not found in the template.');
	process.exit(1);
}

const projectPackageJson = require(projectPackageJsonPath);
projectPackageJson.name = projectName;

console.log('Updating package.json with the new project name...');
fs.writeFileSync(
	projectPackageJsonPath,
	JSON.stringify(projectPackageJson, null, 2)
);

// Remove unnecessary files and directories
const filesToRemove = ['.github', '.git', 'bin', 'README.md', 'LICENSE'];
filesToRemove.forEach(file => {
	const filePath = path.join(projectDir, file);
	if (fs.existsSync(filePath)) {
		console.log(`Removing ${filePath}...`);
		fs.rmSync(filePath, { recursive: true, force: true });
	}
});

// Run `npm install` in the project directory to install
// the dependencies. We are using a third-party library
// called `cross-spawn` for cross-platform support.
console.log(`Installing dependencies...`);
execCommand('npm', ['install'], { stdio: 'inherit', cwd: projectDir });

const message = `
Success! Your new project ${projectName} is ready.
Created ${projectName} at ${projectDir}.
Use \`cd ${projectName}\` to enter the project directory.
Run \`npm run dev\` to start developing.
`;
const websiteLink = 'https://github.com/quetan';
const tgLink = 'https://t.me/KorkinK';
// Create a colorful box using ANSI escape codes
const successMessage = `
\x1b[38;5;105m${message}\x1b[38;5;51m 
+-----------------------------------------------------------+
\x1b[38;5;93mAuthor: \x1b[38;5;39mQuetan                                 \x1b[38;5;51m
\x1b[38;5;93mTelegram: \x1b[38;5;39m${tgLink}                 \x1b[38;5;51m
\x1b[38;5;93mGithub: \x1b[38;5;39m${websiteLink}                      \x1b[38;5;51m
+-----------------------------------------------------------+\x1b[0m`;
console.log(successMessage);

process.exit(0);
