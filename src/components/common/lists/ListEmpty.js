/**
 * The `ListEmpty` React component.
 * @module components/common/lists/ListEmpty
 */

import Icon from '../icons/Icon';

/**
 * The `ListEmpty` component renders an empty state notification when empty,
 * otherwise, displays the `children`.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The content displayed when not empty.
 * @param {boolean} [props.isEmpty=false] Indicates if the list is empty.
 * @returns {JSXElement} JSX
 * @example
 * <ListEmpty isEmpty={list.length === 0}>
 *   <div>Show when not empty</div>
 * </ListEmpty>
 */
const ListEmpty = ({ children, isEmpty }) => {
  if (isEmpty) {
    return (
      <div className="my-8 flex flex-col items-center justify-center text-slate/70">
        <Icon name="magnifying-glass" className="mb-4 text-6xl" />
        <div className="text-xl">No items found</div>
      </div>
    );
  }

  return children;
};

export default ListEmpty;
