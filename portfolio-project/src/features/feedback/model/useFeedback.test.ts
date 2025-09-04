import { FeedbackData, initialFeedback } from '@/entities/feedback';
import useFeedback from '@/features/feedback/model/useFeedback';
import { act, renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
jest.mock('axios');
const mocXios = axios as jest.Mocked<typeof axios>;

const mockedFeedbackData:FeedbackData = {
  ratings: {
    portfolioScore: 1,
    technicalScore: 2,
    designScore: 3,
    average_score: 4,
  },
  comment_text: 'comment_text data',
  bug_description: 'bug_description data',
  company_name: 'company_name data',
  job_link: 'job_link data',
};

describe('useFeedback 훅 테스트', () => {
  afterEach(() => {
    localStorage.clear();
  });
  describe('초기값테스트', () => {
    test('초기값 업데이트 성공', async () => {
      const { result } = renderHook(() => useFeedback());
      expect(result.current.feedback).toEqual(initialFeedback);
    });
    test('초기값 feedback 업데이트 성공', async () => {
      localStorage.setItem('feedback', JSON.stringify(mockedFeedbackData));
      const { result } = renderHook(() => useFeedback());
      expect(result.current.feedback).toEqual(mockedFeedbackData);
    });
    test('초기값 Submitted 업데이트 성공', async () => {
      const recentTimestamp = Date.now() - 1800000; // 30분 전
      const recentSubmittedData = {
        submitted: true,
        timestamp: recentTimestamp,
      };
      localStorage.setItem('feedbackSubmitted', JSON.stringify(recentSubmittedData));

      const { result } = renderHook(() => useFeedback());
      expect(result.current.isFeedbackSubmitted).toBe(true);
    });
    test('초기값 Submitted 1시간 지남 성공', async () => {
      const recentTimestamp = Date.now() - 3600000; // 1시간 전
      const recentSubmittedData = {
        submitted: true,
        timestamp: recentTimestamp,
      };
      localStorage.setItem('feedbackSubmitted', JSON.stringify(recentSubmittedData));

      const { result } = renderHook(() => useFeedback());
      expect(result.current.isFeedbackSubmitted).toBe(false);
    });
  });
  describe('피드백 update 테스트', () => {
    test('updated feedback이 반영된다.', async () => {
      const { result } = renderHook(() => useFeedback());

      act(() => {
        result.current.updateScore('portfolioScore', 3);
      });

      const newF = {
        ...initialFeedback,
        ratings: {
          ...initialFeedback.ratings,
          portfolioScore: 3,
        },
      };

      await waitFor(() => {
        expect(result.current.feedback).toEqual(newF);
        expect(localStorage.getItem('feedback')).toEqual(JSON.stringify(newF));
      });

      act(() => {
        result.current.updateExtra('comment_text', '코멘트업데이트');
      });

      newF.comment_text = '코멘트업데이트';

      await waitFor(() => {
        expect(result.current.feedback).toEqual(newF);
        expect(localStorage.getItem('feedback')).toEqual(JSON.stringify(newF));
      });
    });
  });
  describe('피드백 submitForm 테스트', () => {
    test('피드백 post API 호출된다.', async () => {
      const { result } = renderHook(() => useFeedback());

      act(() => {
        result.current.updateScore('portfolioScore', 3);
      });
      act(() => {
        result.current.updateExtra('comment_text', '코멘트업데이트');
      });

      const newF = {
        ...initialFeedback,
        ratings: {
          ...initialFeedback.ratings,
          portfolioScore: 3,
        },
        comment_text: '코멘트업데이트',
      };

      await waitFor(() => {
        expect(result.current.feedback).toEqual(newF);
      });

      // axios post mocking
      mocXios.post.mockResolvedValue({
        data: { success: true, data: newF },
      });
      act(() => {
        result.current.submitForm();
      });
      await waitFor(() => {
        expect(mocXios.post).toHaveBeenCalledWith('/api/feedback', newF);
      });
    });
  });

});
// 객체비교를 위해서는 toBe가 아닌 toEqual을 사용한다.
// renderHook에 의해 rendering될때, useEffect도 실행된다.
// 단, useEffect API호출은 비동기실행되므로, waitFor을 이용하여 test해야된다.
// useState의 비동기성을 고려해서 동시성문제를 야기할 수 있는 함수는 개별 act로 구분하여 실행하도록 한다.