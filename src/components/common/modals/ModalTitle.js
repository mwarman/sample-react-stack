/**
 * The `ModalTitle` React component.
 * @module components/common/modals/ModalTitle
 */

import classNames from 'classnames';

import ModalCloseButton from './ModalCloseButton';

/**
 * The `ModalTitle` component renders a styled title text and close button
 * within a `Modal`.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the title element.
 * @param {string} props.title The title text.
 * @returns {JSXElement} JSX
 * @example
 * <Modal onHide={hide} size="lg">
 *   <ModalTitle title="Create Todo" className="p-4" />
 *   <div className="p-4">
 *     <TodoCreate onSuccess={hide} onCancel={hide} {...props} />
 *   </div>
 * </Modal>
 */
const ModalTitle = ({ className, title }) => {
  return (
    <div className={classNames('flex items-center justify-between rounded-t', className)}>
      <div className="mr-2 text-2xl">{title}</div>
      <ModalCloseButton />
    </div>
  );
};

export default ModalTitle;
