import classNames from "classnames";

const Placeholder = ({ className, size = "md" }) => {
  let sizeClass = "h-3";
  switch (size) {
    case "lg":
      sizeClass = "h-4";
      break;
    case "sm":
      sizeClass = "h-2";
      break;
    default:
      sizeClass = "h-3";
  }

  return (
    <div
      className={classNames(
        sizeClass,
        "animate-pulse rounded bg-slate-200",
        className
      )}
    ></div>
  );
};

export default Placeholder;
