import Icon from '../icons/Icon';

const ListEmpty = ({ children, isEmpty }) => {
  if (isEmpty) {
    return (
      <div className="my-8 flex flex-col items-center justify-center text-slate/70">
        <Icon name="magnifying-glass" className="mb-4 text-6xl" />
        <div className="text-xl">No items found</div>
      </div>
    );
  }

  return children;
};

export default ListEmpty;
