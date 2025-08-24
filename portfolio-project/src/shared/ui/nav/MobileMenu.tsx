'use client';

import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import ThemeToggle from '@/shared/ui/nav/ThemeToggle';

const ColorStyle = 'cursor-pointer hover:text-no43 transition duration-200 ease-in-out';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="flex md:hidden items-center">
        <button aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'} title={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={toggleMenu} className={ColorStyle}>
          {isMenuOpen ? <IoClose size={28} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 -z-10 bg-background md:hidden pt-16">
          <div className="flex flex-col justify-center items-center h-full space-y-8 font-paperlogy">
            <Link aria-label="프로필 섹션으로 이동" href="/#profile-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Profile
            </Link>
            <Link aria-label="프로젝트 섹션으로 이동" href="/#project-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Project
            </Link>
            <Link aria-label="블로그 섹션으로 이동" href="/#blog-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Blog
            </Link>
            <Link aria-label="파이널 섹션으로 이동" href="/#final-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Fin
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
