/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

export default {
    'package.json': ['pnpm install --package-lock-only'],

    '*.{tsx, ts, md, css, js}': 'prettier --write',
};
