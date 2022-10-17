import { useGetAccount } from '../../hooks/auth.hooks';

import UserName from '../users/UserName';
import Mention from '../common/Mention';

const TodoUser = ({ accountId }) => {
  const { data: account, status } = useGetAccount(accountId);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-2 font-bold text-slate-700">User Details:</div>
      <div>
        <span className="mr-2">
          <UserName accountId={account.id} />
        </span>
        <Mention name={`${account.firstName} ${account.lastName}`} />
      </div>
    </div>
  );
};

export default TodoUser;
