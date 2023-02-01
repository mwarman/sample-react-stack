import Icon from '../icons/Icon';

const ListEmpty = ({ items = [] }) => {
  if (items.length > 0) return null;

  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <Icon name="magnifying-glass" className="mb-4 text-6xl text-slate-200" />
      <div className="text-xl text-slate-500">No items found</div>
    </div>
  );
};

export default ListEmpty;
