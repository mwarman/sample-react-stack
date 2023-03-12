/**
 * The `StatusField` React component.
 * @module components/todos/common/StatusField
 */

import CustomSelectField from '../../common/forms/CustomSelectField';
import StatusBadge from './StatusBadge';

import { Statuses } from '../../../utils/constants';

/**
 * The `StatusField` component renders a custom dropdown selector for a `Status` value
 * input.
 * @function
 * @param {Object} props The component properties.
 * @param {*} [props....props] Any additional properties added to the field element.
 * @returns {JSXElement} JSX
 * @example
 * <StatusField id="statusCode" name="statusCode" disabled={formik.isSubmitting} />
 */
const StatusField = ({ ...props }) => {
  return (
    <CustomSelectField
      name="status"
      options={Statuses.map((status) => ({
        value: status.code,
        label: <StatusBadge code={status.code} />,
      }))}
      {...props}
    />
  );
};

export default StatusField;
