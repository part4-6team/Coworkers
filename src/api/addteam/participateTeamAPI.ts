import { authAxiosInstance } from '@libs/axios/axiosInstance';

// 팀 참여하기 API 함수
export const postAcceptInvitation = async (
  userEmail: string,
  token: string
) => {
  const response = await authAxiosInstance.post('groups/accept-invitation', {
    userEmail,
    token,
  });
  return response.data;
};
