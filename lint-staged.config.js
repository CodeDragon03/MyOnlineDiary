/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

export default {
    '*.{tsx, ts, md, css, js}': 'prettier --write',
};
