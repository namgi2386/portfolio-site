export interface LikeSuccessResponse {
  success: true;
  count: number;
}

export interface LikeErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type LikeApiResponse = LikeSuccessResponse | LikeErrorResponse;

export interface LikeApiRequest {
  action: 'like' | 'unlike';
}
