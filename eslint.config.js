import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "@stylistic/jsx/jsx-self-closing-comp": ["error", {
        "component": true,
        "html": true
      }],
      "@typescript-eslint/no-empty-object-type": "off"
    },
  },
)