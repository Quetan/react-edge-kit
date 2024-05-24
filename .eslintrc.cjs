module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'src/shared/components'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react-refresh',
		'autofix',
		'@typescript-eslint',
		'@tanstack/query'
	],
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
