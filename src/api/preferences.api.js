/**
 * Preferences API module.
 * @module api/preferences
 */
/**
 * The Preferences object.
 * @typedef {Object} Preferences
 * @property {string} theme - Theme preference. e.g. 'dark'
 * @property {string} [updatedAt] - The last updated timestamp. ISO8601 format.
 */

import merge from 'lodash/merge';

import storage from '../utils/storage';
import { DEFAULT_PREFERENCES, StorageKeys } from '../utils/constants';

/**
 * Fetches the user preferences.
 * @function
 * @async
 * @returns {Promise<Preferences>} Returns a Promise which resolves to the
 * Preferences object if successful; otherwise, rejects with an error.
 */
export const getPreferences = async () => {
  return new Promise((resolve, reject) => {
    try {
      const storedPreferences = storage.getJson(StorageKeys.Preferences) || {};
      const preferences = merge({}, DEFAULT_PREFERENCES, storedPreferences);
      return resolve(preferences);
    } catch (err) {
      return reject(err);
    }
  });
};

/**
 * Update and persist changes to user preferences.
 * @function
 * @async
 * @param {Preferences} preferences The Preferences containing updated values.
 * @returns {Promise<Preferences>} Returns a Promise which resolves to the
 * updated Preferences if successful; otherwise, rejects with an error.
 */
export const updatePreferences = async (preferences = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const storedPreferences = storage.getJson(StorageKeys.Preferences) || {};
      const updatedPreferences = {
        ...storedPreferences,
        ...preferences,
        updatedAt: new Date().toISOString(),
      };

      storage.setJson(StorageKeys.Preferences, updatedPreferences);
      return resolve(updatedPreferences);
    } catch (err) {
      return reject(err);
    }
  });
};
