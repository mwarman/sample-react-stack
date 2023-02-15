import merge from 'lodash/merge';

import storage from '../utils/storage';
import { DEFAULT_PREFERENCES, StorageKeys } from '../utils/constants';

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
