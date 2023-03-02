/**
 * Keys utility module.
 * @module utils/keys
 */

/**
 * Create an array of objects containing a single attribute: `key`.
 * Useful for displaying a loading state for collections of React components.
 * @function
 * @param {number} [length=1] The desired number of items in the array. Default: `1`.
 * @returns {Object[]} An array of key objects.
 * @example
 * const myKeys = keys(3);
 * // returns [{key:0},{key:1},{key:2}]
 *
 */
export const keys = (length = 1) => {
  const keys = [];
  for (let i = 0; i < length; i++) {
    keys.push({ key: i });
  }
  return keys;
};
