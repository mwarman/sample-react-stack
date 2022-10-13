import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ children, onClose }) => {
  const close = () => {
    onClose && onClose();
  };

  return (
    <div className="absolute top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-700/50">
      <div className="relative z-50 h-1/2 w-1/2 rounded border-slate-200 bg-white p-4">
        <button
          type="button"
          className="absolute -top-2 -right-2 rounded-full border border-slate-200 bg-white p-2"
          onClick={close}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
