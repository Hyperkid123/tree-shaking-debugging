import isEqual from 'lodash/isEqual.js';
// export { satisfies } from 'semver/functions/satisfies';
export { satisfies } from 'semver';

export const test = (a, b) => isEqual(a, b);
