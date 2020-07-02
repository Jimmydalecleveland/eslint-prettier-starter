# Eslint with Prettier starter setup reference

`index.jsx` has an unformatted component with a bunch of problems eslint and prettier will fix on save, including hooks.

## VSCode
* Do not use the Prettier VSCode plugin, only use the Eslint plugin. All prettier formatting is handled through eslint plugins.
* You'll want to add the following lines to your `settings.json` file if you don't have it already. (Do not enable `formatOnSave` in VSCode)
```json
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
```
