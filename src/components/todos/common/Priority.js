import Icon from '../../common/icons/Icon';

import { Priorities } from '../../../utils/constants';

const Priority = ({ code }) => {
  const priority = Priorities.find((p) => p.code === code);
  if (!priority) throw new Error(`Invalid priority code: ${code}`);

  return (
    <div className="flex items-center">
      <Icon name={priority.icon} fixedWidth className={priority.iconClassName} />
      <div className="ml-2">{priority.value}</div>
    </div>
  );
};

export default Priority;
