/**
 * The `StatusBadge` React component.
 * @module components/todos/common/StatusBadge
 */

import Badge from '../../common/badges/Badge';

import { Statuses } from '../../../utils/constants';

/**
 * The `StatusBadge` component renders a `Badge` for a specific todo status.
 * @function
 * @param {Object} props The component properties.
 * @param {string} props.code A status code.
 * @param {*} [props....props] Any additional properties added to the badge element.
 * @returns {JSXElement} JSX
 * @example
 * <StatusBadge code='done' />
 */
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
