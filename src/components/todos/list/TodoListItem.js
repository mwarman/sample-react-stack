import { Link } from 'react-router-dom';

import StatusBadge from '../common/StatusBadge';
import Priority from '../common/Priority';
import UserName from '../../users/UserName';
import DueDate from '../common/DueDate';
import DropdownMenu from '../../common/menus/DropdownMenu';
import DropdownMenuLink from '../../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../../common/menus/DropdownMenuTitle';
import Icon from '../../common/icons/Icon';

import { useModalContext } from '../../../hooks/modal.hooks';

const TodoListItem = ({ todo }) => {
  const { setModalOptions } = useModalContext();

  return (
    <div className="grid grid-cols-12 items-center gap-4 p-2 hover:bg-slate-200/40 dark:hover:bg-slate-800/40">
      <div className="col-span-6 overflow-clip whitespace-nowrap">
        <Link to={`/todos/${todo.id}`} title="Edit Todo" className="hover:underline">
          {todo.summary}
        </Link>
      </div>
      <div className="col-span-1 overflow-clip whitespace-nowrap">
        <StatusBadge code={todo.statusCode} />
      </div>
      <div className="col-span-1 overflow-clip whitespace-nowrap">
        <Priority code={todo.priorityCode} />
      </div>
      <div className="col-span-2 overflow-clip whitespace-nowrap">
        <UserName accountId={todo.assigneeId} />
      </div>
      <div className="col-span-1 overflow-clip whitespace-nowrap">
        <DueDate dueDate={todo.dueAt} isOverdue={todo.isOverdue} />
      </div>
      <div className="col-span-1">
        <DropdownMenu
          trigger={
            <Icon
              name="ellipsis-vertical"
              className="ml-auto block w-4 rounded p-1 hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
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
