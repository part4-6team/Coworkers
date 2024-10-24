// 게시글 상세 페이지
import LargeKebabIcon from 'public/icons/kebab_large.svg';
import SmallKebabIcon from 'public/icons/kebab_small.svg';
import ProfileIcon from 'public/icons/profile_large.svg';
import CommentIcon from 'public/icons/comment.svg';
import HeartIcon from 'public/icons/heart.svg';
import { ScrollTextArea } from '@components/@shared/Input';

export default function ArticleDetail() {
  return (
    <div className="mx-4 mt-10 max-w-[1200px] xl:mx-auto">
      <header className="mb-12 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-lg-medium md:text-2lg-medium">
            게시물 제목 영역입니다.
          </span>
          <LargeKebabIcon />
        </div>
        <hr className="my-4 opacity-10" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ProfileIcon />
            <span className="ml-[6px] mr-2 border-r-[1px] border-slate-700/60 pr-2  text-xs-medium text-text-primary md:text-md-medium ">
              우지은
            </span>
            <span className="text-xs-medium text-slate-400 md:text-md-medium">
              2024.07.25
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <CommentIcon />
              <span className="text-xs-regular text-slate-400 md:text-md-medium">
                3
              </span>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon />{' '}
              <span className="text-xs-regular text-slate-400 md:text-md-medium">
                9999+
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-between">
        <p className="break-words text-md-medium text-text-secondary md:text-lg-medium">
          본문이 들어가는 영역입니다.{' '}
        </p>
        <div className="mt-20">
          <ScrollTextArea label="댓글달기" placeholder="댓글을 입력해주세요" />
          <div className="mt-4 h-12 text-right">
            <button
              type="button"
              className="h-8 w-[74px] rounded-xl bg-brand-primary text-md-semibold md:h-12 md:w-[184px] md:text-lg-semibold"
            >
              등록
            </button>
          </div>
        </div>
      </main>
      <hr className="my-8 opacity-10" />
      <footer>
        <article className="rounded-xl bg-background-secondary">
          <div className="flex flex-col gap-12 p-4 ">
            <div className="flex justify-between">
              <span className="break-words text-md-regular text-text-primary md:text-lg-regular">
                댓글 내용
              </span>
              <SmallKebabIcon />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ProfileIcon />
                <span className="ml-[6px] mr-2 border-r-[1px] border-slate-700/60 pr-2  text-xs-medium text-text-primary md:text-md-medium ">
                  우지은
                </span>
                <span className="text-xs-medium text-slate-400 md:text-md-medium">
                  2024.07.25
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <CommentIcon />
                  <span className="text-xs-regular text-slate-400 md:text-md-medium">
                    3
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <HeartIcon />{' '}
                  <span className="text-xs-regular text-slate-400 md:text-md-medium">
                    9999+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </footer>
    </div>
  );
}
