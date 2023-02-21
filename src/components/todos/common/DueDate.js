import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DateTime from '../../common/dates/DateTime';

dayjs.extend(relativeTime);

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
