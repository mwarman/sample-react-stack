import classNames from "classnames";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const Alert = ({ children, className, variant = "default" }) => {
  let alertColor = "";
  switch (variant) {
    case "primary":
      alertColor = "border-blue-500 bg-blue-100";
      break;
    case "warning":
      alertColor = "border-amber-400 bg-amber-100";
      break;
    case "error":
      alertColor = "border-red-500 bg-red-100";
      break;
    default:
      alertColor = "border-slate-500 bg-slate-100";
  }

  let iconColor = "";
  switch (variant) {
    case "primary":
      iconColor = "text-blue-500";
      break;
    case "warning":
      iconColor = "text-amber-400";
      break;
    case "error":
      iconColor = "text-red-500";
      break;
    default:
      iconColor = "text-slate-500";
  }

  return (
    <div
      className={classNames(
        "flex items-center rounded border p-2",
        alertColor,
        iconColor,
        className
      )}
    >
      <ExclamationTriangleIcon className="mr-2 inline-block h-6 w-6 text-red-500" />
      <div>{children}</div>
    </div>
  );
};

export default Alert;
