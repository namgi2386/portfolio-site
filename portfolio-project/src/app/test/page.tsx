'use client';

import CountingStars from '@/shared/ui/counting-star/CountingStars';
import ThemeToggle from '@/shared/ui/nav/ThemeToggle';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Message {
  id: number;
  content: string;
  created_at: string;
}

export default function TestPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 메시지 목록 불러오기
  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/test-messages');

      if (response.data.status === 'success') {
        setMessages(response.data.data);
      } else {
        setError('Failed to fetch messages');
      }
    } catch (err) {
      setError('Network error');
      console.error('Fetch error:', err);
    }
  };

  // 컴포넌트 마운트 시 메시지 불러오기
  useEffect(() => {
    fetchMessages();
  }, []);

  // 메시지 전송
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      setError('Please enter a message');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/test-messages', {
        content,
      });

      const data = await response.data;

      if (data.status === 'success') {
        setContent('');
        await fetchMessages(); // 목록 새로고침
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error');
      console.error('Submit error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-16">
      <div>
        <div className="h-30 border">
          <CountingStars />
        </div>
        <div>
          <ThemeToggle />
        </div>
        <div className="bg-foreground w-10 h-10 flex justify-center">
          <div className="bg-background w-6 h-6"></div>
        </div>
        {/* // 기본 폰트 (Pretendard) - 자동 적용 */}
        <p>기본 텍스트</p>
        {/* // font-sans로 기본 폰트 명시적 적용 */}
        <p className="font-sans">Pretendard 기본 폰트</p>
        {/* // Paperlogy 폰트 사용 */}
        <h1 className="font-paperlogy text-4xl font-bold">paperlogy폰트적용</h1>
        <p className="font-paperlogy">paperlogy폰트적용</p>
        <p className="font-paperlogy font-bold">paperlogy폰트적용</p>
        {/* // Gmarket Sans 폰트 사용 */}
        <div className="font-gmarket">
          <span className="font-light">Light 텍스트</span>
          <span className="font-medium">Medium 텍스트</span>
          <span className="font-bold">Bold 텍스트</span>
        </div>
        {/* 색상 적용 테스트 */}
        <div className="font-gmarket">
          <span className="font-light text-green-01">Light 텍스트</span>
          <span className="font-medium text-rose-01">Medium 텍스트</span>
          <span className="font-bold text-green-02">Bold 텍스트</span>
          <span className="font-bold bg-green-02">Bold 텍스트</span>
        </div>
        <div>
          <span className="font-bold text-no0">Bold 텍스트</span>
          <span className="font-bold text-no1 bg-no2">Bold 텍스트</span>
          <span className="font-bold text-no2">Bold 텍스트</span>
          <span className="font-bold text-no3">Bold 텍스트</span>
          <span className="font-bold text-no4">Bold 텍스트</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>

      {/* 에러 메시지 */}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      {/* 메시지 입력 폼 */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter a test message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed">
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>

      {/* 메시지 목록 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Messages ({messages.length})</h2>

        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet. Try sending one!</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-800">{message.content}</p>
              <p className="text-sm text-gray-500 mt-2">{new Date(message.created_at).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>

      {/* 새로고침 버튼 */}
      <button onClick={fetchMessages} className="mt-8 px-4 py-2 text-blue-500 hover:text-blue-700">
        Refresh Messages
      </button>
    </div>
  );
}
