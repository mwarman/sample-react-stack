import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { createTodo, getTodo, getTodos, updateTodo } from "../api/todos.api";

const QueryKeys = {
  Todos: "todos",
};

export const useGetTodos = (options) => {
  return useQuery([QueryKeys.Todos], getTodos, options);
};

export const useGetTodo = (id, options) => {
  return useQuery([QueryKeys.Todos, id], () => getTodo(id), options);
};

export const useCreateTodo = (options) => {
  const queryClient = useQueryClient();
  return useMutation(createTodo, {
    ...options,
    onSuccess: (data) => {
      queryClient.invalidateQueries([QueryKeys.Todos]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};

export const useUpdateTodo = (options) => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    ...options,
    onSuccess: (data) => {
      queryClient.invalidateQueries([QueryKeys.Todos]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};
