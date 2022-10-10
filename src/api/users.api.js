import axios from "axios";

export const getUsers = async () => {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  }).then((response) => {
    return response.data;
  });
};

export const getUser = async (id) => {
  return axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  }).then((response) => {
    return response.data;
  });
};
