import classNames from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';

const getModalSize = (size) => {
  switch (size) {
    case 'lg':
      return 'h-3/5';
    case 'sm':
      return 'h-2/5';
    case 'fit':
      return '';
    default:
      return 'h-1/2';
  }
};

const Modal = ({ children, onClose, size = 'md' }) => {
  const close = () => {
    onClose && onClose();
  };

  return (
    <div className="absolute top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-700/50">
      <div
        className={classNames(
          'relative z-50 w-1/2 rounded border-slate-200 bg-white p-4',
          getModalSize(size),
        )}
      >
        <button
          type="button"
          className="absolute -top-2 -right-2 rounded-full border border-slate-200 bg-white p-2"
          onClick={close}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
