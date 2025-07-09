export interface FeedbackRatings {
  portfolioScore: number;
  technicalScore: number;
  designScore: number;
  average_score: number;
}
export interface FeedbackData {
  ratings: FeedbackRatings;
  comment_text: string;
  bug_description: string;
  compony_name: string;
  job_link: string;
}

export interface FeedbackContentProps {
  isModal?: boolean;
}

export type RatingType = 'portfolioScore' | 'technicalScore' | 'designScore';

export const initialFeedback: FeedbackData = {
  ratings: {
    portfolioScore: 5,
    technicalScore: 5,
    designScore: 5,
    average_score: 5,
  },
  comment_text: '',
  bug_description: '',
  compony_name: '',
  job_link: '',
};