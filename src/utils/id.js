import { v4 as uuid } from "uuid";

/**
 * Generate a random alphanumeric identifier value.
 * @param {number} [length=8] Optional. The desired length. Default: 8.
 * @returns {string} Returns a random alphanumeric string.
 */
export const generateId = (length = 8) => {
  return uuid().replaceAll("-", "").slice(0, length);
};
