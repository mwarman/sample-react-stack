/**
 * HTTP utility module.
 * @module utils/http
 */

import axios from 'axios';

import config from '../utils/config';
import { delay } from '../utils/delay';

/**
 * The axios HTTP instance with global configuration applied.
 */
const instance = axios.create({
  headers: {
    common: {
      Accept: 'application/json',
    },
    post: {
      'Content-Type': 'application/json',
    },
  },
});

instance.interceptors.response.use(async (response) => {
  await delay(config.REACT_APP_API_DELAY_MS);
  return response;
});

export default instance;
