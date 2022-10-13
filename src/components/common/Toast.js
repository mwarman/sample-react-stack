import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Toast = ({ id, message, onDismiss }) => {
  console.log(`Toast::${id}`);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     onDismiss(id);
  //   }, 15000);
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <div className="mb-4 flex w-[350px] items-start justify-between rounded-lg border border-slate-400 bg-white p-4 shadow-lg shadow-slate-600 last:mb-0">
      <div>{message}</div>
      <button
        type="button"
        onClick={() => {
          onDismiss(id);
        }}
      >
        <XMarkIcon className="ml-1 h-6 w-6 shrink-0" />
      </button>
    </div>
  );
};

export default Toast;
