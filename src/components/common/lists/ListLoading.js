/**
 * The `ListLoading` React component.
 * @module components/common/lists/ListLoading
 */

import Icon from '../icons/Icon';

/**
 * The `ListLoading` component renders a loading state notification when the
 * list is in a loading state; otherwise, displays the `children`.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The content displayed when not loading.
 * @param {boolean} [props.isLoading=false] Indicates if in loading state.
 * @returns {JSXElement} JSX
 * @example
 * <ListLoading isLoading={isLoading}>
 *   <div>Show when not loading</div>
 * </ListLoading>
 */
const ListLoading = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <div className="my-8 flex animate-pulse flex-col items-center justify-center text-slate/70">
        <Icon name="circle-notch" spin className="mb-4 text-6xl" />
        <div className="text-xl">Fetching items</div>
      </div>
    );
  }

  return children;
};

export default ListLoading;
