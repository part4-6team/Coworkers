import { authAxiosInstance } from '@libs/axios/axiosInstance';

// 멤버 데이터를 삭제하는 API 함수
export const deleteMemberById = async (id: string, memberUserID: number) => {
  const response = await authAxiosInstance.delete(
    `groups/${id}/member/${memberUserID}`
  );
  return response.data;
};

// 초대용 토큰을 불러오는 API함수
export const inviteMember = async (groupId: number) => {
  const response = await authAxiosInstance.get(`groups/${groupId}/invitation`);
  return response.data;
};
