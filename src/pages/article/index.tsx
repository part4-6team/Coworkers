// 게시글 메인 페이지
import Button from '@components/@shared/Button';
import { SearchInput } from '@components/@shared/Input';
import ArrayDropdown from '@components/article/ArrayDropdown';
import ArticleCard from '@components/article/ArticleCard';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import PlusIcon from 'public/icons/plus.svg';

export default function ArticlePage() {
  return (
    <div className="mx-4 mt-8">
      <header className="mb-6">
        <h1 className="mb-6 text-2lg-bold md:text-2xl-bold">자유 게시판</h1>
        <SearchInput placeholder="검색어를 입력해주세요" />
      </header>
      <main>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg-bold md:text-xl-bold">베스트 게시글</h2>
            <button type="button" className="flex items-center gap-[1px]">
              <span className="text-sm text-slate-400 md:text-lg-regular">
                더보기
              </span>
              <ArrowRightIcon />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <ArticleCard />
            </div>
            <div className="hidden md:block">
              <ArticleCard />
            </div>
            <div className="hidden xl:block">
              <ArticleCard />
            </div>
          </div>
        </div>
        <hr className="my-8 opacity-10" />
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg-bold md:text-xl-bold">게시글</h2>
          <ArrayDropdown />
        </div>
        <ul className="grid gap-4 xl:grid-cols-2">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ul>
      </main>
      <div className="fixed bottom-4 right-4">
        <Button
          shape="round"
          className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600"
        >
          <div className="flex items-center justify-center">
            <PlusIcon />글 작성하기
          </div>
        </Button>
      </div>
    </div>
  );
}
