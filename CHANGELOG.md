# Changelog

## 1.3.5

The CSS output is the same as 1.3.3: the tests compare it with snapshots taken from the published 1.3.3. Version 1.3.4 was tagged on GitHub but never published on npm.

- README: setup with `@use`, `@forward ... with` and `pkg:`, a usage example that works (`react('>=medium')` is not a key), npm description and keywords.
- `doc/OPTIONS.md` points to `src/options.scss` instead of keeping an outdated copy of the defaults.
- Build: a small Node script replaces gulp. The dev dependencies go from 367 packages to 24.
- Tests: snapshot tests on Sass 1.77.8 and on the latest Sass, plus a check that the library uses no deprecated Sass. GitHub Actions runs them on every push and every week.
- Removed an unused `@use 'sass:string'`.

Older versions: see the [releases](https://github.com/DidoMarchet/scss-react/releases) and the [npm versions](https://www.npmjs.com/package/scss-react?activeTab=versions).
