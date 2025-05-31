// @ts-check

import eslint from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {ignores: ['dist']},
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
);
