import Icon from '../icons/Icon';

const ListLoading = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <div className="my-8 flex animate-pulse flex-col items-center justify-center">
        <Icon name="circle-notch" spin className="mb-4 text-6xl text-slate-200" />
        <div className="text-xl text-slate-500">Fetching items</div>
      </div>
    );
  }

  return children;
};

export default ListLoading;
