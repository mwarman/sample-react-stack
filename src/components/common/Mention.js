const Mention = ({ name }) => {
  return (
    <span className="rounded-full bg-blue-500 py-0.5 px-2 text-sm text-white">
      @{name}
    </span>
  );
};

export default Mention;
