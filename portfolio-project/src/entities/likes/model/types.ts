export interface LikeApiResponse {
  success: boolean;
  count?: number;
  message?: string;
}

export interface LikeRequest {
  action: 'like' | 'unlike';
}

export type LikeCountResponse = LikeApiResponse;