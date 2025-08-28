import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestPage from '@/app/test/page';

describe('테스트 페이지', () => {
  test('설명 텍스트가 렌더링되어야 한다', () => {
    render(<TestPage />);
    const description = screen.getByText(/Jest와 React Testing Library 환경 테스트/i);
    expect(description).toBeInTheDocument();
  });
  test('버튼이 렌더링되어야 한다', () => {
    render(<TestPage />);
    const button = screen.getByRole('button', { name: /클릭 테스트 버튼/i });
    expect(button).toBeInTheDocument();
  });
});
