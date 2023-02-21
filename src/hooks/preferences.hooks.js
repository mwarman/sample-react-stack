import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPreferences, updatePreferences } from '../api/preferences.api';
import { DEFAULT_PREFERENCES, QueryKeys } from '../utils/constants';

export const useGetPreferences = (options) => {
  return useQuery({
    placeholderData: DEFAULT_PREFERENCES,
    ...options,
    queryKey: [QueryKeys.Preferences],
    queryFn: getPreferences,
  });
};

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
