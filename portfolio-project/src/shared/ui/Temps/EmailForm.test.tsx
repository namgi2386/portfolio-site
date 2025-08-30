import EmailForm from '@/shared/ui/Temps/EmailForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('EmailForm테스트이것저것', () => {
  test('렌더링확인', () => {
    render(<EmailForm />);
    expect(screen.getByRole('textbox', { name: 'nameInput' })).toHaveValue('');
    expect(screen.getByRole('button', { name: 'submitBtn' })).toHaveTextContent('제출하기');
  });
});

describe('EmailForm테스트', () => {
  test('사용자가 폼 작성 및 제출까지 진행', async () => {
    const user = userEvent.setup();
    render(<EmailForm />);
    // 기본 test
    const nameInput = screen.getByRole('textbox', { name: 'nameInput' });
    await user.type(nameInput, '임남기');
    expect(nameInput).toHaveValue('임남기');
    const emailInput = screen.getByLabelText('emailInput');
    await user.type(emailInput, 'imn@mgi.com');
    expect(emailInput).toHaveValue('imn@mgi.com');

    // 수정 확인
    await user.clear(nameInput);
    await user.type(nameInput, '빠르모트');
    expect(nameInput).toHaveValue('빠르모트');

    // 제출
    const submitBtn = screen.getByLabelText('submitBtn');
    expect(submitBtn).toHaveTextContent('제출하기');
    expect(submitBtn).not.toBeDisabled();
    expect(emailInput).not.toBeDisabled();

    await user.click(submitBtn);
    expect(submitBtn).toHaveTextContent('제출완료');
    expect(submitBtn).toBeDisabled();
    expect(emailInput).toBeDisabled();

    // localStorage.setItem 확인
    expect(localStorage.setItem).toHaveBeenCalledWith('emailSubmitted', expect.stringContaining('"submitted":true'));
    expect(localStorage.setItem).toHaveBeenCalledWith('emailSubmitted', expect.stringContaining('"timestamp"'));

    // 제출 후에도 name 입력 가능
    await user.type(nameInput, '제출후추가입력');
    expect(nameInput).toHaveValue('빠르모트제출후추가입력');
    // 하지만 email은 disabled
    expect(emailInput).toBeDisabled();
  });
});

