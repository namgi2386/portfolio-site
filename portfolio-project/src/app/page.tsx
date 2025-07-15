import ThemeToggle from '@/shared/ui/ThemeToggle';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="fixed top-1/2 right-0 gap-4 h-60 bg-no2 w-20 flex flex-col justify-start p-2">
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
        <Link href="/feedback" className="bg-rose-500 text-center h-10 w-16 flex items-center p-2 rounded hover:bg-rose-600 inline-block">
          <div>피드백</div>
        </Link>
      </div>
    </>
  );
}