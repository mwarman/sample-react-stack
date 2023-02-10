import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { DateFormat } from '../../../utils/constants';

dayjs.extend(relativeTime);

const DateTimeRelative = ({ date, titleFormat, ...props }) => {
  if (!date) return null;

  const title = !!titleFormat ? dayjs(date).format(titleFormat) : null;

  return (
    <span {...props} title={title}>
      {dayjs(date).fromNow()}
    </span>
  );
};

export default DateTimeRelative;
