import classNames from 'classnames';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

const getIconSizeClasses = (size) => {
  switch (size) {
    case 'lg':
      return 'h-8 w-8';
    case 'sm':
      return 'h-5 w-5';
    default:
      return 'h-6 w-6';
  }
};

const getTextSizeClasses = (size) => {
  switch (size) {
    case 'lg':
      return 'text-4xl font-bold';
    case 'sm':
      return '';
    default:
      return 'text-2xl font-bold';
  }
};

const Loading = ({ className, size = 'md', text }) => {
  return (
    <div className={classNames('flex items-center', className)}>
      <ArrowPathIcon
        className={classNames('mr-2 inline-block', getIconSizeClasses(size), 'animate-spin')}
      />
      <span className={classNames(getTextSizeClasses(size))}>{text}</span>
    </div>
  );
};

export default Loading;
