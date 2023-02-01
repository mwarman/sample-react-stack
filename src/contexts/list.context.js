import React, { useMemo, useReducer } from 'react';
import merge from 'lodash/merge';

export const ListContext = React.createContext();

export const Actions = {
  SET_MATCHES: 'SET_MATCHES',
  SET_PAGE: 'SET_PAGE',
  SET_SEARCH: 'SET_SEARCH',
  SET_SORT: 'SET_SORT',
};

const DEFAULT_STATE = {
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

export const ListContextProvider = ({ listOptions = {}, ...props }) => {
  const initialState = merge({}, DEFAULT_STATE, listOptions);

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ListContext.Provider value={value} {...props} />;
};
