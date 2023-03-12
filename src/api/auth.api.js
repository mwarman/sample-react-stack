/**
 * Authentication API module.
 * @module api/auth
 */
/**
 * The Account object.
 * @typedef {Object} Account
 * @property {string} id - The account identifier.
 * @property {string} firstName - The accountholder's first name.
 * @property {string} lastName - The accountholder's last name.
 * @property {string} username - Authentication credentials. The username.
 * @property {string} password - Authentication credentials. The password.
 */
/**
 * The AuthState object.
 * @typedef {Object} AuthState
 * @property {string|null} id - The account identifier of the currently authenticated user.
 * @property {number|null} expiresAt - The authenticated session expiration timestamp in milliseconds.
 * @property {boolean} isAuthenticated - Indicates if a user is currently authenticated.
 */

import storage from '../utils/storage';
import { generateId } from '../utils/id';
import config from '../utils/config';
import { delay } from '../utils/delay';
import { DEFAULT_AUTH_STATE, StorageKeys } from '../utils/constants';

/**
 * Simple simulation of one-way password hashing which should
 * occur on the server side.
 * @param {string} pass Clear text password.
 * @returns {string} Hashed password.
 */
const hashPassword = (pass) => {
  return btoa(pass);
};

/**
 * Simple simulation of password matching algorithm  which should
 * occur on the server side.
 * @param {string} pass Clear text password.
 * @param {string} passHash Hashed password.
 * @returns {boolean} Returns `true` if the password matches the hashed value; otherwise,
 * returns `false`.
 */
const isPasswordMatch = (pass, passHash) => {
  return hashPassword(pass) === passHash;
};

/**
 * Register a new user. Create an Account.
 * @function
 * @async
 * @param {Account} account An Account object.
 * @returns {Promise<void>} Returns a Promise which resolves to empty if
 * successful; otherwise, rejects with an error.
 */
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
        { ...account, id: generateId(), password: hashPassword(account.password) },
      ]);
      return resolve();
    });
  });
};

/**
 * Authenticates a user using their credentials. Returns the user's Account
 * if successful. Throws an error if unsuccessful.
 * @function
 * @async
 * @param {string} username A username.
 * @param {string} password A password.
 * @returns {Promise<Account>} Returns a Promise which resolves to the user's Account if successful;
 * otherwise rejects with an Error.
 */
export const signIn = async (username, password) => {
  return new Promise((resolve, reject) => {
    delay().then(() => {
      const accounts = storage.getJson(StorageKeys.Accounts) || [];
      const account = accounts.find((a) => a.username === username);
      if (!account) {
        return reject(new Error('Not found.'));
      }
      if (isPasswordMatch(password, account.password)) {
        const expiresAt = Date.now() + config.REACT_APP_AUTH_SESSION_EXPIRES_IN_MS;
        storage.setJson(StorageKeys.AuthState, { id: account.id, expiresAt });
        return resolve(account);
      } else {
        return reject(new Error('Password mismatch.'));
      }
    });
  });
};

/**
 * Signs out the currently authenticated user, removing their authentication
 * session.
 * @function
 * @async
 * @returns {Promise<void>} Returns a Promise which resolves to empty if
 * successful; otherwise rejects with an Error.
 */
export const signOut = async () => {
  return new Promise((resolve) => {
    delay().then(() => {
      storage.removeItem(StorageKeys.AuthState);
      return resolve();
    });
  });
};

/**
 * Returns the authentication state for the current user.
 * @function
 * @async
 * @returns {Promise<AuthState>} Returns a Promise which resolves to the authentication state
 * object if successful; otherwise, rejects with an Error.
 */
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

/**
 * Returns the Account for the supplied Account `id`.
 * @function
 * @async
 * @param {string} id An Account identifier.
 * @returns {Promise<Account>} Returns a Promise which resolves to the Account if found;
 * otherwise, rejects with an Error.
 */
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
