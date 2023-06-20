/**
 * The `Loading` React component.
 * @module components/common/Loading
 */

import classNames from 'classnames';

import Icon from './icons/Icon';

/**
 * The `Loading` component renders a loading state indicator, i.e. a spinner,
 * with optional text.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} [props.children] Optional content to display next to the loading indicator.
 * @param {string} [props.className] Optional additional classes applied to the component wrapper.
 * @returns {JSXElement} JSX
 * @example
 * <Loading />
 * <Loading className="justify-center my-10">Loading...</Loading>
 */
const Loading = ({ children, className }) => {
  return (
    <div className={classNames('flex items-center', className)} data-testid="loading">
      <Icon name="circle-notch" spin className="inline-block" />
      {children && <div className="ml-2">{children}</div>}
    </div>
  );
};

export default Loading;
