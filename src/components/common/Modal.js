import { useState } from "react";

const Modal = ({ children, onClose }) => {
  const close = () => {
    onClose && onClose();
  };

  return (
    <div
      id="modal-backdrop"
      className="absolute top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-700/50"
    >
      <div id="modal" className="z-50 h-1/2 w-1/2 rounded bg-white p-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
