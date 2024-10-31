import SmallKebabIcon from 'public/icons/kebab_small.svg';
import { useCommentCards } from '@hooks/article/useCommentCard';
import NetworkError from '@components/@shared/NetworkError';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import dayjs from 'dayjs';
import Dropdown, { Option } from '@components/@shared/Dropdown';
import { useModal } from '@hooks/useModal';
import CommentDeletMoal from './CommentDeletModal';

export default function CommentList() {
  const router = useRouter();
  const { articleId } = router.query;
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(
    null
  );

  const {
    isOpen: CommentDeleteIsOpen,
    onOpen: CommentDeleteOpenModal,
    onClose: CommentDeleteCloseModal,
  } = useModal();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCommentCards({
    limit: 2,
    articleId,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  if (isError) {
    return (
      <div>
        <NetworkError />
      </div>
    );
  }

  const comments = data?.pages.flatMap((page) => page.list) || [];

  const handleSelect = (option: Option, commentId: string) => {
    if (option.label === '삭제하기') {
      setSelectedCommentId(commentId);
      CommentDeleteOpenModal();
    } else {
      // 여기에 이제 수정하는 기능 들어가야합니다~!
    }
  };

  const basic = (commentId: string): Option[] => [
    {
      label: '수정하기',
      component: (
        <div
          onClick={() =>
            handleSelect({ label: '수정하기', component: null }, commentId)
          }
        >
          수정하기
        </div>
      ),
    },
    {
      label: '삭제하기',
      component: (
        <div
          onClick={() =>
            handleSelect({ label: '삭제하기', component: null }, commentId)
          }
        >
          삭제하기
        </div>
      ),
    },
  ];

  return (
    <>
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="mb-4 rounded-xl bg-background-secondary"
        >
          <div className="flex flex-col gap-12 px-6 py-5 ">
            <div className="flex justify-between">
              <span className="break-words text-md-regular text-text-primary md:text-lg-regular">
                {comment.content}
              </span>
              <Dropdown
                options={basic(comment.id)}
                triggerIcon={<SmallKebabIcon />}
                optionsWrapClass="mt-2 right-0 rounded-[12px] border border-background-tertiary"
                optionClass="rounded-[12px] md:w-[135px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-center hover:bg-background-tertiary"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={comment.writer.image}
                  width={32}
                  height={32}
                  alt="프로필이미지"
                  className="rounded-full"
                />
                <span className="ml-[12px] mr-2 border-r-[1px] border-slate-700/60 pr-2  text-xs-medium text-text-primary md:text-md-medium ">
                  {comment.writer.nickname}
                </span>
                <span className="text-xs-medium text-slate-400 md:text-md-medium">
                  {dayjs(comment.createdAt).format('YYYY.MM.DD')}
                </span>
              </div>
            </div>
          </div>
          <CommentDeletMoal
            isOpen={CommentDeleteIsOpen}
            onClose={CommentDeleteCloseModal}
            commentId={selectedCommentId}
          />
        </article>
      ))}

      <div
        ref={ref}
        className={clsx({
          hidden: hasNextPage === false,
          'my-10 flex justify-center': hasNextPage === true,
        })}
      >
        <svg
          aria-hidden="true"
          className="h-8 w-8 animate-spin fill-brand-primary text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </>
  );
}
