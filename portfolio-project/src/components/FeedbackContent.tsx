'use client';

import { FeedbackContentProps } from '@/entities/feedback/model/types';
import { useRouter } from 'next/navigation';
import FeedbackForm from '@/components/FeedbackForm';


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
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-background">피드백 모달</h2>
          <p className="text-background">여기는 모달로 열린 피드백입니다!</p>
          <FeedbackForm />
          <button onClick={handleClose} className="text-rose-500 mt-4">
            닫기 (홈으로)
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">피드백 페이지</h1>
      <p className="">직접 URL로 접근했을 때 보이는 전체 페이지입니다.</p>
      <FeedbackForm />
      <button onClick={handleClose} className="text-rose-500 mt-4">
        닫기 (홈으로)
      </button>
    </main>
  );
}
