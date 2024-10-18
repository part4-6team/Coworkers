import { useEffect, useState } from 'react';

const useViewportSize = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const updateViewportSize = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 현재 크기 설정
    updateViewportSize();

    window.addEventListener('resize', updateViewportSize);
    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);

  // 화면 크기에 따라 디바이스 유형 판별
  const isMobile = viewport.width < 768;
  const isTablet = viewport.width >= 768 && viewport.width < 1280;
  const isPC = viewport.width >= 1280;

  return { viewport, isMobile, isTablet, isPC };
};

export default useViewportSize;
