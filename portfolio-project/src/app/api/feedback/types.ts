import { ApiResponse } from "@/app/api/_types/common";

export interface FeedbackRatingRequest {
  portfolioScore: number;
  technicalScore: number;
  designScore: number;
}

export interface FeedbackRequestBody {
  ratings: FeedbackRatingRequest;
  comment_text?: string;
  bug_description?: string;
  company_name?: string;
  job_link?: string;
}

export interface FeedbackSuccessData {
  message: string;
  feedback_id: number;
}

export type FeedbackApiResponse = ApiResponse<FeedbackSuccessData>;
