import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DateTime from '../../common/dates/DateTime';

dayjs.extend(relativeTime);

const DueDate = ({ className, date, ...props }) => {
  const isOverdue = dayjs().isAfter(dayjs(date), 'day');
  const title = isOverdue ? `Was due ${dayjs(date).fromNow()}` : `Is due ${dayjs(date).fromNow()}`;

  return (
    <DateTime
      date={date}
      {...props}
      className={classNames(className, { 'text-red-500': isOverdue })}
      title={title}
    />
  );
};

export default DueDate;
