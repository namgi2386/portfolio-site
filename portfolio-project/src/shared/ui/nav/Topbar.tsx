import LikeButton from '@/features/likes/ui/LikeButton';
import MobileMenu from '@/shared/ui/nav/MobileMenu';
import ThemeToggle from '@/shared/ui/nav/ThemeToggle';
import SplitText from '@/shared/ui/split-text/SplitText';
import Link from 'next/link';

const ColorStyle = 'cursor-pointer hover:text-no43 transition duration-200 ease-in-out';

export default function Topbar() {
  return (
    <div className="fixed top-0 z-50 w-full bg-background shadow-md min-h-16">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <div className="relative">
          <Link aria-label="메인 섹션으로 이동" href="/#main-title-section">
            <SplitText text="imnammgi's Portfolio" className={`text-2xl font-medium ${ColorStyle}`} />
          </Link>
          <p className={`absolute top-0 left-0 text-2xl font-medium text-no3/10 pointer-events-none`}>imnammgi&apos;s Portfolio</p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-md space-x-3">
          <Link aria-label="프로필 섹션으로 이동" href="/#profile-section" className={ColorStyle}>
            Profile
          </Link>
          <Link aria-label="프로젝트 섹션으로 이동" href="/#project-section" className={ColorStyle}>
            Project
          </Link>
          <Link aria-label="블로그 섹션으로 이동" href="/#blog-section" className={ColorStyle}>
            Blog
          </Link>
          <Link aria-label="파이널 섹션으로 이동" href="/#final-section" className={ColorStyle}>
            Fin
          </Link>
          <LikeButton />
          <div className={`flex justify-center ${ColorStyle}`}>
            <ThemeToggle />
          </div>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
}
