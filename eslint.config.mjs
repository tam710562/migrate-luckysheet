// @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: {
    'unused-imports': eslintPluginUnusedImports,
    import: eslintPluginImport,
    // 'prettier': eslintPluginPrettier,
  },
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'prettier/prettier': [
      'error',
      {
        plugins: ['@trivago/prettier-plugin-sort-imports'],
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        endOfLine: 'auto',
        importOrder: ['^@careconne/(.*)$', '^[./]'],
        importOrderParserPlugins: ['typescript', 'decorators-legacy'],
        importOrderSeparation: true,
      },
    ],
    // 'unused-imports/no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^_',
    //     caughtErrorsIgnorePattern: '^_',
    //   },
    // ],
    'import/no-duplicates': 'error',
  },
});
