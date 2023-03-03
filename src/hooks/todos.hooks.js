/**
 * Hooks to query and mutate todos.
 * @module hooks/todos
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createTodo, getTodo, getTodos, updateTodo, deleteTodo } from '../api/todos.api';
import { selectTodoOnQuery } from '../selectors/todos.selectors';
import { QueryKeys } from '../utils/constants';

/**
 * A React Query query hook which fetches all todos.
 * @function
 * @param {UseQueryOptions} options React Query query options.
 * @returns {UseQueryResult} A React Query `UseQueryResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useQuery|useQuery}
 */
export const useGetTodos = (options) => {
  return useQuery({
    select: (todos) => todos.map(selectTodoOnQuery),
    ...options,
    queryKey: [QueryKeys.Todos],
    queryFn: getTodos,
  });
};

/**
 * A React Query query hook which fetches a single tody by identifier.
 * @function
 * @param {string} id A Todo identifier.
 * @param {UseQueryOptions} options React Query query options.
 * @returns {UseQueryResult} A React Query `UseQueryResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useQuery|useQuery}
 */
export const useGetTodo = (id, options) => {
  return useQuery({
    select: selectTodoOnQuery,
    ...options,
    queryKey: [QueryKeys.Todos, id],
    queryFn: () => getTodo(id),
  });
};

/**
 * A React Query mutation hook to create a new todo.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useCreateTodo = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: createTodo,
    onMutate: async (variables) => {
      // Cancel any fetches that could overwrite the optimistic update
      await queryClient.cancelQueries([QueryKeys.Todos]);
      // Capture the current value of the list
      const previousTodos = queryClient.getQueryData([QueryKeys.Todos]);
      // Optimistically update the list cache with new value
      queryClient.setQueryData([QueryKeys.Todos], [...previousTodos, variables]);
      // Return a context with the previous values in case of rollback
      return { previousTodos };
    },
    onError: (error, variables, context) => {
      // Rollback the optimistic updates to the previous values
      queryClient.setQueryData([QueryKeys.Todos], context.previousTodos);
    },
    onSettled: () => {
      // Finally, invalidate the cache to refetch from server
      queryClient.invalidateQueries([QueryKeys.Todos]);
    },
  });
};

/**
 * A React Query mutation hook to update an existing todo.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useUpdateTodo = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: updateTodo,
    onSuccess: (data, variables, context) => {
      // Invalidate the cache, triggering refetch
      queryClient.invalidateQueries([QueryKeys.Todos]);
    },
  });
};

/**
 * A React Query mutation hook to delete a todo.
 * @function
 * @param {UseMutationOptions} options React query mutation options.
 * @returns {UseMutationResult} A React Query `UseMutationResult` object.
 * @see {@link https://tanstack.com/query/latest/docs/react/reference/useMutation|useMutation}
 */
export const useDeleteTodo = (options) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: deleteTodo,
    onSuccess: (data, variables, context) => {
      queryClient.removeQueries([QueryKeys.Todos, variables]);
      queryClient.invalidateQueries([QueryKeys.Todos]);
      options?.onSuccess && options.onSuccess(data, variables, context);
    },
  });
};
