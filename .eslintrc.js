module.exports = {
  // env propertiers are added by the eslint bootstrap process but
  // not necessarily needed.
  env: {
    es2020: true,
  },
  // Only use prettier in `extends` not in `plugins:
  // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // I prefer my formatting rules to be warnings, rather than errors,
    // so I don't think I have errors in my code while writing it.
    'prettier/prettier': 'warn',
  },
}
