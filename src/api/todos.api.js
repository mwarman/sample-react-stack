import axios from "axios";

export const getTodos = async () => {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  }).then((response) => {
    return response.data;
  });
};

export const getTodo = async (id) => {
  return axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  }).then((response) => {
    return response.data;
  });
};

export const createTodo = async (todo) => {
  return axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    headers: {
      "Content-Type": "application/json",
    },
    data: todo,
  }).then((response) => {
    return response.data;
  });
};
