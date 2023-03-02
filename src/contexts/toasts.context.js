/**
 * React context to manage Toasts.
 * @module contexts/toasts
 */

import React, { useMemo, useReducer } from 'react';

/**
 * React context for Toasts.
 */
export const ToastsContext = React.createContext();

/**
 * ToastsContext Action types.
 */
export const Actions = {
  CREATE_TOAST: 'CREATE_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
};

/**
 * ToastsContext default state.
 */
const DEFAULT_STATE = { toasts: [] };

/**
 * ToastContext reducer function manages the internal state of the context.
 * @param {Object[]} state The current context state.
 * @param {Object} action The action to perform.
 * @returns {Object[]} The updated context state.
 */
const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case Actions.CREATE_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, payload],
      };
    case Actions.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== payload.id),
      };
    default:
      return state;
  }
};

/**
 * A React Context Provider component for toasts.
 * @function
 * @param {Object} props The component properties.
 * @returns {JSXElement} A JSX element which serves as the React Context
 * provider for toasts. Children may consume the context values with
 * the `useToastsContext` hook.
 */
export const ToastsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ToastsContext.Provider value={value} {...props} />;
};
