/**
 * React context to manage lists of items.
 * @module contexts/list
 */
/**
 * The ListContextOptions object.
 * @typedef {Object} ListContextOptions
 * @property {Object} matches - Filter matching criteria.
 * @property {Object} pagination - Pagination controls.
 * @property {number} pagination.page - The current page.
 * @property {number} pagination.size - The maximum number of items per page.
 * @property {string} search - Text search criteria.
 * @property {Object} sort - Sort controls.
 * @property {string} sort.by - The attribute by which to sort.
 * @property {string} sort.order - The sort direction. One of 'asc', 'desc'.
 * @example
 * const listContextOptions = {
  matches: {
    isArchived: false
  },
  pagination: {
    page: 1,
    size: 10,
  },
  search: 'monkey',
  sort: {
    by: 'summary',
    order: 'asc',
  },
};
 */

import React, { useMemo, useReducer } from 'react';
import merge from 'lodash/merge';

/** The ListContext React Context */
export const ListContext = React.createContext();

/**
 * Enumeration of ListContext reducer action types.
 */
export const Actions = {
  SET_MATCHES: 'SET_MATCHES',
  SET_PAGE: 'SET_PAGE',
  SET_SEARCH: 'SET_SEARCH',
  SET_SORT: 'SET_SORT',
};

/**
 * ListContext default state.
 * @type ListContextOptions
 */
export const DEFAULT_STATE = {
  matches: {},
  pagination: {
    page: 1,
    size: 10,
  },
  search: '',
  sort: {
    by: '',
    order: 'asc',
  },
};

/**
 * ListContext reducer function manages the internal state of the context.
 * @function
 * @param state {ListContextOptions} The current context state.
 * @param action {Object} The action to perform.
 * @returns {ListContextOptions} The updated context state.
 */
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_MATCHES:
      return {
        ...state,
        matches: payload.matches,
      };
    case Actions.SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: payload.page,
        },
      };
    case Actions.SET_SEARCH:
      return {
        ...state,
        search: payload.search,
      };
    case Actions.SET_SORT:
      const order = state.sort.by === payload.by && state.sort.order === 'asc' ? 'desc' : 'asc';
      return {
        ...state,
        sort: {
          ...state.sort,
          by: payload.by,
          order,
        },
      };
    default:
      return state;
  }
};

/**
 * The `ListContextProvider` component creates a ListContext which may be
 * consumed by children of this component.
 * @function
 * @param {Object} properties The component properties.
 * @param {ListContextOptions} [properties.listOptions={}] Initial list context options.
 * @param {*} properties.props The rest of the component properties.
 * @returns {JSXElement} JSX
 */
export const ListContextProvider = ({ listOptions = {}, ...props }) => {
  const initialState = merge({}, DEFAULT_STATE, listOptions);

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ListContext.Provider value={value} {...props} />;
};
