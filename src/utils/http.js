import axios from "axios";

import { delay } from "../utils/delay";

const instance = axios.create({
  headers: {
    common: {
      Accept: "application/json",
    },
    post: {
      "Content-Type": "application/json",
    },
  },
});

instance.interceptors.response.use(async (response) => {
  await delay();
  return response;
});

export default instance;
