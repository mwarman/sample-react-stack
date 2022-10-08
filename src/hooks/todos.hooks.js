import { useQuery } from '@tanstack/react-query';

import { getTodo, getTodos } from '../api/todos.api';

const QueryKeys = {
  Todos: 'todos',
};

export const useGetTodos = (options) => {
  return useQuery([QueryKeys.Todos], getTodos, options);
};

export const useGetTodo = (id, options) => {
  return useQuery([QueryKeys.Todos, id], () => getTodo(id), options);
};
