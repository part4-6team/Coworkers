import { fetchCardDetail } from '@/src/api/article/articlecardAPI';
import { Article } from '@/src/types/article/ArticleType';
import { useQuery } from '@tanstack/react-query';

interface FetchCardDetailProps {
  articleId: number;
}

export const useDetailCard = ({ articleId }: FetchCardDetailProps) => {
  return useQuery<Article>({
    queryKey: ['DetailCard'],
    queryFn: () => fetchCardDetail({ articleId }),
  });
};
