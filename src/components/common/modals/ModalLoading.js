import Placeholder from '../Placeholder';

const ModalLoading = ({ show = true }) => {
  if (!show) return null;

  return (
    <div className="p-4">
      <div className="mb-8 flex items-center justify-between">
        <Placeholder size="xl" className="w-60" />
        <Placeholder size="xl" className="w-8" />
      </div>
      <div className="mb-8">
        <Placeholder size="lg" className="h-20" />
      </div>
      <div className="flex items-center justify-end">
        <Placeholder size="xl" className="w-32" />
        <Placeholder size="xl" className="ml-4 w-32" />
      </div>
    </div>
  );
};

export default ModalLoading;
