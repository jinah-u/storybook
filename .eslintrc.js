module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^@?\\w'], ['^~/', '^\\.']],
      },
    ],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'prefer-arrow-callback': 'warn',

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/self-closing-comp': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-unused-vars': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
