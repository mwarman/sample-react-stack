import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

export const selectTodos = (todos = [], options = {}) => {
  const defaults = {
    matches: {},
    sortBy: ['title'],
    sortOrder: ['asc'],
  };
  const opts = { ...defaults, ...options };

  return orderBy(filter(todos, opts.matches), opts.sortBy, opts.sortOrder);
};
