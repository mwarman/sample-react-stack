import { Link } from "react-router-dom";

import Placeholder from "../common/Placeholder";

import { useGetUser } from "../../hooks/users.hooks";

const UserName = ({ userId }) => {
  const { data: user, status } = useGetUser(userId);

  if (status === "loading") {
    return <Placeholder />;
  }

  return (
    <Link to={`/users/${user.id}`} className="hover:underline">
      {user.name}
    </Link>
  );
};

export default UserName;
