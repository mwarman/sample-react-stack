import { useReducer } from 'react';

const defaultState = {
  matches: {},
  sortBy: ['title'],
  sortOrder: ['asc'],
};

export const FILTER_STATUS = 'FILTER_STATUS';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_STATUS = 'SORT_BY_STATUS';
export const SORT_BY_ASSIGNEE = 'SORT_BY_ASSIGNEE';

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_STATUS:
      const matches = { ...state.matches };
      if (action.payload.status === 'todo') {
        matches.completed = false;
      } else if (action.payload.status === 'done') {
        matches.completed = true;
      } else {
        delete matches.completed;
      }
      return {
        ...state,
        matches,
      };
    case SORT_BY_TITLE:
      return {
        ...state,
        sortBy: ['title'],
        sortOrder: [state.sortBy[0] === 'title' && state.sortOrder[0] === 'asc' ? 'desc' : 'asc'],
      };
    case SORT_BY_STATUS:
      return {
        ...state,
        sortBy: ['completed'],
        sortOrder: [
          state.sortBy[0] === 'completed' && state.sortOrder[0] === 'asc' ? 'desc' : 'asc',
        ],
      };
    case SORT_BY_ASSIGNEE:
      return {
        ...state,
        sortBy: ['accountId'],
        sortOrder: [
          state.sortBy[0] === 'accountId' && state.sortOrder[0] === 'asc' ? 'desc' : 'asc',
        ],
      };
    default:
      return state;
  }
};

export const useTodoListFilter = () => {
  return useReducer(reducer, defaultState);
};
