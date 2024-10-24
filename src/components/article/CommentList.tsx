import SmallKebabIcon from 'public/icons/kebab_small.svg';
import ProfileIcon from 'public/icons/profile_large.svg';
import CommentIcon from 'public/icons/comment.svg';
import HeartIcon from 'public/icons/heart.svg';

export default function CommentList() {
  return (
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
  );
}
