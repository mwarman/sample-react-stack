import classNames from 'classnames';

import Icon from '../icons/Icon';

const getModalSize = (size) => {
  switch (size) {
    case 'lg':
      return 'w-[800px]';
    case 'sm':
      return 'w-[300px]';
    default:
      return 'w-[500px]';
  }
};

const Modal = ({ children, onClose, size }) => {
  const close = () => {
    onClose && onClose();
  };

  return (
    <div className="absolute top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-700/50">
      <div
        className={classNames(
          'relative z-50 rounded border-slate-200 bg-white p-4',
          getModalSize(size),
        )}
      >
        <button
          type="button"
          className="absolute -top-2 -right-2 h-10 w-10 rounded-full border border-slate-200 bg-white p-2"
          onClick={close}
        >
          <Icon name="xmark" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
