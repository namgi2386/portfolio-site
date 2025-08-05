import { LikeApiResponse } from '@/entities/likes/model/types';
import axios from 'axios';

export const LikeApi = {
  async getLikes(): Promise<LikeApiResponse> {
    const response = await axios.get<LikeApiResponse>('/api/heart');
    return response.data;
  },
  async postLikeOrDislike(action: 'like' | 'unlike'): Promise<LikeApiResponse> {
    const data = {
      action: action,
    };
    const response = await axios.post<LikeApiResponse>('/api/heart', data);
    return response.data;
  },
};
