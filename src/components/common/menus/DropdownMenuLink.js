import { Link } from 'react-router-dom';
import classNames from 'classnames';

const DropdownMenuLink = ({ className, ...props }) => {
  return (
    <Link className={classNames('block p-1 text-sm hover:bg-slate-500/20', className)} {...props} />
  );
};

export default DropdownMenuLink;
