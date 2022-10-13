import { useContext } from "react";
import { v4 as uuid } from "uuid";
import reject from "lodash/reject";

import { ToastContext } from "../contexts/toast.context";

export const useToasts = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToasts hook must be used inside a ToastProvider");
  }

  const { toasts, setToasts } = context;
  console.log(`useToasts::${JSON.stringify(toasts)}`);

  const createToast = (message = "") => {
    setToasts([...toasts, { id: uuid(), message }]);
  };

  const removeToast = (id) => {
    console.log(`removeToast::${id}::${JSON.stringify(toasts)}`);
    setToasts(reject(toasts, { id }));
  };

  return { toasts, createToast, removeToast };
};
