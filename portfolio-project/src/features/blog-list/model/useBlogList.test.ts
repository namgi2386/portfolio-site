import { BlogData } from '@/entities/blogs';
import { useBlogList } from '@/features/blog-list/model/useBlogList';
import { act, renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
jest.mock('axios');
const mocXios = axios as jest.Mocked<typeof axios>;

const mockBlogData: BlogData[] = [
  {
    id: 1,
    title: '첫 번째 블로그 글',
    description: '첫 번째 블로그 글 설명',
    written_date: '2024-01-01',
    created_at: '2024-01-01T00:00:00Z',
    is_pinned: true,
    image_url: 'https://velog.velcdn.com/images/happynj2697/post/test1/image.png',
    tags: ['React', 'TypeScript'],
    blog_url: 'https://velog.io/@happynj2697/test1',
    prime_tag: 'React',
  },
  {
    id: 2,
    title: '두 번째 블로그 글',
    description: '두 번째 블로그 글 설명',
    written_date: '2024-01-02',
    created_at: '2024-01-02T00:00:00Z',
    is_pinned: false,
    image_url: 'https://velog.velcdn.com/images/happynj2697/post/test2/image.png',
    tags: ['JavaScript', 'Testing'],
    blog_url: 'https://velog.io/@happynj2697/test2',
    prime_tag: 'JavaScript',
  },
];

describe('useBlogList 훅 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.open = jest.fn();
  });

  test('블로그 데이터 로딩 성공', async () => {
    mocXios.get.mockResolvedValue({
      data: { success: true, data: mockBlogData },
    });

    const { result } = renderHook(() => useBlogList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.blogs).toEqual(mockBlogData);
      expect(result.current.error).toBe('');
    });
  });

  test('API 에러 시 에러 상태 업데이트', async () => {
    mocXios.get.mockRejectedValue(new Error('Network Error'));

    const { result } = renderHook(() => useBlogList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toContain('Fail blogApi.getBlogs');
    });
  });

  test('handleBlogClick이 새 창을 연다', () => {
    const { result } = renderHook(() => useBlogList());
    
    act(() => {
      result.current.handleBlogClick('https://velog.io/@happynj2697/test1');
    });

    expect(window.open).toHaveBeenCalledWith(
      'https://velog.io/@happynj2697/test1',
      '_blank',
      'noopener,noreferrer'
    );
  });
});