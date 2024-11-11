import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		files: ["**/*.ts"],
	},
	{
		ignores: [
			'**/node_modules',
			'**/dist',
			'**/.angular',
		],
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				projectService: {
					allowDefaultProject: ['*.js'],
				},
			},
		}
	},
];
