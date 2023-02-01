import { Link } from 'react-router-dom';

import Badge from '../../common/Badge';
import UserName from '../../users/UserName';
import DropdownMenu from '../../common/menus/DropdownMenu';
import DropdownMenuLink from '../../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../../common/menus/DropdownMenuTitle';
import Icon from '../../common/icons/Icon';

const TodoListItem = ({ todo }) => {
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
          trigger={<Icon name="ellipsis-vertical" className="ml-auto block text-slate-700" />}
        >
          <DropdownMenuTitle>Actions</DropdownMenuTitle>
          <DropdownMenuLink to="/todos" title="Delete Todo">
            Delete
          </DropdownMenuLink>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TodoListItem;
