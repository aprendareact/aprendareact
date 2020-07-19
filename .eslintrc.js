module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:mdx/recommended',
  ],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
        ],
      },
    ],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
