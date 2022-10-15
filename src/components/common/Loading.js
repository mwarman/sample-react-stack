import { ArrowPathIcon } from '@heroicons/react/24/solid';

const Loading = ({ text }) => {
  return (
    <div className="inline-block text-2xl font-bold">
      <ArrowPathIcon className="h6 mr-2 inline-block w-6 animate-spin" />
      <span>{text}</span>
    </div>
  );
};

export default Loading;
