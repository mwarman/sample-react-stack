import Icon from '../icons/Icon';

const ListError = ({ children, error, isError }) => {
  if (isError) {
    return (
      <div className="my-8 flex flex-col items-center justify-center text-slate-500">
        <Icon name="triangle-exclamation" className="mb-4 text-6xl text-slate-200" />
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
