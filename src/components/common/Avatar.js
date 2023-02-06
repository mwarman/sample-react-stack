import classNames from 'classnames';

import { useGetAccount, useAuthState } from '../../hooks/auth.hooks';

const colorOptions = {
  blue: 'bg-blue-500 text-white',
  green: 'bg-lime-600 text-white',
  orange: 'bg-orange-500 text-white',
  purple: 'bg-violet-600 text-white',
  red: 'bg-red-600 text-white',
  slate: 'bg-slate-500 text-white',
  yellow: 'bg-yellow-400 text-white',
};

const getColorClasses = (name) => {
  const colors = Object.keys(colorOptions);
  const color = colorOptions[colors[name.length % colors.length]];
  return color;
};

const Avatar = ({ className }) => {
  const { data: authState } = useAuthState();
  const { data: account, status } = useGetAccount(authState.id, {
    enabled: !!authState.id,
  });

  if (status === 'success') {
    const colorClasses = getColorClasses(account.firstName + account.lastName);

    return (
      <div
        className={classNames(
          'flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold uppercase',
          colorClasses,
          className,
        )}
        title={`${account.firstName} ${account.lastName}`}
      >
        <span>{account.firstName.charAt(0)}</span>
      </div>
    );
  }

  return null;
};

export default Avatar;
