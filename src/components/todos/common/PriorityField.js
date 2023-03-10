/**
 * The `PriorityField` React component.
 * @module components/todos/common/PriorityField
 */

import orderBy from 'lodash/orderBy';

import CustomSelectField from '../../common/forms/CustomSelectField';
import Priority from './Priority';

import { Priorities } from '../../../utils/constants';

/**
 * The `PriorityField` component renders a custom dropdown selector for `Priority` value
 * input.
 * @function
 * @param {Object} props The component properties.
 * @param {*} [props....props] Any additional properties added to the field element.
 * @returns {JSXElement} JSX
 * @example
 * <PriorityField disabled={formik.isSubmitting} />
 */
const PriorityField = ({ ...props }) => {
  const sortedPriorities = orderBy(Priorities, ['ordinal'], ['desc']);

  return (
    <CustomSelectField
      name="priorityCode"
      options={sortedPriorities.map((priority) => ({
        value: priority.code,
        label: <Priority code={priority.code} />,
      }))}
      {...props}
    />
  );
};

export default PriorityField;
