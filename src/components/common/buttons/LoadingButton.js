/**
 * The `LoadingButton` React component.
 * @module components/common/buttons/LoadingButton
 */
import Button from './Button';
import Loading from '../Loading';

/**
 * The `LoadingButton` component builds upon `Button`. It renders a Button which
 * displays a spinner when in a loading state.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner content.
 * @param {boolean} [props.isLoading=false] Controls loading state display.
 * @param {*} [props....props] Any additional properties passed to the `Button` component.
 * @returns {JSXElement} JSX
 */
const LoadingButton = ({ children, isLoading = false, ...props }) => {
  if (isLoading) {
    return (
      <Button size={size} {...props}>
        <div className="flex items-center justify-center">
          <Loading className="mr-2" />
          {children}
        </div>
      </Button>
    );
  }

  return (
    <Button size={size} {...props}>
      {children}
    </Button>
  );
};

export default LoadingButton;
