import React, { useMemo, useReducer } from "react";

// create the Context for toasts
export const ToastsContext = React.createContext();

// create a reducer to manage toast state
const CREATE_TOAST = "CREATE_TOAST";
const REMOVE_TOAST = "REMOVE_TOAST";
const defaultState = { toasts: [] };
const toastsReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ToastsContextProvider = (props) => {
  const [state, dispatch] = useReducer(toastsReducer, defaultState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ToastsContext.Provider value={value} {...props} />;
};
