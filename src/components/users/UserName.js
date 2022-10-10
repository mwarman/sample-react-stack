import { Link } from "react-router-dom";

import { useGetUser } from "../../hooks/users.hooks";

const UserName = ({ userId }) => {
  const { data: user, status } = useGetUser(userId);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  return (
    <Link to={`/users/${user.id}`} className="hover:underline">
      {user.name}
    </Link>
  );
};

export default UserName;
