import Sidebar from '@components/@shared/SideBar';
import { useState } from 'react';

// usestate를 통해서 Open Close 상태관리 추가 해야합니다.!

export default function Test() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-red-50"
        onClick={() => setIsLeftOpen(true)}
      >
        왼쪽 사이드바 열기
      </button>

      <Sidebar
        position="left"
        isOpen={isLeftOpen}
        onClose={() => setIsLeftOpen(false)}
      >
        <nav>
          <ul>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">홈</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">내용</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">고기먹기</a>
            </li>
          </ul>
        </nav>
      </Sidebar>

      <button
        type="button"
        className="text-red-50"
        onClick={() => setIsRightOpen(true)}
      >
        오른쪽 사이드바 열기
      </button>

      <Sidebar
        position="right"
        isOpen={isRightOpen}
        onClose={() => setIsRightOpen(false)}
        button="cancelbutton"
      >
        <nav>
          <ul>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">홈</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">내용</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">고기먹기</a>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </>
  );
}
