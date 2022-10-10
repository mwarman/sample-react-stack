import { Link } from "react-router-dom";

import Badge from "../common/Badge";
import UserName from "../users/UserName";

const TodoListItem = ({ id, userId, title, completed }) => {
  return (
    <tr className="border-y border-slate-300 hover:bg-slate-200">
      <td className="px-2 py-1">
        <Link to={`/todos/${id}`} className="hover:underline">
          {title}
        </Link>
      </td>
      <td className="px-2 py-1">
        {completed ? (
          <Badge type="success">DONE</Badge>
        ) : (
          <Badge>NOT STARTED</Badge>
        )}
      </td>
      <td className="px-2 py-1">
        <UserName userId={userId} />
      </td>
    </tr>
  );
};

export default TodoListItem;
