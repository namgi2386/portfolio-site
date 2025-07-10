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
  const updateExtra = (type: keyof FeedbackData, value: string) => {
    const newF = {
      ...feedback,
      [type]: value,
    };
    setFeedback(newF);
    localStorage.setItem('feedback', JSON.stringify(newF));
  };

  const submitForm = () => {
    
  }

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
          <div>
            <div className="text-background">코멘트 내용</div>
            <textarea
              value={feedback.comment_text}
              onChange={(e) => updateExtra('comment_text', e.target.value)}
              placeholder="코멘트 내용"
              className=" p-2 border text-background border-1 border-background resize-none min-h-20"
            />
          </div>
          <div>
            <div className="text-background">버그 내용</div>
            <textarea
              value={feedback.bug_description}
              onChange={(e) => updateExtra('bug_description', e.target.value)}
              placeholder="버그 내용"
              className=" p-2 border text-background border-1 border-background resize-none min-h-20"
            />
          </div>
          <div className="mb-8">
            <label className="text-background block mb-2">채용 정보 공유 (선택)</label>
            <input
              type="text"
              value={feedback.compony_name}
              onChange={(e) => updateExtra('compony_name', e.target.value)}
              placeholder="회사명"
              className="p-2 border text-background border-1 border-background"
            />
            <input
              type="url"
              value={feedback.job_link}
              onChange={(e) => updateExtra('job_link', e.target.value)}
              placeholder="채용공고 링크"
              className="p-2 border text-background border-1 border-background"
            />
          </div>
          <button className="w-full bg-rose-500 text-white p-3 rounded font-medium hover:bg-rose-600 transition-colors duration-300 cursor-pointer" onClick={submitForm}>
            피드백 제출
          </button>
        </div>
      </div>
    </>
  );
}
