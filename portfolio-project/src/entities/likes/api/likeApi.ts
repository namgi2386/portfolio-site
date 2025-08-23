import { LikeClientGetApiResponse , LikeClientPostApiResponse } from '@/entities/likes/model/types';
import axios from 'axios';

export const LikeApi = {
  async getLikes(): Promise<LikeClientGetApiResponse> {
    const response = await axios.get<LikeClientGetApiResponse>('/api/heart');
    return response.data;
  },
  async postLikeOrDislike(action: 'like' | 'unlike'): Promise<LikeClientPostApiResponse> {
    const data = {
      action: action,
    };
    const response = await axios.post<LikeClientPostApiResponse>('/api/heart', data);
    return response.data;
  },
};
