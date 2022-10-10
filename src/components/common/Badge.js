export const Badge = ({ type, children }) => {
  let classNames = "px-2 py-1 rounded text-xs font-bold ";

  switch (type) {
    case "danger":
      classNames += "bg-red-600 text-white";
      break;
    case "success":
      classNames += "bg-green-600 text-white";
      break;
    case "warning":
      classNames += "bg-amber-300";
      break;
    default:
      classNames += "bg-slate-300";
  }

  return <span className={classNames}>{children}</span>;
};

export default Badge;
