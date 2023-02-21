const Mention = ({ name }) => {
  return (
    <span className="rounded-full bg-blue/30 py-0.5 px-2 text-sm text-blue-dark dark:text-blue-light/70">
      @{name}
    </span>
  );
};

export default Mention;
