'use client';
import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibleCounter = () => {
      setIsVisible(window.pageYOffset > 300); // 위치 300 감지
    };
    window.addEventListener('scroll', visibleCounter); // 리스너추가
    return () => window.removeEventListener('scroll', visibleCounter); // 클린업
  }, []);
  const scrolling = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 상단으로 스무스하게
  };
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="border border-no3 w-12 h-16 rounded-full flex items-center justify-center cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 " onClick={scrolling}>
        <FaAngleUp className="text-2xl text-no3 hover:text-no2 dark:hover:text-no0 transition duration-200 ease-in-out" />
      </div>
    </div>
  );
}
