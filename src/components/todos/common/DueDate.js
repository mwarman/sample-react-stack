/**
 * The `DueDate` React component.
 * @module components/todos/common/DueDate
 */

import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DateTime from '../../common/dates/DateTime';

dayjs.extend(relativeTime);

/**
 * The `DueDate` component renders a styled `DateTime` component. Includes
 * custom text for the `title` attribute. Applies specific styling when the
 * considered _overdue_.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the element.
 * @param {(number|string)} props.dueDate The date represented as milliseconds or formatted string.
 * @param {boolean} [props.isOverdue] Indicates if the component should apply _overdue_ styles.
 * @param {*} [props....props] Any additional properties added to the element.
 * @returns {JSXElement} JSX
 * @example
 * <DueDate dueDate={todo.dueAt} isOverdue={todo.isOverdue} />
 */
const DueDate = ({ className, dueDate, isOverdue, ...props }) => {
  const title = isOverdue
    ? `Was due ${dayjs(dueDate).fromNow()}`
    : `Is due ${dayjs(dueDate).fromNow()}`;

  return (
    <DateTime
      date={dueDate}
      {...props}
      className={classNames(className, { 'text-red': isOverdue })}
      title={title}
    />
  );
};

export default DueDate;
