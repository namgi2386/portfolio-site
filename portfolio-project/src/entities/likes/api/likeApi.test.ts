import { LikeApi } from '@/entities/likes/api/likeApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('likeApi 테스트', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe('likeApi get 테스트', () => {
    test('좋아요 수 가져온다.', async () => {
      const mockResponseData = {
        success: true,
        data: { count: 42 },
      };
      mockedAxios.get.mockResolvedValue({
        data: mockResponseData,
      });
      const result = await LikeApi.getLikes();
      expect(result).toEqual(mockResponseData);
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/heart');
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
    test('에러발생시 예외가 발생한다.', async () => {
      const mockError = new Error('Network Error');
      mockedAxios.get.mockRejectedValue(mockError);

      await expect(LikeApi.getLikes()).rejects.toThrow('Network Error');
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/heart');
    });
  });
});
