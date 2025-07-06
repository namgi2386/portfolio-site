'use client';

import { useRouter } from 'next/navigation';

export default function FeedbackModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-rose-500 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">피드백 모달</h2>
        <p>모달로 열린 피드백</p>
        <button onClick={() => router.back()} className="mt-4 cursor-pointer">
          닫기
        </button>
      </div>
    </div>
  );
}
