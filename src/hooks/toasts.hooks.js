/**
 * Hooks to interact with the `ToastContext`.
 * @module hooks/toasts
 * @see {@link contexts/toasts}
 */

import { useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { Actions, ToastsContext } from '../contexts/toasts.context';

/**
 * Provides `action` functions to manipulate the `ToastsContext` internal state.
 * @function
 * @param {function} dispatch The `dispatch`  function.
 * @returns {Object} The `ToastsContext` actions.
 */
const getToastActions = (dispatch) => {
  /**
   * Action function to create a toast.
   * @param {string} [message=''] The toast message.
   */
  const createToast = (message = '') => {
    dispatch({
      type: Actions.CREATE_TOAST,
      payload: {
        id: uuid(),
        message,
      },
    });
  };

  /**
   * Action function to remove a toast.
   * @param {string} id A toast identifier.
   */
  const removeToast = (id) => {
    dispatch({
      type: Actions.REMOVE_TOAST,
      payload: { id },
    });
  };

  return {
    createToast,
    removeToast,
  };
};

/**
 * Hook which provides the current value of the nearest `ToastContext` and the
 * action functions to mutate the context value.
 * @function
 * @returns {Object} An object containing the `toasts`, i.e. the current value
 * of the `ToastsContext`, and the action functions.
 * @example <caption>Create a toast</caption>
 * const { createToast } = useToastsContext();
 * createToast('Hello world!);
 * @example <caption>Get the current toasts</caption>
 * const { toasts } = useToastsContext();
 * // toasts: [{id:'abc123', message:'Hello world!'}]
 * @example <caption>Remove a toast</caption>
 * const { removeToast } = useToastsContext();
 * removeToast('abc123');
 */
export const useToastsContext = () => {
  // get the current value of ToastsContext
  const context = useContext(ToastsContext);
  if (!context) {
    throw new Error('useToastsContext hook must be used inside a ToastsContextProvider');
  }

  const { state, dispatch } = context;

  // get the action functions with the dispatch function from this context
  const actions = getToastActions(dispatch);

  // return the context state and mutators
  return { toasts: state.toasts, ...actions };
};
