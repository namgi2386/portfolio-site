
import { FeedbackApi, FeedbackData, initialFeedback, RatingType } from '@/entities/feedback';
import { useEffect, useState } from 'react';

export default function useFeedback() {
  const [feedback, setFeedback] = useState<FeedbackData>(initialFeedback);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const savedData = localStorage.getItem('feedback');
    const feedbackSubmittedData = localStorage.getItem('feedbackSubmitted');
    if (savedData) setFeedback(JSON.parse(savedData));

    if (feedbackSubmittedData) {
      const status = JSON.parse(feedbackSubmittedData);
      if (status.submitted && Date.now() - status.timestamp > 3600000) {
        status.submitted = false;
      }
      setIsFeedbackSubmitted(status.submitted);
    }
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
    FeedbackApi.postFeedback(feedback);
    localStorage.setItem(
      'feedbackSubmitted',
      JSON.stringify({
        submitted: true,
        timestamp: Date.now(),
      }),
    );
    setIsFeedbackSubmitted(true);
  };
  return {
    feedback,
    isFeedbackSubmitted,
    updateScore,
    updateExtra,
    submitForm,
  };
}
