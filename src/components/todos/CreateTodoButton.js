import { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import TodoCreate from "./TodoCreate";

const CreateTodoButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant="primary"
        onClick={() => setShowModal(true)}
        {...props}
      >
        Create
      </Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TodoCreate
            onSuccess={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default CreateTodoButton;
