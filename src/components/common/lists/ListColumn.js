import classNames from 'classnames';

import Icon from '../icons/Icon';

import { useListContext } from '../../../hooks/list.hooks';

const ListColumn = ({ className, name, path }) => {
  const { list, setSort } = useListContext();

  const getIcon = () => {
    if (list.sort.by === path) {
      const iconName = list.sort.order === 'asc' ? 'arrow-up' : 'arrow-down';
      return <Icon name={iconName} className="ml-1 text-sm" />;
    }
    return null;
  };

  return (
    <div
      className={classNames('flex cursor-pointer items-center text-slate-700', className)}
      onClick={() => setSort(path)}
    >
      <div className="font-bold">{name}</div>
      {getIcon()}
    </div>
  );
};

export default ListColumn;
