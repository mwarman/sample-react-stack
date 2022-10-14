import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getAuthState, signIn, signOut, signUp } from '../api/auth.api';

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
  return useMutation((vars) => signIn(vars.username, vars.password), options);
};

export const useSignOut = (options) => {
  const queryClient = useQueryClient();
  return useMutation(signOut, {
    ...options,
    onSuccess: (data) => {
      queryClient.invalidateQueries([QueryKeys.Accounts]);
      queryClient.invalidateQueries([QueryKeys.AuthState]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};

export const useAuthState = (options) => {
  return useQuery([QueryKeys.AuthState], getAuthState, options);
};
