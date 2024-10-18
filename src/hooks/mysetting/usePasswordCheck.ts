import { fetchPasswordCheck } from '@/src/api/mysetting/inputAPI';
import { useMutation } from '@tanstack/react-query';

export const usePasswordCheck = () => {
  return useMutation({
    mutationFn: fetchPasswordCheck,
    onSuccess: () => {
      console.log('password 일치');
    },
    onError: (error) => {
      console.error('password 불일치', error);
    },
  });
};
