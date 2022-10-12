import { ArrowPathIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

import Button from "./Button";

const LoadingButton = ({ children, isLoading, size = "md", ...props }) => {
  let sizeClasses = "";
  switch (size) {
    case "lg":
      sizeClasses = "h-6 w-6";
      break;
    case "sm":
      sizeClasses = "h-4 w-4";
      break;
    default:
      sizeClasses = "h-5 w-5";
  }

  if (isLoading) {
    return (
      <Button size={size} {...props}>
        <div className="flex items-center">
          <ArrowPathIcon
            className={classNames(sizeClasses, "mr-2 animate-spin")}
          />
          {children}
        </div>
      </Button>
    );
  }

  return (
    <Button size={size} {...props}>
      {children}
    </Button>
  );
};

export default LoadingButton;
