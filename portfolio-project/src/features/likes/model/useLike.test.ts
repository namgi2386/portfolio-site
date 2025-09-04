import useLike from '@/features/likes/model/useLike';
import { act, renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');
const mocXios = axios as jest.Mocked<typeof axios>;

describe('useLike 훅 테스트', () => {
  afterEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });

  describe('초기값테스트', () => {
    test('초기값 업데이트 성공', async () => {
      // 좋아요수 GET요청 response mocking 추가
      mocXios.get.mockResolvedValue({
        data: {
          success: true,
          data: { count: 1234 },
        },
      });
      //렌더링
      const { result } = renderHook(() => useLike());
      
      // 초기 렌더링값
      expect(result.current.isLiked).toBe(false);
      expect(result.current.heartCount).toBe(0);
      // useEffect 비동기 작업 기다리면 heartCount값은 변경됨.
      await waitFor(() => {
        expect(result.current.heartCount).toBe(1234);
      });
      expect(mocXios.get).toHaveBeenCalledWith('/api/heart');
    });
  });

  describe('상태변경 테스트', () => {
    test('좋아요 누르면 좋아요된다', async () => {
      mocXios.get.mockResolvedValue({
        data: { success: true, data: { count: 100 } },
      });
      mocXios.post.mockResolvedValue({
        data: { success: true, data: { message: '소중한 좋아요 아주 좋아요' } },
      });
      const { result } = renderHook(() => useLike());
      await waitFor(() => {
        expect(result.current.heartCount).toBe(100);
      });
      act(() => {
        result.current.clickThatLike();
      });
      expect(result.current.isLiked).toBe(true);
      expect(result.current.heartCount).toBe(101);
      expect(localStorage.getItem('loveActually')).toBe('true');
      // 호출된 적 있는지 검증
      expect(mocXios.post).toHaveBeenCalledWith('/api/heart', { action: 'like' });
    });
  });
  describe('에러처리테스트', () => {
    test('API에러발생시 롤백', async () => {
      // get mocking
      mocXios.get.mockResolvedValue({
        data: { success: true, data: { count: 10 } },
      });
      // post error mocking
      mocXios.post.mockRejectedValue(new Error('Network Error'));
      // rendering
      const { result } = renderHook(() => useLike());
      // 초기값 비동기 업데이트
      await waitFor(() => {
        expect(result.current.heartCount).toBe(10);
      });
      // 좋아요! 클릭
      act(() => {
        result.current.clickThatLike();
      });
      // 낙관적 업데이트
      expect(result.current.isLiked).toBe(true);
      expect(result.current.heartCount).toBe(11);
      // 좋아요 post 요청 비동기 업데이트
      await waitFor(() => {
        // Network Error로 인해 초기값으로 돌아간다.
        expect(result.current.isLiked).toBe(false);
        expect(result.current.heartCount).toBe(10);
        expect(localStorage.getItem('loveActually')).toBe('false');
      });
    });
  });
});
