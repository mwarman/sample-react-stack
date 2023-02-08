import classNames from 'classnames';

const Placeholder = ({ className }) => {
  return <div className={classNames('animate-pulse rounded bg-slate-300/70', className)}></div>;
};

export default Placeholder;
