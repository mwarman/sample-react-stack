/**
 * Todo selector functions.
 * @module selectors/todos
 */

import chunk from 'lodash/chunk';
import filter from 'lodash/filter';
import merge from 'lodash/merge';
import orderBy from 'lodash/orderBy';
import dayjs from 'dayjs';

import { DEFAULT_STATE as DEFAULT_LIST_CONTEXT } from '../contexts/list.context';
import { Priorities, Statuses } from '../utils/constants';

/**
 * Inspect and transform a Todo after fetching.
 * @function
 * @param {Todo} todo A Todo.
 * @returns {Todo} Returns the Todo with additional, derived attributes.
 */
export const selectTodoOnQuery = (todo) => {
  const selectedTodo = {
    ...todo,
    priorityObj: Priorities.find((p) => p.code === todo.priorityCode),
    statusObj: Statuses.find((s) => s.code === todo.statusCode),
  };
  selectedTodo.isOverdue =
    selectedTodo.statusObj.category !== 'done' &&
    !!selectedTodo.dueAt &&
    dayjs(selectedTodo.dueAt).isBefore(dayjs(), 'day');
  return selectedTodo;
};

/**
 * Select specific Todos and sort the results.
 * @function
 * @param {Todo[]} [todos=[]] The source collection of Todos.
 * @param {Object} [options={}] Selector options.
 * @param {Object} [options.matches={}] Filter matcher criteria.
 * @param {string[]} [options.sortBy=['summary']] The todo attribute(s) to sort by.
 * @param {string[]} [options.sortOrder=['asc']] The sort direction(s).
 * @returns {Todo[]} Returns a sorted collection of Todos matching the
 * selection criteria.
 */
export const selectTodos = (todos = [], options = {}) => {
  const defaults = {
    matches: {},
    sortBy: ['summary'],
    sortOrder: ['asc'],
  };
  const opts = { ...defaults, ...options };

  return orderBy(filter(todos, opts.matches), opts.sortBy, opts.sortOrder);
};

/**
 * Select and sort Todos using the options in the supplied ListContext.
 * @function
 * @param {Todo[]} [items=[]] The source collection of Todos.
 * @param {ListContext} [listContext={}] The list context.
 * @returns {Todo[]} Returns a sorted collection of Todos matching the
 * ListContext criteria.
 * @see {@link contexts/list/ListContext}
 */
export const selectTodosWithListContext = (items = [], listContext = {}) => {
  const context = merge({}, DEFAULT_LIST_CONTEXT, listContext);

  // filter items using matchers
  let selectedItems = filter(items, context.matches);

  // filter items by text
  const searchCriteria = context.search.toUpperCase();
  selectedItems = filter(selectedItems, (i) => {
    return i.summary.toUpperCase().includes(searchCriteria);
  });

  // order the items
  selectedItems = orderBy(selectedItems, [context.sort.by], [context.sort.order]);

  // get the current page
  const page = chunk(selectedItems, context.pagination.size)[context.pagination.page - 1];

  return { page, items: selectedItems };
};
