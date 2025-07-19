import ThemeToggle from '@/shared/ui/ThemeToggle';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      <div className="fixed top-1/2 right-0 mr-2 gap-4 h-60 bg-no2 w-20 flex flex-col justify-start p-2 z-50">
        <div className="flex justify-center bg-background rounded-md">
          <ThemeToggle />
        </div>
        <Link href="/" className="bg-background text-center rounded-md">
          홈
        </Link>
        <Link href="/test" className="bg-background text-center rounded-md">
          테스트
        </Link>
        <Link href="/feedback" className="bg-rose-500 text-center h-10 w-16 flex items-center p-2 rounded-md hover:bg-rose-600 inline-block">
          <div>피드백</div>
        </Link>
      </div>
    </>
  );
}
