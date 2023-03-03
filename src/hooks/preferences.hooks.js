/**
 * Hooks to query and mutate user preferences.
 * @module hooks/preferences
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPreferences, updatePreferences } from '../api/preferences.api';
import { DEFAULT_PREFERENCES, QueryKeys } from '../utils/constants';

/**
 * A React Query query hook which fetches the user perferences.
 * @function
 * @param {UseQueryOptions} options React Query query options.
 * @returns {UseQueryResult} A React Query `UseQueryResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useQuery|useQuery}
 */
export const useGetPreferences = (options) => {
  return useQuery({
    placeholderData: DEFAULT_PREFERENCES,
    ...options,
    queryKey: [QueryKeys.Preferences],
    queryFn: getPreferences,
  });
};

/**
 * A React Query mutation hook which updates the user preferences.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useUpdatePreferences = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: updatePreferences,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([QueryKeys.Preferences]);
      options?.onSuccess && options.onSuccess(data, variables, context);
    },
  });
};
