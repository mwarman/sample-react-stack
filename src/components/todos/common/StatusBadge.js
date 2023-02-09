import Badge from '../../common/badges/Badge';

const StatusBadge = ({ status, ...props }) => {
  const getVariant = (status) => {
    switch (status) {
      case 'in_progress':
        return 'primary';
      case 'done':
        return 'success';
      default:
        return '';
    }
  };

  return <Badge variant={getVariant(status)} {...props} />;
};

export default StatusBadge;
