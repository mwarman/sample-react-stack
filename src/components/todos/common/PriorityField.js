import CustomSelectField from '../../common/forms/CustomSelectField';
import Priority from './Priority';

import { Priorities } from '../../../utils/constants';

const PriorityField = ({ ...props }) => {
  return (
    <CustomSelectField
      name="priority"
      options={Priorities.map((priority) => ({
        value: priority.code,
        label: <Priority code={priority.code} />,
      }))}
      {...props}
    />
  );
};

export default PriorityField;
