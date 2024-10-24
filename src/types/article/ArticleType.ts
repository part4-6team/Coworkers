export interface Article {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
  content: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
}
