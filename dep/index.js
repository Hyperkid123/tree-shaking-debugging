import isEqual from 'lodash/isEqual';
export{ satisfies } from 'semver';
export const test = (a, b) => isEqual(a, b);
