import { useSearchParams } from 'react-router-dom';

import Button from '../../common/Button';

const CreateTodoButton = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Button
        size={props.size || 'sm'}
        variant="primary"
        onClick={() => {
          searchParams.append('todoCreate', 'true');
          setSearchParams(searchParams);
        }}
        title="Create todo"
        {...props}
      >
        Create
      </Button>
    </>
  );
};

export default CreateTodoButton;
