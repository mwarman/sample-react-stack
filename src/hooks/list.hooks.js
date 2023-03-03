/**
 * Hooks to interact with the `ListContext`.
 * @module hooks/list
 * @see {@link contexts/list}
 */

import { useContext } from 'react';

import { Actions, ListContext } from '../contexts/list.context';

/**
 * Provides `action` functions to manipulate the `ListContext` internal
 * state.
 * @function
 * @param {function} dispatch The `dispatch` function.
 * @returns {Object} The `ListContext` actions.
 */
const getListActions = (dispatch) => {
  /**
   * Action function to set the filter match criteria.
   * @param {Object} [matches={}] The filter match criteria.
   */
  const setMatches = (matches = {}) => {
    dispatch({
      type: Actions.SET_MATCHES,
      payload: {
        matches,
      },
    });
  };

  /**
   * Action function to set the current page number.
   * @param {number} [page=1] The page number.
   */
  const setPage = (page = 1) => {
    dispatch({
      type: Actions.SET_PAGE,
      payload: {
        page,
      },
    });
  };

  /**
   * Action function to set the text search criteria.
   * @param {string} [search=''] The text search criteria.
   */
  const setSearch = (search = '') => {
    dispatch({
      type: Actions.SET_SEARCH,
      payload: {
        search,
      },
    });
  };

  /**
   * Action function to set the attribute by which to sort.
   * @param {string} [by=''] A list item attribute name.
   */
  const setSort = (by = '') => {
    dispatch({
      type: Actions.SET_SORT,
      payload: {
        by,
      },
    });
  };

  return {
    setMatches,
    setPage,
    setSearch,
    setSort,
  };
};

/**
 * Hook which provides the current value of the nearest `ListContext` and the
 * action functions to mutate the context value.
 * @function
 * @returns {Object} An object containing the `list`, i.e. the current value
 * of the `ListContext`, and the action functions.
 * @example
 * const {list, setSearch, setPage, setSort, setMatches } = useListContext();
 * ...
 * setSort('title');
 * ...
 * setSearch('vacuum');
 */
export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useListContext hook must be used inside a ListContextProvider');
  }

  const { state, dispatch } = context;

  const actions = getListActions(dispatch);

  return { list: state, ...actions };
};
