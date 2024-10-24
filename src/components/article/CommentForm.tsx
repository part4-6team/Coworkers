import { ScrollTextArea } from '@components/@shared/Input';

export default function CommentForm() {
  return (
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
  );
}
