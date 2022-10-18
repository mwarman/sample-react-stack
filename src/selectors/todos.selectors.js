import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

export const selectTodos = (todos = [], options = {}) => {
  const defaults = {
    matches: {},
    sortBy: ['title'],
    sortOrder: ['asc'],
  };

  const opts = { ...defaults, ...options };
  console.log(`selectTodos::opts::${JSON.stringify(opts)}`);

  return orderBy(filter(todos, opts.matches), opts.sortBy, opts.sortOrder);
};
