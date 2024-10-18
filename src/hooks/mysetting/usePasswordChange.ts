import { fetchChangePassword } from '@/src/api/mysetting/inputAPI';
import { useMutation } from '@tanstack/react-query';

export const usePasswordChange = () => {
  return useMutation({
    mutationFn: fetchChangePassword,
    onSuccess: () => {
      console.log('password 변경!');
    },
    onError: (error) => {
      console.error('password 변경 실패', error);
    },
  });
};
