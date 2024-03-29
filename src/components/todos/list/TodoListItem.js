/**
 * The `TodoListItem` React component.
 * @module components/todos/list/TodoListItem
 */

import { Link } from 'react-router-dom';

import StatusBadge from '../common/StatusBadge';
import Priority from '../common/Priority';
import DueDate from '../common/DueDate';
import DropdownMenu from '../../common/menus/DropdownMenu';
import DropdownMenuLink from '../../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../../common/menus/DropdownMenuTitle';
import Icon from '../../common/icons/Icon';

import { useModalContext } from '../../../hooks/modal.hooks';

/**
 * The `TodoListItem` component renders a single Todo within the `TodoList`.
 * @function
 * @param {Object} props The component properties.
 * @param {Object} props.todo A Todo.
 * @returns {JSXElement} JSX
 */
const TodoListItem = ({ todo }) => {
  const { setModalOptions } = useModalContext();

  return (
    <div className="grid grid-cols-12 items-center gap-4 p-2 hover:bg-slate/20">
      <div className="col-span-5 overflow-clip whitespace-nowrap">
        <Link to={`/todos/${todo.id}`} title="Edit Todo" className="hover:underline">
          {todo.summary}
        </Link>
      </div>
      <div className="col-span-2 overflow-clip whitespace-nowrap">
        <StatusBadge code={todo.statusCode} />
      </div>
      <div className="col-span-2 overflow-clip whitespace-nowrap">
        <Priority code={todo.priorityCode} />
      </div>
      <div className="col-span-2 overflow-clip whitespace-nowrap">
        <DueDate dueDate={todo.dueAt} isOverdue={todo.isOverdue} />
      </div>
      <div className="col-span-1">
        <DropdownMenu
          trigger={
            <Icon
              name="ellipsis-vertical"
              className="ml-auto block w-4 rounded p-1 hover:bg-slate/20"
            />
          }
        >
          <DropdownMenuTitle>Actions</DropdownMenuTitle>
          <DropdownMenuLink
            to=""
            title="Delete Todo"
            onClick={() => setModalOptions({ modal: 'todoDelete', props: { todo } })}
          >
            Delete
          </DropdownMenuLink>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TodoListItem;
