import { FeedbackClientApiResponse, FeedbackData } from '@/entities/feedback/model/types';
import axios from 'axios';

export const FeedbackApi = {
  async postFeedback(feedback: FeedbackData): Promise<FeedbackClientApiResponse> {
    const response = await axios.post<FeedbackClientApiResponse>('/api/feedback', feedback);
    return response.data;
  },
};
