import http from "../utils/http";

export const getTodos = async () => {
  return http({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  }).then((response) => {
    return response.data;
  });
};

export const getTodo = async (id) => {
  return http({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  }).then((response) => {
    return response.data;
  });
};

export const createTodo = async (todo) => {
  return http({
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
