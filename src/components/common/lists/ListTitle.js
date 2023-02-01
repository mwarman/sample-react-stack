import Loading from '../Loading';

const ListTitle = ({ showLoading = false, title }) => {
  return (
    <div className="flex items-center">
      <div className="text-2xl font-bold text-slate-700">{title}</div>
      {showLoading && <Loading className="ml-2 text-slate-500" />}
    </div>
  );
};

export default ListTitle;