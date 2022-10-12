import Placeholder from "../common/Placeholder";

const TodoListItemLoading = () => {
  return (
    <tr className="border-y border-slate-300 hover:bg-slate-200">
      <td className="w-1/2 px-2 py-2">
        <Placeholder />
      </td>
      <td className="w-1/4 px-2 py-2">
        <Placeholder />
      </td>
      <td className="w-1/4 px-2 py-2">
        <Placeholder />
      </td>
    </tr>
  );
};

export default TodoListItemLoading;
