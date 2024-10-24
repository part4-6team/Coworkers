import { authAxiosInstance } from '@libs/axios/axiosInstance';

export const fetchBestCard = async ({
  queryKey,
}: {
  queryKey: [number, number, string, string];
}) => {
  const [page, pageSize, orderBy, keyword] = queryKey;

  const response = await authAxiosInstance.get('articles?', {
    params: { page, pageSize, orderBy, keyword },
  });
  return response.data.list;
};

interface FetchCardDetailProps {
  articleId: number;
}

export const fetchCardDetail = async ({ articleId }: FetchCardDetailProps) => {
  const response = await authAxiosInstance.get(`articles/${articleId}`);
  return response.data;
};
