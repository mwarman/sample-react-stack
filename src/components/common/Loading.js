import classNames from 'classnames';

import Icon from './icons/Icon';

const Loading = ({ children, className }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      <Icon name="circle-notch" spin className="inline-block" />
      {children && <div className="ml-2">{children}</div>}
    </div>
  );
};

export default Loading;
