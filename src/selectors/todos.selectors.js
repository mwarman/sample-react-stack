import chunk from 'lodash/chunk';
import filter from 'lodash/filter';
import merge from 'lodash/merge';
import orderBy from 'lodash/orderBy';

import { DEFAULT_STATE as DEFAULT_LIST_CONTEXT } from '../contexts/list.context';

export const selectTodos = (todos = [], options = {}) => {
  const defaults = {
    matches: {},
    sortBy: ['title'],
    sortOrder: ['asc'],
  };
  const opts = { ...defaults, ...options };

  return orderBy(filter(todos, opts.matches), opts.sortBy, opts.sortOrder);
};

export const selectTodosWithListContext = (items = [], listContext = {}) => {
  const context = merge({}, DEFAULT_LIST_CONTEXT, listContext);

  // filter items using matchers
  let selectedItems = filter(items, context.matches);

  // filter items by text
  const searchCriteria = context.search.toUpperCase();
  selectedItems = filter(selectedItems, (i) => {
    return i.title.toUpperCase().includes(searchCriteria);
  });

  // order the items
  selectedItems = orderBy(selectedItems, [context.sort.by], [context.sort.order]);

  // get the current page
  const page = chunk(selectedItems, context.pagination.size)[context.pagination.page - 1];

  return { page, items: selectedItems };
};
