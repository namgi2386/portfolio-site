'use client';

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import ThemeToggle from '@/shared/ui/ThemeToggle';

const ColorStyle = 'cursor-pointer hover:text-no43 transition duration-200 ease-in-out';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 햄버거/닫기 버튼 */}
      <div className="flex md:hidden items-center">
        <button onClick={toggleMenu} className={ColorStyle}>
          {isMenuOpen ? <IoClose size={28} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 -z-10 bg-background md:hidden pt-16">
          {/* 메뉴 링크들 */}
          <div className="flex flex-col justify-center items-center h-full space-y-8 font-paperlogy">
            <Link href="/#profile-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Profile
            </Link>
            <Link href="/#project-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Project
            </Link>
            <Link href="/#blog-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/#final-section" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              Fin
            </Link>
            <Link href="/feedback" className={`text-3xl font-medium ${ColorStyle}`} onClick={closeMenu}>
              ☆★★★★
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
