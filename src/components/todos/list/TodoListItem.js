import { Link } from 'react-router-dom';

import Badge from '../../common/Badge';
import UserName from '../../users/UserName';
import DropdownMenu from '../../common/menus/DropdownMenu';
import DropdownMenuLink from '../../common/menus/DropdownMenuLink';
import DropdownMenuTitle from '../../common/menus/DropdownMenuTitle';
import Icon from '../../common/icons/Icon';

const TodoListItem = ({ id, accountId, title, completed, createdAt, updatedAt }) => {
  return (
    <tr className="border-y border-slate-300 hover:bg-slate-200">
      <td className="px-2 py-1">
        <Link to={`/todos/${id}`} className="hover:underline">
          {title}
        </Link>
      </td>
      <td className="px-2 py-1">
        {completed ? <Badge type="success">DONE</Badge> : <Badge>NOT STARTED</Badge>}
      </td>
      <td className="px-2 py-1">
        <UserName accountId={accountId} />
      </td>
      <td>
        <DropdownMenu trigger={<Icon name="ellipsis-vertical" className="text-slate-700" />}>
          <DropdownMenuTitle>Actions</DropdownMenuTitle>
          <DropdownMenuLink to="/todos" title="Delete Todo">
            Delete
          </DropdownMenuLink>
        </DropdownMenu>
      </td>
    </tr>
  );
};

export default TodoListItem;
