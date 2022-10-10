import { useQuery } from "@tanstack/react-query";

import { getUser, getUsers } from "../api/users.api";

const QueryKeys = {
  Users: "users",
};

export const useGetUsers = (options) => {
  return useQuery([QueryKeys.Users], getUsers, options);
};

export const useGetUser = (id, options) => {
  return useQuery([QueryKeys.Users, id], () => getUser(id), options);
};
