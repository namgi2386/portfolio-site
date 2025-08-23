import { LikeClientApiRequest, LikeClientGetApiResponse , LikeClientPostApiResponse } from '@/entities/likes/model/types';
import axios from 'axios';

export const LikeApi = {
  async getLikes(): Promise<LikeClientGetApiResponse> {
    const response = await axios.get<LikeClientGetApiResponse>('/api/heart');
    return response.data;
  },
  async postLikeOrDislike(request: LikeClientApiRequest): Promise<LikeClientPostApiResponse> {
    const response = await axios.post<LikeClientPostApiResponse>('/api/heart', request);
    return response.data;
  },
};
