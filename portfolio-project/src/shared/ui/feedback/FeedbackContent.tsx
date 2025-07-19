'use client';

import { FeedbackContentProps } from '@/entities/feedback/model/types';
import { useRouter } from 'next/navigation';
import FeedbackForm from '@/shared/ui/feedback/FeedbackForm';

export default function FeedbackContent({ isModal = false }: FeedbackContentProps) {
  const router = useRouter();

  const handleClose = () => {
    if (isModal) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => router.back()}>
        <div className="bg-white p-8 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-background">피드백</h2>
            <button onClick={handleClose} className="text-rose-500 cursor-pointer text-xl font-bold">
              ✕
            </button>
          </div>
          <p className="text-background">여기는 모달로 열린 피드백입니다!</p>
          <FeedbackForm />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-start items-center bg-green-900 gap-10">
        <button onClick={handleClose} className="text-rose-500 text-4xl cursor-pointer">
          ✕
        </button>
        <h2 className="text-4xl font-bold">피드백</h2>
      </div>
      <p className="">직접 URL로 접근했을 때 보이는 전체 페이지입니다.</p>
      <FeedbackForm />
    </main>
  );
}
