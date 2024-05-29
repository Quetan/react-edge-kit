#!/usr/bin/env node

import {
	mkdirSync as fsMkdirSync,
	existsSync as fsExistsSync,
	writeFileSync as fsWriteFileSync,
	rmSync as fsRmSync
} from 'fs';
import { resolve as pathResolve, join as pathJoin } from 'path';
import execCommand from './utils/index.mjs';
import selectOptions from './options/index.mjs';
import getCSS from './config/index.mjs';

// Check if git is installed
execCommand('git', ['--version'], { stdio: 'inherit' });

// Check if npm is installed
execCommand('npm', ['--version'], { stdio: 'inherit' });

console.log('✨ Welcome to the React Edge Kit installation wizard! ✨');
console.log('');

await selectOptions().then(([projectName, theme, font]) => {
	const currentDir = process.cwd();
	const projectDir = pathResolve(currentDir, projectName);

	console.log('');
	console.log(`✅ Creating project directory: ${projectDir}`);
	console.log('');
	fsMkdirSync(projectDir, { recursive: true });

	console.log('🧲️ Cloning the starter template...');
	console.log('');

	execCommand(
		'git',
		['clone', 'https://github.com/quetan/react-edge-kit.git', projectDir],
		{ stdio: 'inherit' }
	);

	const projectCSSPath = pathJoin(projectDir, 'src', 'app', 'globals.css');
	if (!fsExistsSync(projectCSSPath)) {
		console.error('❌ Error: globals.css not found in the template.');
		process.exit(1);
	}
	console.log('');

	fsWriteFileSync(projectCSSPath, getCSS(theme, font));

	const filesToRemove = [
		'.github',
		'.git',
		'bin',
		'README.md',
		'LICENSE',
		'yarn.lock'
	];
	filesToRemove.forEach(file => {
		const filePath = pathJoin(projectDir, file);
		if (fsExistsSync(filePath)) {
			console.log(`🧹️ Removing unnecessary files: ${filePath}...`);
			fsRmSync(filePath, { recursive: true, force: true });
		}
	});
	console.log('');

	console.log(`✅ Installing dependencies...`);
	console.log('');

	execCommand('npm', ['install'], { stdio: 'inherit', cwd: projectDir });

	console.log('');
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
		\x1b[38;5;93m⭐ Author: \x1b[38;5;39mQuetan                                 \x1b[38;5;51m
		\x1b[38;5;93m⭐ Telegram: \x1b[38;5;39m${tgLink}                 \x1b[38;5;51m
		\x1b[38;5;93m⭐ Github: \x1b[38;5;39m${websiteLink}                      \x1b[38;5;51m
		+-----------------------------------------------------------+\x1b[0m`;
	console.log(successMessage);
});

process.exit(0);
