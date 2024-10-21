import Image from 'next/image';
import IcmediaIcon from 'public/icons/ic_medal.svg';
import ProfileIcon from 'public/icons/profile_large.svg';
import HeartIcon from 'public/icons/heart.svg';

export default function ArticleCard() {
  return (
    <article className=" h-[178px] w-full rounded-xl border border-background-tertiary bg-background-secondary">
      <div className="mx-4 mb-4 mt-[9.5px]  ">
        <div className=" mb-[13.5px] flex items-center">
          <IcmediaIcon />
          <span className="text-md-semibold md:text-lg-semibold">Best</span>
        </div>
        <div className="mb-4 flex justify-between">
          <div>
            <h3 className="mb-3 text-md-medium md:text-2lg-medium">
              게시판 제목들
            </h3>
            <span className="text-xs-regular text-slate-400 md:text-md-medium">
              2024.07.25
            </span>
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/736x/0c/c7/16/0cc7169aec1d81898f1daf4b46d41857.jpg"
              width={64}
              height={64}
              alt="게시글 이미지"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ProfileIcon />
            <span className="text-xs-medium md:text-md-medium">카카시</span>
          </div>
          <div className="flex items-center gap-1">
            <HeartIcon />
            <span className="text-xs-regular text-slate-400 md:text-md-medium">
              9999+
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
