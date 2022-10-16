import bcrypt from 'bcryptjs';

import storage from '../utils/storage';
import { generateId } from '../utils/id';
import config from '../utils/config';
import { delay } from '../utils/delay';

export const signUp = async (account) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      const accounts = storage.getJson('accounts') || [];
      const existingAccount = accounts.find((a) => a.username === account.username);
      if (existingAccount) {
        return reject(new Error('Account exists for this username.'));
      }
      storage.setJson('accounts', [
        ...accounts,
        { ...account, id: generateId(), password: bcrypt.hashSync(account.password, 10) },
      ]);
      return resolve();
    });
  });
};

export const signIn = async (username, password) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      const accounts = storage.getJson('accounts') || [];
      const account = accounts.find((a) => a.username === username);
      if (!account) {
        return reject(new Error('Not found.'));
      }
      if (bcrypt.compareSync(password, account.password)) {
        const expiresAt = Date.now() + config.REACT_APP_AUTH_SESSION_EXPIRES_IN_MS;
        storage.setJson('auth-state', { id: account.id, expiresAt });
        return resolve(account);
      } else {
        return reject(new Error('Password mismatch.'));
      }
    });
  });
};

export const signOut = async () => {
  return new Promise((resolve) => {
    delay().then(() => {
      storage.removeItem('auth-state');
      return resolve();
    });
  });
};

export const getAuthState = async () => {
  return new Promise((resolve) => {
    delay().then(() => {
      const authState = storage.getJson('auth-state');
      if (authState) {
        const isAuthenticated = authState.expiresAt && authState.expiresAt > Date.now();
        return resolve({
          ...authState,
          isAuthenticated,
        });
      } else {
        return resolve({ isAuthenticated: false });
      }
    });
  });
};

export const getAccount = async (id) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      const accounts = storage.getJson('accounts') || [];
      const account = accounts.find((a) => a.id === id);
      if (account) {
        return resolve(account);
      }
      return reject(new Error('Not found.'));
    });
  });
};
