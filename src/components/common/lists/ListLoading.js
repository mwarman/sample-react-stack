import Icon from '../icons/Icon';

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
