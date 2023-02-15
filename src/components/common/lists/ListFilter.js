import Icon from '../icons/Icon';

import { useListContext } from '../../../hooks/list.hooks';

const ListFilter = ({ className, placeholder = 'Filter the list...' }) => {
  const { list, setSearch } = useListContext();

  return (
    <div className={className}>
      <div className="inline-flex items-center rounded bg-slate-300/50 px-2 py-1 text-sm">
        <Icon name="magnifying-glass" className="mr-2" />
        <input
          name="todoListSearch"
          placeholder={placeholder}
          className="bg-transparent outline-0 placeholder:text-slate-400"
          autoComplete="off"
          value={list.search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ListFilter;
