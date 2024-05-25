module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended'
	],
	ignorePatterns: ['dist', 'bin', '.eslintrc.cjs', 'src/shared/'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react-refresh', 'autofix', '@typescript-eslint'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'arrow-body-style': ['error', 'as-needed'],
		'autofix/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				ignoreRestSiblings: true,
				destructuredArrayIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports'
			}
		]
	}
};
