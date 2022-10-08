import axios from 'axios';

export const getTodos = async () => {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
  }).then((response) => {
    return response.data;
  });
};
