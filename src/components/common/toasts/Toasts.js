/**
 * The `Toasts` React component.
 * @module components/common/toasts/Toasts
 */

import { useToastsContext } from '../../../hooks/toasts.hooks';
import Toast from './Toast';

/**
 * The `Toasts` component integrates with the `ToastsContext` and renders
 * all active toast messages in the lower-left corner of the page. The `Toasts`
 * component is typically configured once near the top of the component
 * hierarchy.
 * @function
 * @returns {JSXElement} JSX
 * @example
 * <ToastsContextProvider>
 *  <Header />
 *  <Outlet />
 *  <Toasts />
 * </ToastsContextProvider>
 */
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
