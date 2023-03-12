/**
 * The `Priority` React component.
 * @module components/todos/common/Priority
 */

import Icon from '../../common/icons/Icon';

import { Priorities } from '../../../utils/constants';

/**
 * The `Priority` component renders a styled block depicting a
 * priority value.
 * @function
 * @param {Object} props The component properties.
 * @param {string} props.code A priority `code` value.
 * @returns {JSXElement} JSX
 * @example
 * <Priority code='low' />
 */
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
