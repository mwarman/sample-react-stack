import orderBy from 'lodash/orderBy';

import CustomSelectField from '../../common/forms/CustomSelectField';
import Priority from './Priority';

import { Priorities } from '../../../utils/constants';

const PriorityField = ({ ...props }) => {
  const sortedPriorities = orderBy(Priorities, ['ordinal'], ['desc']);

  return (
    <CustomSelectField
      name="priority"
      options={sortedPriorities.map((priority) => ({
        value: priority.code,
        label: <Priority code={priority.code} />,
      }))}
      {...props}
    />
  );
};

export default PriorityField;
