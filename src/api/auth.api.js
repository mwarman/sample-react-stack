import bcrypt from 'bcryptjs';

import storage from '../utils/storage';
import { generateId } from '../utils/id';
import config from '../utils/config';
import { delay } from '../utils/delay';
import { DEFAULT_AUTH_STATE, StorageKeys } from '../utils/constants';

export const signUp = async (account) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      const accounts = storage.getJson(StorageKeys.Accounts) || [];
      const existingAccount = accounts.find((a) => a.username === account.username);
      if (existingAccount) {
        return reject(new Error('Account exists for this username.'));
      }
      storage.setJson(StorageKeys.Accounts, [
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
      const accounts = storage.getJson(StorageKeys.Accounts) || [];
      const account = accounts.find((a) => a.username === username);
      if (!account) {
        return reject(new Error('Not found.'));
      }
      if (bcrypt.compareSync(password, account.password)) {
        const expiresAt = Date.now() + config.REACT_APP_AUTH_SESSION_EXPIRES_IN_MS;
        storage.setJson(StorageKeys.AuthState, { id: account.id, expiresAt });
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
      storage.removeItem(StorageKeys.AuthState);
      return resolve();
    });
  });
};

export const getAuthState = async () => {
  return new Promise((resolve) => {
    const authState = storage.getJson(StorageKeys.AuthState);
    if (authState) {
      const isAuthenticated = authState.expiresAt && authState.expiresAt > Date.now();
      return resolve({
        ...authState,
        isAuthenticated,
      });
    } else {
      return resolve(DEFAULT_AUTH_STATE);
    }
  });
};

export const getAccount = async (id) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      const accounts = storage.getJson(StorageKeys.Accounts) || [];
      const account = accounts.find((a) => a.id === id);
      if (account) {
        return resolve(account);
      }
      return reject(new Error('Not found.'));
    });
  });
};
