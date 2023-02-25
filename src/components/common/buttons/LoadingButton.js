import Button from './Button';
import Loading from '../Loading';

/**
 * The `LoadingButton` component builds upon `Button` rendering a `button` that
 * displays a spinner when in a loading state.
 * @param {Object} props The component properties.
 * @returns JSX
 */
const LoadingButton = ({ children, isLoading, size = 'md', ...props }) => {
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
