import { useToastsContext } from "../../hooks/toasts.hooks";
import Toast from "./Toast";

const Toasts = () => {
  const toastContext = useToastsContext();

  return (
    <div id="toasts" className="absolute bottom-0 left-0 z-50 p-4">
      {toastContext.toasts.map((toast) => (
        <Toast key={toast.id} onDismiss={toastContext.removeToast} {...toast} />
      ))}
    </div>
  );
};

export default Toasts;
