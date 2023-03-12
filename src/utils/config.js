/**
 * Configuration module.
 * @module utils/config
 */
/**
 * The Config object.
 * @typedef {Object} Config
 * @property {string} NODE_ENV - The node environment, e.g. 'development'.
 * @property {number} REACT_APP_API_DELAY_MS - Simulated API call time in milliseconds.
 * @property {number} REACT_APP_TOAST_AUTODISMISS_MS - Time a toast is displayed before autodismissal in milliseconds.
 * @property {number} REACT_APP_AUTH_SESSION_EXPIRES_IN_MS - The duration of an authenticated user session in milliseconds.
 */

import * as Yup from 'yup';

/**
 * The validation schema for Config.
 */
const configSchema = Yup.object({
  NODE_ENV: Yup.string().default('development'),
  REACT_APP_API_DELAY_MS: Yup.number().min(0).max(15000).default(2000),
  REACT_APP_TOAST_AUTODISMISS_MS: Yup.number().min(0).max(30000).default(5000),
  REACT_APP_AUTH_SESSION_EXPIRES_IN_MS: Yup.number().min(0).default(3600000),
});

/**
 * Validate application configuration and apply default values.
 */
const config = configSchema.validateSync(process.env, {
  abortEarly: false,
  stripUnknown: true,
});

/**
 * The application configuration.
 * @constant
 * @type Config
 */
export default config;
