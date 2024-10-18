import { authAxiosInstance } from '@libs/axios/axiosInstance';

export const fetchTask = async () => {
  const response = await authAxiosInstance.get('user/history');
  return response.data;
};

export const deleteTask = async (id: number) => {
  await authAxiosInstance.delete(`groups/{groupId}/task-lists/${id}`);
};
