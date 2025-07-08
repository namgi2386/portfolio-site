'use client';

import { RatingType, initialFeedback, FeedbackContentProps, FeedbackData } from '@/entities/feedback/model/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function FeedbackMain() {
  const [feedback, setFeedback] = useState<FeedbackData>(() => {
    const temp = localStorage.getItem('feedback');
    return temp ? JSON.parse(temp) : initialFeedback;
  });

  const updateScore = (type: RatingType, num: number) => {
    const newF = {
      ...feedback,
      ratings: {
        ...feedback.ratings,
        [type]: num,
      },
    };
    setFeedback(newF);
    localStorage.setItem('feedback', JSON.stringify(newF));
  };

  return (
    <>
      <div className="bg-foreground">
        <div>
          <div className="text-background">완성도</div>
          <div className="space-x-1">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((score) => (
              <button key={score} className={`${feedback.ratings.portfolioScore === score ? 'bg-rose-500' : 'bg-rose-300'} w-6 text-background`} onClick={() => updateScore('portfolioScore', score)}>
                {score}
              </button>
            ))}
          </div>
          <div className="text-background">기술점수</div>
          <div className="space-x-1">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((score) => (
              <button key={score} className={`${feedback.ratings.technicalScore === score ? 'bg-rose-500' : 'bg-rose-300'} w-6 text-background`} onClick={() => updateScore('technicalScore', score)}>
                {score}
              </button>
            ))}
          </div>
          <div className="text-background">디자인점수</div>
          <div className="space-x-1">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((score) => (
              <button key={score} className={`${feedback.ratings.designScore === score ? 'bg-rose-500' : 'bg-rose-300'} w-6 text-background`} onClick={() => updateScore('designScore', score)}>
                {score}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

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
          <FeedbackMain />
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
      <FeedbackMain />
      <button onClick={handleClose} className="text-rose-500 mt-4">
        닫기 (홈으로)
      </button>
    </main>
  );
}
