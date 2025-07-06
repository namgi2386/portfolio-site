'use client';

import { useRouter } from 'next/navigation';

export default function FeedbackPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">피드백 페이지</h1>
      <p>직접 URL로 접근했을 때 보이는 전체 페이지</p>
      <button onClick={() => router.back()} className="mt-4 cursor-pointer">
        닫기
      </button>
    </main>
  );
}
