import Dropdown, { Option } from '@components/@shared/Dropdown';
import Image from 'next/image';
import PCLogo from 'public/images/logo_pc.png';
import UserIcon from 'public/icons/user.svg';
import ArrowDown from 'public/icons/arrow_down.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Menu from 'public/icons/menu.svg';

export default function NavBar() {
  const router = useRouter();
  const [isLogoOnlyPage, setIsLogoOnlyPage] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Option | null>(null);

  useEffect(() => {
    const logoOnlyPages = ['/login', 'signup', 'addteam'];
    // 랜딩페이지, 팀참여하기 페이지, 비밀번호 재설정페이지 추가 필요
    setIsLogoOnlyPage(logoOnlyPages.includes(router.pathname));
  }, [router.pathname]);

  const teams: Option[] = [
    { label: '경영관리팀', component: <div>경영관리 팀</div> },
    { label: '프로덕트팀', component: <div>프로덕트 팀</div> },
    { label: '마케팅팀', component: <div>마케팅 팀</div> },
  ];

  const handleSelectTeam = (option: Option) => {
    setSelectedTeam(option);
  };

  return (
    <header className=" flex h-16 items-center justify-center border-b border-border-primary border-opacity-10 bg-background-secondary px-6">
      <nav className="flex h-8 w-[1200px]  items-center justify-between text-text-primary max-xl:w-full max-md:w-full ">
        <div className="flex items-center gap-10 max-md:gap-5">
          <button type="button" className="md:hidden">
            <Menu />
          </button>
          <Link href="./">
            <div className="block max-xl:hidden">
              <Image src={PCLogo} alt="로고" width={158} height={32} />
            </div>
            <div className="hidden max-xl:block">
              <Image src={PCLogo} alt="로고" width={102} height={20} />
            </div>
          </Link>
          {!isLogoOnlyPage && (
            <>
              <div className="max-md:hidden">
                <Dropdown
                  initialOption={teams[0]}
                  options={teams}
                  selected={selectedTeam}
                  onSelect={handleSelectTeam}
                  triggerClass="flex gap-[12px] items-center text-text-primary"
                  triggerIcon={<ArrowDown />}
                  optionsWrapClass="mt-[30px] flex p-[16px] rounded-[12px]"
                  optionClass="px[8px] py-[7px] rounded-[8px] w-[186px] h-[46px] hover:bg-background-tertiary"
                />
              </div>
              <Link href="#">
                <span className="max-md:hidden">자유게시판</span>
              </Link>
            </>
          )}
        </div>
        {!isLogoOnlyPage && (
          <Link className="flex items-center gap-2" href="#">
            <UserIcon />
            <span className="max-xl:hidden">이름</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
