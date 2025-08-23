import { ApiResponse } from '@/app/api/_types/common';

interface LikeData {
  count: number;
}

export type LikeGetApiResponse = ApiResponse<LikeData>;

export interface LikeApiRequest {
  action: 'like' | 'unlike';
}

export type LikePostApiResponse = ApiResponse<{ message: string }>;
