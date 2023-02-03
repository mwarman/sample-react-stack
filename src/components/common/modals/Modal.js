import classNames from 'classnames';

import Icon from '../icons/Icon';

const getSizeClasses = (size) => {
  switch (size) {
    case 'full':
      return 'w-screen h-screen';
    case 'lg':
      return 'w-[800px] rounded';
    case 'sm':
      return 'w-[300px] rounded';
    default:
      return 'w-[500px] rounded';
  }
};

const Modal = ({ children, onClose, size, title }) => {
  const close = () => {
    onClose && onClose();
  };

  return (
    <div className="absolute top-0 left-0 z-40 h-screen w-screen bg-slate-700/50" onClick={close}>
      <div
        className={classNames('z-50 mx-auto my-16 bg-white', getSizeClasses(size))}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4">
          <div className="text-2xl">{title}</div>
          <button type="button" onClick={close}>
            <Icon name="xmark" fixedWidth className="text-xl" />
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
