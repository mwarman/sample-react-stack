import { Link } from 'react-router-dom';

import StatusBadge from '../../common/badges/StatusBadge';
import PriorityBadge from '../../common/badges/PriorityBadge';
import UserName from '../../users/UserName';
import DropdownMenu from '../../common/menus/DropdownMenu';
import DropdownMenuLink from '../../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../../common/menus/DropdownMenuTitle';
import Icon from '../../common/icons/Icon';

import { useModalContext } from '../../../hooks/modal.hooks';
import { Priorities, Statuses } from '../../../utils/constants';

const TodoListItem = ({ todo }) => {
  const { setModalOptions } = useModalContext();

  return (
    <div className="grid grid-cols-12 items-center gap-4 p-2 hover:bg-slate-200/40">
      <div className="col-span-5">
        <Link to={`/todos/${todo.id}`} className="hover:underline">
          {todo.summary}
        </Link>
      </div>
      <div className="col-span-2">
        <StatusBadge status={todo.status}>
          <span className="uppercase">{Statuses.find((s) => s.code === todo.status).value}</span>
        </StatusBadge>
      </div>
      <div className="col-span-2">
        <PriorityBadge priority={todo.priority}>
          <span className="uppercase">
            {Priorities.find((p) => p.code === todo.priority).value}
          </span>
        </PriorityBadge>
      </div>
      <div className="col-span-2">
        <UserName accountId={todo.assignee} />
      </div>
      <div className="col-span-1">
        <DropdownMenu
          trigger={
            <Icon
              name="ellipsis-vertical"
              className="ml-auto block w-4 rounded p-1 text-slate-700 hover:bg-slate-200/60"
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
