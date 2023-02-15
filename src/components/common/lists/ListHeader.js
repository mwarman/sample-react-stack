const ListHeader = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 border-b-2 border-slate-300 p-2 dark:border-slate-700">
      {children}
    </div>
  );
};

export default ListHeader;
