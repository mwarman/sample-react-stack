import { useContext } from 'react';

import { Actions, ListContext } from '../contexts/list.context';

const getListActions = (dispatch) => {
  const setMatches = (matches = {}) => {
    dispatch({
      type: Actions.SET_MATCHES,
      payload: {
        matches,
      },
    });
  };

  const setPage = (page = 1) => {
    dispatch({
      type: Actions.SET_PAGE,
      payload: {
        page,
      },
    });
  };

  const setSearch = (search = '') => {
    dispatch({
      type: Actions.SET_SEARCH,
      payload: {
        search,
      },
    });
  };

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

export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useListContext hook must be used inside a ListContextProvider');
  }

  const { state, dispatch } = context;

  const actions = getListActions(dispatch);

  return { list: state, ...actions };
};
