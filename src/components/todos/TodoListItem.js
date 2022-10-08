import { Link } from "react-router-dom";

const TodoListItem = ({ id, userId, title, completed }) => {
  return (
    <tr className="border-y border-slate-300 hover:bg-slate-200">
      <td className="px-2 py-1">
        <Link to={`/todos/${id}`} className="text-blue-500 hover:text-blue-700">
          {title}
        </Link>
      </td>
      <td className="px-2 py-1">{completed ? "done" : "not done"}</td>
      <td className="px-2 py-1">
        <Link
          to={`/users/${userId}`}
          className="text-blue-500 hover:text-blue-700"
        >
          User
        </Link>
      </td>
    </tr>
  );
};

export default TodoListItem;
