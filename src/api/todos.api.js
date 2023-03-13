/**
 * Todo API module.
 * @module api/todo
 */
/**
 * The Todo object.
 * @typedef {Object} Todo
 * @property {string} id - The todo identifier.
 * @property {string} summary - A brief description, or title.
 * @property {string} [description] - Optional. The detailed description.
 * @property {string} statusCode - A status code, e.g. 'done'.
 * @property {string} priorityCode - A priority code, e.g. 'medium'.
 * @property {string} [dueAt] - Optional. A due date.
 * @property {string} assigneeId - The account identifier of of the assignee.
 * @property {string} createdAt - The creation timestamp. ISO8601 format.
 * @property {string} updatedAt - The last updated timestamp. ISO8601 format.
 */

import filter from 'lodash/filter';

import storage from '../utils/storage';
import { generateId } from '../utils/id';
import { delay } from '../utils/delay';
import { validateSync } from '../utils/validation';
import { todoCreateSchema, todoUpdateSchema } from './validators/todos.api.validators';
import { StorageKeys } from '../utils/constants';

/**
 * Fetch all Todos by assignee.
 * @function
 * @async
 * @param {string} assigneeId The userId assigned to the Todo.
 * @returns {Promise<Todo[]>} Returns a Promise which resolves to a collection
 * of Todos if successful; otherwise, rejects with an error.
 */
export const getTodos = async (assigneeId) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const allTodos = storage.getJson(StorageKeys.Todos) || [];
        const todos = filter(allTodos, { assigneeId });
        return resolve(todos);
      } catch (err) {
        return reject(err);
      }
    });
  });
};

/**
 * Fetch a single Todo by `id`.
 * @function
 * @async
 * @param {string} id A Todo identifier.
 * @returns {Promise<Todo|null>} Returns a Promise which resolves to a Todo if
 * found, `null` if not found; otherwise rejects with an error.
 */
export const getTodo = async (id) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const todos = storage.getJson(StorageKeys.Todos) || [];
        const todo = todos.find((t) => t.id === id);
        if (todo) {
          return resolve(todo);
        }
        return reject(new Error('Not found.'));
      } catch (err) {
        return reject(err);
      }
    });
  });
};

/**
 * Create and persist a new Todo.
 * @function
 * @async
 * @param {Todo} todo The Todo to be created.
 * @returns {Promise<Todo>} Returns a Promise which resolves to the created
 * Todo if successful; otherwise, rejects with an error.
 */
export const createTodo = async (todo) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const validatedTodo = validateSync(todoCreateSchema, todo);
        const todos = storage.getJson(StorageKeys.Todos) || [];
        const now = new Date().toISOString();
        const createdTodo = {
          ...validatedTodo,
          id: generateId(),
          createdAt: now,
          updatedAt: now,
        };
        storage.setJson(StorageKeys.Todos, [...todos, createdTodo]);
        return resolve(createdTodo);
      } catch (err) {
        return reject(err);
      }
    });
  });
};

/**
 * Update and persist changes to a Todo.
 * @function
 * @async
 * @param {Todo} todo The Todo containing updated values.
 * @returns {Promise<Todo>} Returns a Promise which resolves to the updated
 * Todo if successful; otherwise, rejects with an error.
 */
export const updateTodo = async (todo) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const validatedTodo = validateSync(todoUpdateSchema, todo);
        const todos = storage.getJson(StorageKeys.Todos) || [];
        const todoToUpdate = todos.find((t) => t.id === todo.id);
        if (!todoToUpdate) {
          return reject(new Error('Not found.'));
        }

        const updatedTodo = {
          ...todoToUpdate,
          ...validatedTodo,
          updatedAt: new Date().toISOString(),
        };

        storage.setJson(
          StorageKeys.Todos,
          todos.map((t) => {
            if (t.id === updatedTodo.id) {
              return updatedTodo;
            }
            return t;
          }),
        );
        return resolve(updatedTodo);
      } catch (err) {
        return reject(err);
      }
    });
  });
};

/**
 * Delete the Todo matching the supplied `id`.
 * @function
 * @async
 * @param {string} id A Todo `id`.
 * @returns {Promise<void>} Returns a Promise which resolves to empty if
 * successful; otherwise, rejects with an error.
 */
export const deleteTodo = async (id) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const todos = storage.getJson(StorageKeys.Todos) || [];
        storage.setJson(
          StorageKeys.Todos,
          todos.filter((t) => t.id !== id),
        );
        return resolve();
      } catch (err) {
        return reject(err);
      }
    });
  });
};
