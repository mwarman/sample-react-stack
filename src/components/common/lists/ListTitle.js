import Loading from '../Loading';

const ListTitle = ({ showLoading = false, title }) => {
  return (
    <div className="flex items-center">
      <div className="text-2xl font-bold">{title}</div>
      {showLoading && <Loading className="ml-2 text-slate" />}
    </div>
  );
};

export default ListTitle;
