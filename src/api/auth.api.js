import storage from "../utils/storage";
import { generateId } from "../utils/id";
import config from "../utils/config";

export const signUp = async (account) => {
  return new Promise((resolve, reject) => {
    const accounts = storage.getJson("accounts") || [];
    const existingAccount = accounts.find(
      (a) => a.username === account.username
    );
    if (existingAccount) {
      return reject("Duplicate username");
    }
    storage.setJson("accounts", [
      ...accounts,
      { id: generateId(), ...account },
    ]);
    return resolve();
  });
};

export const signIn = async (username, password) => {
  return new Promise((resolve, reject) => {
    const accounts = storage.getJson("accounts") || [];
    const account = accounts.find((a) => a.username === username);
    if (!account) {
      return reject("Not found");
    }
    if (account.password === password) {
      const expiresAt =
        Date.now() + config.REACT_APP_AUTH_SESSION_EXPIRES_IN_MS;
      storage.setJson("auth-state", { id: account.id, expiresAt });
      return resolve(account);
    } else {
      return reject("Password mismatch");
    }
  });
};

export const signOut = async () => {
  return new Promise((resolve) => {
    storage.removeItem("auth-state");
    resolve();
  });
};
