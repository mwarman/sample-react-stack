/**
 * The `ModalLoading` React component.
 * @module components/common/modals/ModalLoading
 */

import Placeholder from '../Placeholder';

/**
 * The `ModalLoading` component renders a loading state placeholder for
 * a `Modal`. Useful when waiting for asynchronous activities to complete.
 * @function
 * @param {Object} props The component properties.
 * @param {boolean} [props.show=true] Indicates if this component should be shown.
 * @returns {JSXElement} JSX
 */
const ModalLoading = ({ show = true }) => {
  if (!show) return null;

  return (
    <div className="p-4">
      <div className="mb-8 flex items-center justify-between">
        <Placeholder className="h-12 w-60" />
        <Placeholder className="h-12 w-8" />
      </div>
      <div className="mb-8">
        <Placeholder className="h-20" />
      </div>
      <div className="flex items-center justify-end">
        <Placeholder className="h-8 w-32" />
        <Placeholder className="ml-4 h-8 w-32" />
      </div>
    </div>
  );
};

export default ModalLoading;
