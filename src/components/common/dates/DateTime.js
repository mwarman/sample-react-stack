/**
 * The `DateTime` React component.
 * @module components/common/dates/DateTime
 */

import dayjs from 'dayjs';

import { DateFormat } from '../../../utils/constants';

/**
 * The `DateTime` component renders a formatted date or timestamp.
 * @function
 * @param {Object} props The component properties.
 * @param {(number|string)} [props.date] The date represented as milliseconds or formatted string.
 * @param {string} [props.format=DateFormat.DATE] The date format patter.
 * @param {*} [props....props] Any additional properties added to the wrapping `span`.
 * @returns {JSXElement} JSX
 * @see {@link utils/constants/DateFormat}
 * @example
 * // <DateTime date="2023-03-04" format={DateFormat.DATE} />
 * // <DateTime date="2023-03-04" format={DateFormat.DATE} className="text-red-dark" />
 */
const DateTime = ({ date, format = DateFormat.DATE, ...props }) => {
  if (!date) return null;

  return (
    <span {...props} data-testid="datetime">
      {dayjs(date).format(format)}
    </span>
  );
};

export default DateTime;
