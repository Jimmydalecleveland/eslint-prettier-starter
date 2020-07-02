module.exports = {
  // env propertiers are added by the eslint bootstrap process but
  // not necessarily needed.
  env: {
    browser: true,
    es2020: true,
  },
  // Only use prettier in `extends` not in `plugins:
  // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    // I prefer my formatting rules to be warnings, rather than errors,
    // so I don't think I have errors in my code while writing it.
    'prettier/prettier': 'warn',
  },
}
