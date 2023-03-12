/**
 * Hooks to query and mutate accounts and auth.
 * @module hooks/auth
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAccount, getAuthState, signIn, signOut, signUp } from '../api/auth.api';
import { useModalContext } from './modal.hooks';
import { QueryKeys } from '../utils/constants';

/**
 * A React Query mutation hook which performs user account registration.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useSignUp = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: signUp,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([QueryKeys.Accounts]);
      options?.onSuccess && options.onSuccess(data, variables, context);
    },
  });
};

/**
 * A React Query mutation hook which performs user authentication.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useSignIn = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: (variables) => signIn(variables.username, variables.password),
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData([QueryKeys.Accounts, data.id], data);
      queryClient.resetQueries([QueryKeys.AuthState]);
      options?.onSuccess && options.onSuccess(data, variables, context);
    },
  });
};

/**
 * A React Query mutation hook which signs out a user from their current authentication session.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useSignOut = (options) => {
  const queryClient = useQueryClient();
  const { setModalOptions } = useModalContext();
  return useMutation({
    ...options,
    mutationFn: signOut,
    onSuccess: async (data, variables, context) => {
      // After successfully signingout...
      // Reset all queries in the cache to the initial state
      setModalOptions();
      await queryClient.resetQueries();
      options?.onSuccess && options.onSuccess(data, variables, context);
    },
  });
};

/**
 * A React Query query hook which fetches the current user authentication state.
 * @function
 * @param {UseQueryOptions} options React Query query options.
 * @returns {UseQueryResult} A React Query `UseQueryResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useQuery|useQuery}
 */
export const useAuthState = (options) => {
  return useQuery({
    refetchInterval: 60 * 1000,
    ...options,
    queryKey: [QueryKeys.AuthState],
    queryFn: getAuthState,
  });
};

/**
 * A React Query query hook which fetches a user account.
 * @function
 * @param {string} id An account identifier.
 * @param {UseQueryOptions} options React Query query options.
 * @returns {UseQueryResult} A React Query `UseQueryResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useQuery|useQuery}
 */
export const useGetAccount = (id, options) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.Accounts, id],
    queryFn: () => getAccount(id),
  });
};
