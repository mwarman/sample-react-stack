import dayjs from 'dayjs';

import { DateFormat } from '../../../utils/constants';

const DateTime = ({ date, format = DateFormat.DATE, ...props }) => {
  if (!date) return null;

  return <span {...props}>{dayjs(date).format(format)}</span>;
};

export default DateTime;
