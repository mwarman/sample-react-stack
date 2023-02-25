import classNames from 'classnames';

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

const Modal = ({ children, onHide, size }) => {
  const hide = () => {
    !!onHide && onHide();
  };

  return (
    <div className="absolute top-0 left-0 z-40 h-screen w-screen bg-slate-700/50" onClick={hide}>
      <div
        className={classNames(
          'z-50 mx-auto my-16 bg-white dark:bg-slate-900',
          getSizeClasses(size),
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
