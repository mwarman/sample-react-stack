import { useState } from 'react';

import Button from '../common/Button';
import Modal from '../common/Modal';
import TodoCreate from './TodoCreate';

const CreateTodoButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        size={props.size || 'sm'}
        variant="primary"
        onClick={() => setShowModal(true)}
        title="Create todo"
        {...props}
      >
        Create
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} size="fit">
          <TodoCreate onSuccess={() => setShowModal(false)} onCancel={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default CreateTodoButton;
