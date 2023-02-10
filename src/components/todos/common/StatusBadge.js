import Badge from '../../common/badges/Badge';

import { Statuses } from '../../../utils/constants';

const StatusBadge = ({ code, ...props }) => {
  const status = Statuses.find((s) => s.code === code);
  if (!status) throw new Error(`Invalid status code: ${code}`);

  const getVariant = (categoryCode) => {
    switch (categoryCode) {
      case 'in_progress':
        return 'primary';
      case 'done':
        return 'success';
      default:
        return '';
    }
  };

  return (
    <Badge variant={getVariant(status.category)} {...props}>
      {status.value}
    </Badge>
  );
};

export default StatusBadge;
