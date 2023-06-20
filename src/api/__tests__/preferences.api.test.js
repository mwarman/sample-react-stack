import merge from 'lodash/merge';

import { getPreferences, updatePreferences } from '../preferences.api';

import { preferencesFoo, preferencesThemeDark } from '../../__fixtures__/preferences.fixtures';
import { DEFAULT_PREFERENCES, StorageKeys } from '../../utils/constants';
import storage from '../../utils/storage';

const getJsonSpy = jest.spyOn(storage, 'getJson');
const setJsonSpy = jest.spyOn(storage, 'setJson');

describe('Preferences API', () => {
  describe('getPreferences', () => {
    beforeEach(() => {
      getJsonSpy.mockReturnValue({});
    });

    afterEach(() => {
      getJsonSpy.mockClear();
    });

    it('should get preferences', async () => {
      const preferences = await getPreferences();

      expect(preferences).toEqual(DEFAULT_PREFERENCES);
      expect(getJsonSpy).toHaveBeenCalledWith(StorageKeys.Preferences);
    });

    it('should get default preferences when not found', async () => {
      getJsonSpy.mockReturnValue(null);

      const preferences = await getPreferences();

      expect(preferences).toEqual(DEFAULT_PREFERENCES);
      expect(getJsonSpy).toHaveBeenCalledWith(StorageKeys.Preferences);
    });

    it('should override default preferences', async () => {
      getJsonSpy.mockReturnValue(preferencesThemeDark);

      const preferences = await getPreferences();

      expect(preferences).toEqual(preferencesThemeDark);
      expect(getJsonSpy).toHaveBeenCalledWith(StorageKeys.Preferences);
    });

    it('should merge with default preferences', async () => {
      const expectedPreferences = merge({}, DEFAULT_PREFERENCES, preferencesFoo);
      getJsonSpy.mockReturnValue(preferencesFoo);

      const preferences = await getPreferences();

      expect(preferences).toEqual(expectedPreferences);
      expect(getJsonSpy).toHaveBeenCalledWith(StorageKeys.Preferences);
    });

    it('should reject when an error occurs', async () => {
      const message = 'test error message';
      getJsonSpy.mockImplementationOnce(() => {
        throw new Error(message);
      });

      try {
        await getPreferences();
        fail('expected Error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toEqual(message);
      }
    });
  });

  describe('updatePreferences', () => {
    beforeEach(() => {
      getJsonSpy.mockReturnValue(preferencesThemeDark);
    });

    afterEach(() => {
      getJsonSpy.mockClear();
      setJsonSpy.mockClear();
    });

    it('should create preferences if none exist', async () => {
      getJsonSpy.mockReturnValueOnce(null);

      const preferences = await updatePreferences(preferencesFoo);

      expect(preferences).toBeDefined();
      expect(preferences.foo).toEqual(preferencesFoo.foo);
      expect(preferences.updatedAt).toBeDefined();
    });

    it('should update preferences', async () => {
      const preferences = await updatePreferences(preferencesFoo);

      expect(preferences).toBeDefined();
      expect(preferences.foo).toEqual(preferencesFoo.foo);
      expect(preferences.updatedAt).toBeDefined();
    });

    it('should update preferences when new value is empty', async () => {
      const originalPreferences = await getPreferences();

      const preferences = await updatePreferences();

      expect(preferences).toBeDefined();
      expect(preferences.updatedAt).toBeDefined();
      expect(new Date(originalPreferences.updatedAt).getTime()).toBeLessThan(
        new Date(preferences.updatedAt).getTime(),
      );
    });

    it('should reject when an error occurs', async () => {
      const message = 'test error message';
      setJsonSpy.mockImplementationOnce(() => {
        throw new Error(message);
      });

      try {
        await updatePreferences(preferencesThemeDark);
        fail('expected Error to be thrown');
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toEqual(message);
      }
    });
  });
});
