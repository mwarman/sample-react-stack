import http from "../utils/http";

export const getUsers = async () => {
  return http({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  }).then((response) => {
    return response.data;
  });
};

export const getUser = async (id) => {
  return http({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  }).then((response) => {
    return response.data;
  });
};
