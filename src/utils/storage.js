/**
 * Storage utility module.
 * @module utils/storage
 */

/**
 * Returns the stored item.
 * @function
 * @param {string} key The storage key.
 * @returns {string|number|null} Returns the stored item if found or
 * `null` if not found.
 */
const getItem = localStorage.getItem.bind(localStorage);

/**
 * Stores an item.
 * @function
 * @param {string} key The storage key.
 * @param {string|number} The value to be stored.
 */
const setItem = localStorage.setItem.bind(localStorage);

/**
 * Returns the stored item as a JSON object.
 * @function
 * @param {string} key The storage key.
 * @returns {Object|Object[]|null} Returns the stored object or array of
 * objects if found or `null` if not found.
 */
const getJson = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

/**
 * Stores a JSON object or array.
 * @function
 * @param {string} key The storage key.
 * @param {Object|Object[]} value The value to be stored.
 */
const setJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Removes a stored item.
 * @function
 * @param {string} key The storage key.
 */
const removeItem = localStorage.removeItem.bind(localStorage);

const storage = {
  getItem,
  getJson,
  setItem,
  setJson,
  removeItem,
};

export default storage;
