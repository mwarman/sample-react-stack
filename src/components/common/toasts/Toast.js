import { useEffect } from 'react';

import Icon from '../icons/Icon';

import config from '../../../utils/config';

const Toast = ({ id, message, onDismiss }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDismiss(id);
    }, config.REACT_APP_TOAST_AUTODISMISS_MS);
    return () => clearTimeout(timeoutId);
  }, [id, onDismiss]);

  return (
    <div className="mb-4 flex w-[350px] items-start justify-between rounded-lg border border-slate-400 bg-white p-4 shadow-lg shadow-slate-600 last:mb-0">
      <div>{message}</div>
      <button type="button" onClick={() => onDismiss(id)}>
        <Icon name="xmark" className="ml-1 shrink-0 text-xl" />
      </button>
    </div>
  );
};

export default Toast;
