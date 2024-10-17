import BasicDropdown from '@components/@shared/BasicDropdown';
import Image from 'next/image';

export default function ExileDropdown() {
  const Option = [
    { component: <div className="text-point-rose">추방하기</div> },
  ];

  const moreIcon = (
    <div className="flex h-[10px] w-[10px] items-center">
      <Image
        src="/icons/kebab_large.svg"
        alt="더보기 아이콘"
        width={4}
        height={10}
      />
    </div>
  );

  return <BasicDropdown options={Option} triggerIcon={moreIcon} />;
}
