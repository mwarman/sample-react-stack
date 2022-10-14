import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signIn, signUp } from "../api/auth.api";

const QueryKeys = {
  Accounts: "accounts",
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
