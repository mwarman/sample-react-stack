/**
 * Todo form validation schemas.
 * @module validators/todo
 */

import * as Yup from 'yup';
import map from 'lodash/map';

import { Expressions, Priorities, Statuses } from '../utils/constants';

/**
 * Validation schema for Todo create and update form submission.
 */
export const todoSchema = Yup.object({
  summary: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
  description: Yup.string().max(1000, 'Must be 1000 characters or less'),
  statusCode: Yup.string()
    .oneOf(map(Statuses, 'code'), 'Select a value from the list')
    .required('Required'),
  priorityCode: Yup.string()
    .oneOf(map(Priorities, 'code'), 'Select a value from the list')
    .required('Required'),
  dueAt: Yup.string().matches(Expressions.ISO8601_DATE, {
    excludeEmptyString: true,
    message: 'Invalid date format',
  }),
});
