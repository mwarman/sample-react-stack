/**
 * The `ListTitle` React component.
 * @module components/common/lists/ListTitle
 */

import Loading from '../Loading';

/**
 * The `ListTitle` component renders a styled title for a list. Displays a
 * loading indicator when the list is loading (or fetching).
 * @function
 * @param {Object} props The component propserties.
 * @param {boolean} [props.showLoading=false] Indicates when the spinner should be shown.
 * @param {string} props.title The title.
 * @returns {JSXElement} JSX
 * @example
 * <ListTitle title="Items" showLoading={query.isFetching} />
 */
const ListTitle = ({ showLoading = false, title }) => {
  return (
    <div className="flex items-center">
      <div className="text-2xl font-bold">{title}</div>
      {showLoading && <Loading className="ml-2 text-slate" />}
    </div>
  );
};

export default ListTitle;
