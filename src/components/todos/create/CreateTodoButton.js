/**
 * The `CreateTodoButton` React component.
 * @module components/todos/create/CreateTodoButton
 */

import Button from '../../common/buttons/Button';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `CreateTodoButton` renders a styled button that, when clicked,
 * displays the create todo form.
 * @function
 * @param {Object} props The component properties.
 * @returns {JSXElement} JSX
 * @example
 * <CreateTodoButton className="mx-6 w-24 text-base" />
 */
const CreateTodoButton = (props) => {
  const { setModalOptions } = useModalContext();

  return (
    <Button
      variant="primary"
      onClick={() => {
        setModalOptions({ modal: 'todoCreate' });
      }}
      title="Create todo"
      {...props}
    >
      Create
    </Button>
  );
};

export default CreateTodoButton;
