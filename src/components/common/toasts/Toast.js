/**
 * The `Toast` React component.
 * @module components/common/toasts/Toast
 */

import { useEffect } from 'react';

import Icon from '../icons/Icon';

import config from '../../../utils/config';

/**
 * The `Toast` component renders a small, floating, dismissable message.
 * Toasts auto-dismiss if not explicitly dismissed by the user. The auto-
 * dismiss time is configued with the `REACT_APP_TOAST_AUTODISMISS_MS`
 * property. The default is 5 seconds.
 * @function
 * @param {Object} props The component properties.
 * @param {string} props.id The toast identifier.
 * @param {string} props.message The toast message.
 * @param {function} props.onDismiss Fuction which accepts the toast identifier.
 * Removes the toast.
 * @returns {JSXElement} JSX
 */
const Toast = ({ id, message, onDismiss }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDismiss(id);
    }, config.REACT_APP_TOAST_AUTODISMISS_MS);
    return () => clearTimeout(timeoutId);
  }, [id, onDismiss]);

  return (
    <div className="mb-4 flex w-[350px] items-start justify-between rounded-lg border border-slate/30 bg-white p-4 shadow-lg shadow-slate/50 last:mb-0 dark:bg-slate-900">
      <div>{message}</div>
      <button type="button" onClick={() => onDismiss(id)}>
        <Icon name="xmark" className="ml-1 shrink-0 text-xl" />
      </button>
    </div>
  );
};

export default Toast;
