import React, { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

export const ToastContext = React.createContext();

export const ToastContextProvider = (props) => {
  const [toasts, setToasts] = useState([]);

  const value = useMemo(() => ({ toasts, setToasts }), [toasts]);

  return <ToastContext.Provider value={value} {...props} />;
};
