import * as Yup from 'yup';
import map from 'lodash/map';

import { Expressions, Priorities, Statuses } from '../utils/constants';

/**
 * Todo
 * * id
 * * summary
 * * description
 * * status
 * * priority
 * * dueAt
 * * assignee
 * * startedAt
 * * completedAt
 * * createdAt
 * * updatedAt
 */

/**
 * Todo validation schema
 */
export const todoSchema = Yup.object({
  summary: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
  description: Yup.string().max(1000, 'Must be 1000 characters or less'),
  status: Yup.string()
    .oneOf(map(Statuses, 'code'), 'Select a value from the list')
    .required('Required'),
  priority: Yup.string()
    .oneOf(map(Priorities, 'code'), 'Select a value from the list')
    .required('Required'),
  dueAt: Yup.string().matches(Expressions.ISO8601_DATE, {
    excludeEmptyString: true,
    message: 'Invalid date format',
  }),
});
