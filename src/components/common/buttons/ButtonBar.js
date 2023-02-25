import classNames from "classnames";

const ButtonBar = ({ className, children }) => {
  return (
    <div className={classNames("flex items-center", className)}>{children}</div>
  );
};

export default ButtonBar;
