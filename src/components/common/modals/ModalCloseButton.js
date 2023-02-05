import Icon from '../icons/Icon';

import { useModalContext } from '../../../hooks/modal.hooks';

const ModalCloseButton = () => {
  const { setModalOptions } = useModalContext();

  return (
    <button type="button" onClick={() => setModalOptions()}>
      <Icon name="xmark" fixedWidth className="text-xl" />
    </button>
  );
};

export default ModalCloseButton;
