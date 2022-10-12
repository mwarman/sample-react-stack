import Toast from "./Toast";

const toasts = [
  {
    id: 1,
    message:
      "Qui e commodo officia vel a enim. Velit exercitation vitae sed dolor mi labore.",
  },
  {
    id: 2,
    message:
      "Ut commodo fugait aute dolor ea. Non sed anim cillum sapien do ex do.",
  },
];

const Toasts = () => {
  return (
    <div id="toasts" className="absolute bottom-0 left-0 z-50 p-4">
      {toasts.map((toast) => (
        <Toast key={toast.id}>{toast.message}</Toast>
      ))}
    </div>
  );
};

export default Toasts;
