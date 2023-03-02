/**
 * Delay utility module.
 * @module utils/delay
 */

/**
 * A Promise-based delay utility.
 * @param {number} [ms] The number of milliseconds to delay.
 * @returns {Promise<void>} Returns a Promise which resolves to empty
 * after waiting the specified number of milliseconds.
 * @example
 * delay(500).then(() => {
 *   // executed after 500ms delay
 * });
 * @example
 * await delay(500);
 * // executed after 500ms delay
 */
export const delay = (ms = 2000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
