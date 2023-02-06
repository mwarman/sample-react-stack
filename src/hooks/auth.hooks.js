import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAccount, getAuthState, signIn, signOut, signUp } from '../api/auth.api';

const QueryKeys = {
  Accounts: 'accounts',
  AuthState: 'authstate',
};

export const useSignUp = (options) => {
  const queryClient = useQueryClient();
  return useMutation(signUp, {
    ...options,
    onSuccess: (data) => {
      queryClient.invalidateQueries([QueryKeys.Accounts]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};

export const useSignIn = (options) => {
  const queryClient = useQueryClient();
  return useMutation((vars) => signIn(vars.username, vars.password), {
    ...options,
    onSuccess: (data) => {
      queryClient.setQueryData([QueryKeys.Accounts, data.id], data);
      queryClient.resetQueries([QueryKeys.AuthState]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};

export const useSignOut = (options) => {
  const queryClient = useQueryClient();
  return useMutation(signOut, {
    ...options,
    onSuccess: async (data) => {
      await queryClient.resetQueries();
      queryClient.setQueryData([QueryKeys.AuthState], { isAuthenticated: false });
      options?.onSuccess && options.onSuccess(data);
    },
  });
};

export const useAuthState = (options) => {
  return useQuery([QueryKeys.AuthState], getAuthState, {
    ...options,
    refetchInterval: 1000 * 60,
  });
};

export const useGetAccount = (id, options) => {
  return useQuery([QueryKeys.Accounts, id], () => getAccount(id), options);
};
