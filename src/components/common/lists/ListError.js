/**
 * The `ListError` React component.
 * @module components/common/lists/ListError
 */

import Icon from '../icons/Icon';

/**
 * The `ListError` component renders an error state notification when an
 * error is caught fetching a list of items, otherwise, displays the
 * `children`.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The content displayed when there is no error.
 * @param {Error} [props.error] An error. If present and `isError===true`, the `message` is displayed.
 * @param {boolean} [props.isError=false] Indicates if an error occurred.
 * @returns {JSXElement} JSX
 * @example
 * <ListError isError={isError} error={error}>
 *   <div>Show when no error</div>
 * </ListError>
 */
const ListError = ({ children, error, isError }) => {
  if (isError) {
    return (
      <div className="my-8 flex flex-col items-center justify-center text-slate/70">
        <Icon name="triangle-exclamation" className="mb-4 text-6xl" />
        <div className="text-xl">Unable to fetch items</div>
        {error && error.message && (
          <div className="mt-4">
            <div className="text-sm">Technical Details:</div>
            <div className="text-sm">{error.message}</div>
          </div>
        )}
      </div>
    );
  }

  return children;
};

export default ListError;
