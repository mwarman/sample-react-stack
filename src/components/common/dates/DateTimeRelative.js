/**
 * The `DateTimeRelative` React component.
 * @module components/common/dates/DateTimeRelative
 */

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * The `DateTimeRelative` component renders a date or timestamp as a phrase
 * such as _a few seconds ago_ or _one hour until_.
 * @function
 * @param {Object} props The component properties.
 * @param {(number|string)} [props.date] The date represented as milliseconds or formatted string.
 * @param {string} [props.titleFormat] Optional `DateFormat` to use for the `title` property of the DOM element.
 * @param {*} [props....props] Any additional properties added to the wrapping DOM element.
 * @returns {JSXElement} JSX
 * @see {@link utils/constants/DateFormat}
 * @example
 * // <DateTimeRelative date="2023-03-04" titleFormat={DateFormat.DATE} />
 * // <DateTimeRelative date={todo.createdAt} titleFormat={DateFormat.DATETIME_LONG} className={font-bold} />
 */
const DateTimeRelative = ({ date, titleFormat, ...props }) => {
  if (!date) return null;

  const title = !!titleFormat ? dayjs(date).format(titleFormat) : null;

  return (
    <span {...props} title={title} data-testid="datetime-relative">
      {dayjs(date).fromNow()}
    </span>
  );
};

export default DateTimeRelative;
