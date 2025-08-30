import Button from '@/shared/ui/Temps/Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('기본버튼', () => {
  test('빠튼 렌더링확인하기', () => {
    const mockClick = jest.fn(); // Mock 함수 생성
    render(<Button onClick={mockClick}>클릭</Button>);

    expect(screen.getByRole('button', { name: '클릭' })).toBeInTheDocument();
  });

  // userEvent테스트할거라서 비동기테스트 필수
  test('onClick 함수 호출확인', async () => {
    const mockClick = jest.fn();
    const user = userEvent.setup(); // user 객체 생성

    render(<Button onClick={mockClick}>클릭</Button>);

    const button = screen.getByRole('button', { name: '클릭' });
    await user.click(button); // 클릭해보기

    // Mock 함수 호출 확인
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
