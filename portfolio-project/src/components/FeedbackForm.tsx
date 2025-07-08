'use client';

import { RatingType, initialFeedback, FeedbackData } from '@/entities/feedback/model/types';
import { useEffect, useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState<FeedbackData>(initialFeedback);

  useEffect(() => {
    const savedData = localStorage.getItem('feedback');
    if (savedData) setFeedback(JSON.parse(savedData));
  }, []);

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
