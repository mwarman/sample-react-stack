import CustomSelectField from '../../common/forms/CustomSelectField';
import StatusBadge from './StatusBadge';

import { Statuses } from '../../../utils/constants';

const StatusField = ({ ...props }) => {
  return (
    <CustomSelectField
      name="status"
      options={Statuses.map((status) => ({
        value: status.code,
        label: <StatusBadge key={status.code} code={status.code} />,
      }))}
      {...props}
    />
  );
};

export default StatusField;
