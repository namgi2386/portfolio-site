import ThemeToggle from '@/shared/ui/nav/ThemeToggle';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';

// ThemeToggle에서는 useTheme를 사용한다.
// useTheme를 사용하기 위해서는 ThemeProvider가 필수.
// 본래 코드에서는 layout.tsx에서 ThemeProvider로 감싸둠
// 하지만 테스트환경에서는 개별의 ThemeProvider를 필요로 한다.
// 그걸 정의해준것.
function TestThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

describe('themeToggle 컴포넌트', () => {
  test('테마버튼렌더링', () => {
    render(
      <>
        <TestThemeProviderWrapper>
          <ThemeToggle />
        </TestThemeProviderWrapper>
      </>,
    );
    const btn = screen.getByRole('button', { name: '테마 변경' });
    expect(btn).toBeInTheDocument();
  });
  // userEvent테스트할거라서 비동기테스트 필수
  test('버튼클릭해보기', async () => {
    const user = userEvent.setup(); // user 객체 생성
    render(
      <>
        <TestThemeProviderWrapper>
          <ThemeToggle />
        </TestThemeProviderWrapper>
      </>,
    );
    const btn = screen.getByRole('button', { name: '테마 변경' });
    await user.click(btn); // 클릭해보기
    expect(btn).toBeInTheDocument(); // 클릭후에도 버튼 존재
  });
});
