# ESLint configuration for my open-source projects

#### Installation

```
npm install --save-dev @depasquale/eslint-config
```

#### Requirements

`eslint`, `eslint-plugin-import`

#### Additional requirements for TypeScript projects

`@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`

#### Example `.eslintrc.cjs` for JavaScript projects

```javascript
module.exports = {
  extends: [
    '@depasquale/eslint-config',
  ],
};
```

#### Example `.eslintrc.cjs` for TypeScript projects

```javascript
module.exports = {
  extends: [
    '@depasquale/eslint-config/typescript',
  ],
};
```
