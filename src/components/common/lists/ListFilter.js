/**
 * The `ListFilter` React component.
 * @module components/common/lists/ListFilter
 */

import Icon from '../icons/Icon';

import { useListContext } from '../../../hooks/list.hooks';

/**
 * The `ListFilter` component renders an input allowing the user to filter
 * a list of items by text. This component integrates with the `ListContext`
 * to provide filter controls.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the filter wrapper.
 * @param {string} [props.placeholder='Filter the list...'] Optional placeholder
 * text to display when the input element is empty.
 * @returns {JSXElement} JSX
 */
const ListFilter = ({ className, placeholder = 'Filter the list...' }) => {
  const { list, setSearch } = useListContext();

  return (
    <div className={className}>
      <div className="inline-flex items-center rounded bg-slate-light/50 px-2 py-1 text-sm">
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
