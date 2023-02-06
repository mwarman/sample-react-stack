import { Link } from 'react-router-dom';

import Badge from '../../common/Badge';
import UserName from '../../users/UserName';
import DropdownMenu from '../../common/menus/DropdownMenu';
import DropdownMenuLink from '../../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../../common/menus/DropdownMenuTitle';
import Icon from '../../common/icons/Icon';

import { useModalContext } from '../../../hooks/modal.hooks';

const TodoListItem = ({ todo }) => {
  const { setModalOptions } = useModalContext();

  return (
    <div className="grid grid-cols-12 items-center gap-4 p-2 hover:bg-slate-200/40">
      <div className="col-span-7">
        <Link to={`/todos/${todo.id}`} className="hover:underline">
          {todo.title}
        </Link>
      </div>
      <div className="col-span-2">
        {todo.completed ? <Badge type="success">DONE</Badge> : <Badge>NOT STARTED</Badge>}
      </div>
      <div className="col-span-2">
        <UserName accountId={todo.accountId} />
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
            to="/todos"
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
