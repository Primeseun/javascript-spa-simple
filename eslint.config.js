import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        fetch: 'readonly'
      }
    },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': 0, // Allow both LF and CRLF
      'quotes': ['error', 'double'], // Use double quotes to match existing code
      'semi': ['error', 'always']
    }
  }
];