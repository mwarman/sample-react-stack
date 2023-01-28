import Button from '../../common/Button';

import { useModalContext } from '../../../hooks/modal.hooks';

const CreateTodoButton = (props) => {
  const { setModalOptions } = useModalContext();

  return (
    <>
      <Button
        size={props.size || 'sm'}
        variant="primary"
        onClick={() => {
          setModalOptions({ modal: 'todoCreate' });
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
