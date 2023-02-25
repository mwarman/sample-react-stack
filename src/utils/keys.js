/**
 * Create an array of objects containing a single attribute: `key`.
 * Useful for displaying a loading state for collections.
 * `[{key:0},{key:1},...]`
 * @param {number} length The desired number of items in the array. Default: `1`.
 * @returns {Object[]} An array of key objects.
 */
export const keys = (length = 1) => {
  const keys = [];
  for (let i = 0; i < length; i++) {
    keys.push({ key: i });
  }
  return keys;
};
