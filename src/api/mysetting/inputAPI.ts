import { authAxiosInstance } from '@libs/axios/axiosInstance';
import {
  UserPassword,
  UserPasswordCheck,
} from '@/src/types/mysetting/settingData';

// 계정설정 페이지의 프로필이미지, 이름, 이메일 가져옴
export const fetchUserData = async () => {
  const response = await authAxiosInstance.get('user');
  return response.data;
};

// 프로필 이미지 변경
export const fetchProfileImage = async () => {
  const response = await authAxiosInstance.patch('user');
  return response.data;
};

// 회원탈퇴 api
export const fetchDeletUser = async () => {
  const response = await authAxiosInstance.delete('user');
  return response.data;
};

// 비밀번호 변경
export const fetchChangePassword = async ({
  passwordConfirmation,
  password,
}: UserPassword) => {
  const response = await authAxiosInstance.patch('user/password', {
    passwordConfirmation,
    password,
  });
  return response.data;
};

// 비밀번호 변경을 위한 로그인 api
export const fetchPasswordCheck = async ({
  email,
  password,
}: UserPasswordCheck) => {
  const response = await authAxiosInstance.post('auth/signIn', {
    email,
    password,
  });
  return response.data;
};
