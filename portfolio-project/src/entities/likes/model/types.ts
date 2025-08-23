import { ApiClientResponse } from '@/shared/api/types';

interface LikeData {
  count: number;
}

export type LikeClientGetApiResponse = ApiClientResponse<LikeData>;

export interface LikeApiRequest {
  action: 'like' | 'unlike';
}

export type LikeClientPostApiResponse = ApiClientResponse<{ message: string }>;
