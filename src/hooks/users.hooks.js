import { useQuery } from '@tanstack/react-query';

import { getUser, getUsers } from '../api/users.api';
import { QueryKeys } from '../utils/constants';

export const useGetUsers = (options) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.Users],
    queryFn: getUsers,
  });
};

export const useGetUser = (id, options) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.Users, id],
    queryFn: () => getUser(id),
  });
};
