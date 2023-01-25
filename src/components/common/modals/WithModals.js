import { useSearchParams } from 'react-router-dom';

import CreateTodoModal from '../../todos/create/CreateTodoModal';

const WithModals = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <CreateTodoModal
        isHidden={!searchParams.has('todoCreate')}
        onHide={() => {
          searchParams.delete('todoCreate');
          setSearchParams(searchParams);
        }}
      />

      {children}
    </>
  );
};

export default WithModals;
