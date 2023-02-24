import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAccount, getAuthState, signIn, signOut, signUp } from '../api/auth.api';
import { useModalContext } from './modal.hooks';
import { QueryKeys } from '../utils/constants';

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

export const useAuthState = (options) => {
  return useQuery({
    refetchInterval: 60 * 1000,
    ...options,
    queryKey: [QueryKeys.AuthState],
    queryFn: getAuthState,
  });
};

export const useGetAccount = (id, options) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.Accounts, id],
    queryFn: () => getAccount(id),
  });
};
