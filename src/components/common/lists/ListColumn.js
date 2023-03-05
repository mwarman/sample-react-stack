/**
 * The `ListColumn` React component.
 * @module components/common/lists/ListColumn
 */

import classNames from 'classnames';

import Icon from '../icons/Icon';

import { useListContext } from '../../../hooks/list.hooks';

/**
 * The `ListColumn` component renders a single column heading when displaying
 * a list of items. This component integrates with the `ListContext` to provide
 * sort controls.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the column.
 * @param {string} props.name The column display name.
 * @param {string} props.path The item attribute path.
 * @returns {JSXElement} JSX
 * @example
 *  <ListColumn
 *    className="col-span-6 overflow-clip whitespace-nowrap"
 *    name="Summary"
 *    path="summary"
 *  />
 */
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
      className={classNames('flex cursor-pointer items-center', className)}
      onClick={() => setSort(path)}
    >
      <div className="font-bold">{name}</div>
      {getIcon()}
    </div>
  );
};

export default ListColumn;
