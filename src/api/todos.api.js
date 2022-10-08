import axios from 'axios';

export const getTodos = async () => {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
  }).then((response) => {
    return response.data;
  });
};

export const getTodo = async (id) => {
  return axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  }).then((response) => {
    return response.data;
  });
};
