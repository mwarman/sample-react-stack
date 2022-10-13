import { useContext } from "react";
import { v4 as uuid } from "uuid";

import {
  ToastsContext,
  CREATE_TOAST,
  REMOVE_TOAST,
} from "../contexts/toasts.context";

/**
 * A hook allowing components to consume the value of the `ToastsContext`.
 * @returns {Object} A ToastsContext object containing the context state and mutator functions.
 */
export const useToastsContext = () => {
  // get the value of ToastsContext
  const context = useContext(ToastsContext);
  if (!context) {
    throw new Error(
      "useToastsContext hook must be used inside a ToastsContextProvider"
    );
  }

  const { state, dispatch } = context;

  // mutator - dispatch an action to create a new toast
  const createToast = (message = "") => {
    dispatch({
      type: CREATE_TOAST,
      payload: {
        id: uuid(),
        message,
      },
    });
  };

  // mutator - dispatch an action to remove a toast
  const removeToast = (id) => {
    dispatch({
      type: REMOVE_TOAST,
      payload: { id },
    });
  };

  // return the context state and mutators
  return { toasts: state.toasts, createToast, removeToast };
};
