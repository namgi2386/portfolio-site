import { FeedbackData, FeedbackResponse } from '@/entities/feedback/model/types';
import axios from 'axios';

export const FeedbackApi = {
  async postFeedback(feedback: FeedbackData): Promise<FeedbackResponse> {
    const response = await axios.post<FeedbackResponse>('/api/feedback', feedback);
    return response.data;
  },
};
