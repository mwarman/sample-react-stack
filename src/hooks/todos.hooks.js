import { useQuery } from '@tanstack/react-query';

import { getTodos } from '../api/todos.api';

const QueryKeys = {
  Todos: 'todos',
};

export const useGetTodos = (options) => {
  return useQuery([QueryKeys.Todos], getTodos, options);
};
