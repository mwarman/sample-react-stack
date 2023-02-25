import storage from '../utils/storage';
import { generateId } from '../utils/id';
import { delay } from '../utils/delay';
import { validateSync } from '../utils/validation';
import { todoCreateSchema, todoUpdateSchema } from './validators/todos.api.validators';
import { StorageKeys } from '../utils/constants';

export const getTodos = async () => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const todos = storage.getJson(StorageKeys.Todos) || [];
        return resolve(todos);
      } catch (err) {
        return reject(err);
      }
    });
  });
};

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
