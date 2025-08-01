import MobileMenu from '@/shared/ui/MobileMenu';
import ThemeToggle from '@/shared/ui/ThemeToggle';
import Link from 'next/link';

const ColorStyle = 'cursor-pointer hover:text-no43 transition duration-200 ease-in-out';

export default function Topbar() {
  return (
    <div className="fixed top-0 z-50 w-full bg-background shadow-md min-h-16">
      <div className="max-w-6xl mx-auto flex justify-between p-4 font-paperlogy">
        <Link href="/#main-title-section" className={`text-2xl font-medium ${ColorStyle}`}>
          imnammgi &apos;s Portfolio
        </Link>
        <div className="hidden md:flex items-center gap-3 text-md space-x-3">
          <Link href="/#profile-section" className={ColorStyle}>
            Profile
          </Link>
          <Link href="/#project-section" className={ColorStyle}>
            Project
          </Link>
          <Link href="/#blog-section" className={ColorStyle}>
            Blog
          </Link>
          <Link href="/#final-section" className={ColorStyle}>
            Fin
          </Link>
          <Link href="/feedback" className={ColorStyle}>
            ☆★★★★
          </Link>
          <div className={`flex justify-center ${ColorStyle}`}>
            <ThemeToggle />
          </div>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
}
