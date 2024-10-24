// 게시글 상세 페이지

import DetailCard from '@components/article/DetailCard';
import CommentForm from '@components/article/CommentForm';
import CommentList from '@components/article/CommentList';

export default function ArticleDetail() {
  return (
    <div className="mx-4 mt-10 max-w-[1200px] xl:mx-auto">
      <DetailCard />
      <div className="flex flex-col justify-between">
        <CommentForm />
      </div>
      <hr className="my-8 opacity-10" />
      <footer>
        <CommentList />
      </footer>
    </div>
  );
}
