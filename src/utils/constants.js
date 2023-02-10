export const Statuses = [
  {
    ordinal: 10,
    category: 'todo',
    code: 'todo',
    value: 'To Do',
  },
  {
    ordinal: 20,
    category: 'in_progress',
    code: 'in_progress',
    value: 'In Progress',
  },
  {
    ordinal: 30,
    category: 'done',
    code: 'done',
    value: 'Done',
  },
];

export const Priorities = [
  {
    ordinal: 10,
    icon: 'angle-up',
    iconClassName: 'text-red-500',
    code: 'high',
    value: 'High',
  },
  {
    ordinal: 20,
    icon: 'minus',
    iconClassName: 'text-amber-300',
    code: 'medium',
    value: 'Medium',
  },
  {
    ordinal: 30,
    icon: 'angle-down',
    iconClassName: 'text-blue-500',
    code: 'low',
    value: 'Low',
  },
];

export const DateFormat = {
  DATE: 'MM/DD/YYYY',
  DATE_LONG: 'MMMM D, YYYY',
  DATETIME: 'MM/DD/YYYY h:mm A',
  DATETIME_LONG: 'MMMM D, YYYY [at] h:mm A',
};
