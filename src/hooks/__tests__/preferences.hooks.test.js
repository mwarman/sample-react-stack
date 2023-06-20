import { renderHook, waitFor } from 'test-utils';

import { useGetPreferences, useUpdatePreferences } from '../preferences.hooks';

import { preferencesThemeDark } from '../../__fixtures__/preferences.fixtures';
import * as preferencesApi from '../../api/preferences.api';

const getPreferencesSpy = jest.spyOn(preferencesApi, 'getPreferences');
const updatePreferencesSpy = jest.spyOn(preferencesApi, 'updatePreferences');

describe('useGetPreferences', () => {
  beforeEach(() => {
    getPreferencesSpy.mockResolvedValue(preferencesThemeDark);
  });

  afterEach(() => {
    getPreferencesSpy.mockClear();
  });

  it('should query preferences', async () => {
    const { result } = renderHook(() => useGetPreferences());

    await waitFor(() => expect(result.current.isSuccess && !result.current.isFetching).toBe(true));
    expect(result.current.data).toEqual(preferencesThemeDark);
  });
});

describe('useUpdatePreferences', () => {
  beforeEach(() => {
    updatePreferencesSpy.mockResolvedValue(preferencesThemeDark);
  });

  afterEach(() => {
    updatePreferencesSpy.mockClear();
  });

  it('should update preferences', async () => {
    const { result } = renderHook(() => useUpdatePreferences());
    result.current.mutate(preferencesThemeDark);

    await waitFor(() => expect(result.current.isSuccess));
    expect(result.current.data).toEqual(preferencesThemeDark);
  });

  it('should call success function', async () => {
    let isCalledSuccess = false;
    const successFn = () => {
      isCalledSuccess = true;
    };
    const { result } = renderHook(() => useUpdatePreferences({ onSuccess: successFn }));
    result.current.mutate(preferencesThemeDark);

    await waitFor(() => expect(result.current.isSuccess));
    expect(isCalledSuccess).toBe(true);
  });
});
