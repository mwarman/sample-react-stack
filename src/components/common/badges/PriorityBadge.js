import Badge from '../Badge';

const PriorityBadge = ({ priority, ...props }) => {
  const getVariant = (priority) => {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      default:
        return '';
    }
  };

  return <Badge variant={getVariant(priority)} {...props} />;
};

export default PriorityBadge;
