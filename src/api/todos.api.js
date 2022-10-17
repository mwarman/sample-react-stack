import storage from '../utils/storage';
import { generateId } from '../utils/id';
import { delay } from '../utils/delay';

export const getTodos = async () => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const todos = storage.getJson('todos') || [];
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
        const todos = storage.getJson('todos') || [];
        const todo = todos.find((t) => t.id === id);
        if (todo) {
          resolve(todo);
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
        const todos = storage.getJson('todos') || [];
        const createdTodo = {
          ...todo,
          id: generateId(),
          createdAt: new Date().toISOString(),
        };
        storage.setJson('todos', [...todos, createdTodo]);
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
        const todos = storage.getJson('todos') || [];
        const todoToUpdate = todos.find((t) => t.id === todo.id);
        if (!todoToUpdate) {
          return reject(new Error('Not found.'));
        }

        const updatedTodo = {
          ...todoToUpdate,
          ...todo,
          updatedAt: new Date().toISOString(),
        };

        storage.setJson(
          'todos',
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

export const removeTodo = async (id) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      try {
        const todos = storage.getJson('todos') || [];
        storage.setJson(
          'todos',
          todos.filter((t) => t.id !== id),
        );
        return resolve();
      } catch (err) {
        return reject(err);
      }
    });
  });
};
