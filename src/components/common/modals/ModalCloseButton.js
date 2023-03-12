/**
 * The `ModalCloseButton` React component.
 * @module components/common/modals/ModalCloseButton
 */

import Icon from '../icons/Icon';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `ModalCloseButton` component renders a button within a `Modal` which
 * closes (or hides) the `Modal`.
 * @function
 * @returns {JSXElement} JSX
 */
const ModalCloseButton = () => {
  const { setModalOptions } = useModalContext();

  return (
    <button type="button" onClick={() => setModalOptions()}>
      <Icon name="xmark" fixedWidth className="text-xl" />
    </button>
  );
};

export default ModalCloseButton;
