/**
 * Constants module.
 * @module utils/constants
 */

/**
 * Enumeration of themes.
 * @enum {string}
 */
export const Themes = {
  Dark: 'dark',
  Light: 'light',
};

/**
 * Default preferences object.
 * @type Preferences
 * @see {@link api/preferences/Preferences}
 */
export const DEFAULT_PREFERENCES = {
  theme: Themes.Light,
};

/**
 * Default AuthState object.
 * @type AuthState
 * @see {@link api/auth/AuthState}
 */
export const DEFAULT_AUTH_STATE = {
  isAuthenticated: false,
};

/**
 * Enumeration of local storage keys.
 * @enum {string}
 */
export const StorageKeys = {
  Accounts: 'accounts',
  AuthState: 'auth.state',
  Preferences: 'preferences',
  Todos: 'todos',
};

/**
 * Enumeration of React Query cache keys.
 * @enum {string}
 */
export const QueryKeys = {
  Accounts: 'accounts',
  AuthState: 'authstate',
  Preferences: 'preferences',
  Todos: 'todos',
};

/**
 * Regular expressions.
 */
export const Expressions = {
  ISO8601_DATE: /^([0-9]{4})(-?)(1[0-2]|0[1-9])\2(3[01]|0[1-9]|[12][0-9])$/,
};

/**
 * The collection of Status values.
 */
export const Statuses = [
  {
    ordinal: 10,
    category: 'todo',
    code: 'todo',
    value: 'To Do',
  },
  {
    ordinal: 20,
    category: 'in_progress',
    code: 'in_progress',
    value: 'In Progress',
  },
  {
    ordinal: 30,
    category: 'done',
    code: 'done',
    value: 'Done',
  },
];

/**
 * The collection of Priority values.
 */
export const Priorities = [
  {
    ordinal: 10,
    icon: 'angle-down',
    iconClassName: 'text-blue',
    code: 'low',
    value: 'Low',
  },
  {
    ordinal: 20,
    icon: 'minus',
    iconClassName: 'text-amber-light',
    code: 'medium',
    value: 'Medium',
  },
  {
    ordinal: 30,
    icon: 'angle-up',
    iconClassName: 'text-red',
    code: 'high',
    value: 'High',
  },
];

/**
 * Date format expressions.
 */
export const DateFormat = {
  DATE: 'MM/DD/YYYY',
  DATE_LONG: 'MMMM D, YYYY',
  DATETIME: 'MM/DD/YYYY h:mm A',
  DATETIME_LONG: 'MMMM D, YYYY [at] h:mm A',
};
