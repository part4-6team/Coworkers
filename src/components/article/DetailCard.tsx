import LargeKebabIcon from 'public/icons/kebab_large.svg';
import CommentIcon from 'public/icons/comment.svg';
import HeartIcon from 'public/icons/heart.svg';
import { useDetailCard } from '@hooks/article/useArticleDetail';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import Image from 'next/image';
import NetworkError from '@components/@shared/NetworkError';

export default function DetailCard() {
  const router = useRouter();
  const { articleId } = router.query;

  const { data, isLoading, isError } = useDetailCard({
    articleId: Number(articleId),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <p>
        <NetworkError />
      </p>
    );

  return (
    <>
      <header className="mb-12 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-lg-medium md:text-2lg-medium">
            {data?.title}
          </span>
          <LargeKebabIcon />
        </div>
        <hr className="my-4 opacity-10" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={data?.image || 'public/icons/profile_large.svg'}
              width={32}
              height={32}
              alt="게시글 이미지"
              className="rounded-lg"
            />

            <span className="ml-[6px] mr-2 border-r-[1px] border-slate-700/60 pr-2  text-xs-medium text-text-primary md:text-md-medium ">
              {data?.writer.nickname}
            </span>
            <span className="text-xs-medium text-slate-400 md:text-md-medium">
              {dayjs(data?.createdAt).format('YYYY.MM.DD')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <CommentIcon />
              <span className="text-xs-regular text-slate-400 md:text-md-medium">
                {data?.commentCount}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon />{' '}
              <span className="text-xs-regular text-slate-400 md:text-md-medium">
                {data?.likeCount}
              </span>
            </div>
          </div>
        </div>
      </header>
      <p className="break-words text-md-medium text-text-secondary md:text-lg-medium">
        {data?.content}
      </p>
    </>
  );
}
