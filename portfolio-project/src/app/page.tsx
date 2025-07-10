import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="mt-8">
        <Link href="/feedback" className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 inline-block">
          피드백 모달 열기
        </Link>
      </div>
    </>
  );
}
