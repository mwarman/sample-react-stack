/**
 * The `Modal` React component.
 * @module components/common/modals/Modal
 */

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

/**
 * The `Modal` component renders a styled modal dialog with a semi-transparent
 * backdrop. Modal width may be specified using the `size` property.
 * @function
 * @param {Object} props The component properties.
 * @param {children} props.children The inner content.
 * @param {function} [props.onHide] The function executed when the modal is hidden.
 * @param {string} [props.size] The modal size.
 * @returns {JSXElement} JSX
 * @example
 * <Modal onHide={hide} size="lg">
 *   <ModalTitle title="Create Todo" className="p-4" />
 *   <div className="p-4">
 *     <TodoCreate onSuccess={hide} onCancel={hide} {...props} />
 *   </div>
 * </Modal>
 */
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
