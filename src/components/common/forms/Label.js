import classNames from 'classnames';

const Label = ({ children, className, ...props }) => {
  if (props.htmlFor) {
    return (
      <label className={classNames('text-sm font-bold', className)} {...props}>
        {children}
      </label>
    );
  }

  return null;
};

export default Label;
