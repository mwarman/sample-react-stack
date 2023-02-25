import * as Yup from 'yup';
import map from 'lodash/map';

import { Expressions, Priorities, Statuses } from '../../utils/constants';

/**
 * Create todo API validation schema
 */
export const todoCreateSchema = Yup.object({
  summary: Yup.string()
    .max(100, 'Summary must be less than 100 characters')
    .required('Summary is required'),
  description: Yup.string().max(1000, 'Description must be less than 1000 characters'),
  statusCode: Yup.string().oneOf(map(Statuses, 'code'), 'Invalid status code').default('todo'),
  priorityCode: Yup.string()
    .oneOf(map(Priorities, 'code'), 'Invalid priority code')
    .default('medium'),
  dueAt: Yup.string()
    .matches(Expressions.ISO8601_DATE, {
      excludeEmptyString: true,
      message: 'Invalid date format',
    })
    .default(''),
  assigneeId: Yup.string().required('Assignee is required'),
});

/**
 * Update todo API validation schema
 */
export const todoUpdateSchema = Yup.object({
  summary: Yup.string()
    .max(100, 'Summary must be less than 100 characters')
    .required('Summary is required'),
  description: Yup.string().max(1000, 'Description must be less than 1000 characters'),
  statusCode: Yup.string()
    .oneOf(map(Statuses, 'code'), 'Invalid status code')
    .required('Status is required'),
  priorityCode: Yup.string()
    .oneOf(map(Priorities, 'code'), 'Invalid priority code')
    .required('Priority is required'),
  dueAt: Yup.string()
    .matches(Expressions.ISO8601_DATE, {
      excludeEmptyString: true,
      message: 'Invalid date format',
    })
    .default(''),
  assigneeId: Yup.string().required('Assignee is required'),
  id: Yup.string().required('Todo ID is required'),
  createdAt: Yup.string().required('Created timestamp is required'),
  updatedAt: Yup.string(),
});
