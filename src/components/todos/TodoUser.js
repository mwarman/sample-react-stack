import { useGetUser } from "../../hooks/users.hooks";

import UserName from "../users/UserName";
import Mention from "../common/Mention";

const TodoUser = ({ userId }) => {
  const { data: user, status } = useGetUser(userId);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-2 font-bold text-slate-700">User Details:</div>
      <div>
        <span className="mr-2">
          <UserName userId={user.id} />
        </span>
        <Mention name={user.username} />
      </div>
    </div>
  );
};

export default TodoUser;
