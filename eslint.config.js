// @ts-check

import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import customPlugin from 'custom-plugin';

export default tseslint.config(
  eslint.configs.recommended, // a set of recommended ESLint rules
  ...tseslint.configs.recommended, // a set of recommended TypeScript ESLint rules
  {
    languageOptions: {
      parser: tseslint.parser,
    },
    ignores: [],
    files: ['*.ts'],
    plugins: {
      customPlugin,
    },
    rules: {
      'customPlugin/explicit-generics': ['error', { functionNames: ['post'] }],
    },
  }
);
