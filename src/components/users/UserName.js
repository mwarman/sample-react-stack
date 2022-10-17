import { Link } from 'react-router-dom';

import Placeholder from '../common/Placeholder';

import { useGetAccount } from '../../hooks/auth.hooks';

const UserName = ({ accountId }) => {
  const { data: account, status } = useGetAccount(accountId);

  if (status === 'loading') {
    return <Placeholder />;
  }

  return (
    <Link to={`/users/${account.id}`} className="hover:underline">
      {`${account.firstName} ${account.lastName}`}
    </Link>
  );
};

export default UserName;
