import React, { useMemo, useReducer } from "react";

// create the Context for toasts
export const ToastsContext = React.createContext();

// create a reducer to manage toast state
// use a reducer (vs state) to allow state mutation with `setTimeout`
// and `setInterval`
export const CREATE_TOAST = "CREATE_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";
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

/**
 * A React Context Provider component for toasts.
 * @param {Object} props The component properties.
 * @returns {JSXElement} A JSX element which serves as the React Context
 * provider for toasts. Children may consume the context values with
 * the `useToastsContext` hook.
 */
export const ToastsContextProvider = (props) => {
  const [state, dispatch] = useReducer(toastsReducer, defaultState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ToastsContext.Provider value={value} {...props} />;
};
