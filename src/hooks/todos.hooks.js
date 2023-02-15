import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createTodo, getTodo, getTodos, updateTodo, deleteTodo } from '../api/todos.api';
import { selectTodoOnQuery } from '../selectors/todos.selectors';

const QueryKeys = {
  Todos: 'todos',
};

export const useGetTodos = (options) => {
  return useQuery([QueryKeys.Todos], getTodos, {
    ...options,
    select: (todos) => todos.map(selectTodoOnQuery),
  });
};

export const useGetTodo = (id, options) => {
  return useQuery([QueryKeys.Todos, id], () => getTodo(id), {
    ...options,
    select: selectTodoOnQuery,
  });
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
      queryClient.setQueryData([QueryKeys.Todos, data.id], data);
      queryClient.invalidateQueries([QueryKeys.Todos]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};

export const useDeleteTodo = (options) => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodo, {
    ...options,
    onSuccess: (data, vars) => {
      queryClient.removeQueries([QueryKeys.Todos, vars]);
      queryClient.invalidateQueries([QueryKeys.Todos]);
      options?.onSuccess && options.onSuccess(data);
    },
  });
};
