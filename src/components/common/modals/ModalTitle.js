import classNames from 'classnames';

import ModalCloseButton from './ModalCloseButton';

const ModalTitle = ({ className, title }) => {
  return (
    <div className={classNames('flex items-center justify-between rounded-t', className)}>
      <div className="mr-2 text-2xl">{title}</div>
      <ModalCloseButton />
    </div>
  );
};

export default ModalTitle;
