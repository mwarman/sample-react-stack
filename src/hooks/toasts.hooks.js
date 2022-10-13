import { useContext } from "react";
import { v4 as uuid } from "uuid";

import { ToastsContext } from "../contexts/toast.context";

export const useToastsContext = () => {
  const context = useContext(ToastsContext);
  if (!context) {
    throw new Error("useToasts hook must be used inside a ToastProvider");
  }

  const { state, dispatch } = context;

  const createToast = (message = "") => {
    dispatch({
      type: "CREATE_TOAST",
      payload: {
        id: uuid(),
        message,
      },
    });
  };

  const removeToast = (id) => {
    dispatch({
      type: "REMOVE_TOAST",
      payload: { id },
    });
  };

  return { toasts: state.toasts, createToast, removeToast };
};
