import { render, screen } from '@testing-library/react';
import { SectionBoxStack } from './SectionBox';

describe('SectionBoxStack 컴포넌트', () => {
  const defaultProps = {
    icon1: 'jest' as const,
    name1: '첫번째 기술 : Jest',
    type: 'normal' as const,
    children: <p>테스트 내용</p>,
  };

  test('필수 요소들이 렌더링되어야 한다', () => {
    render(<SectionBoxStack {...defaultProps} />);
    expect(screen.getByAltText('Jest')).toBeInTheDocument(); // 이미지가 있는지 확인 (alt 속성으로)
    expect(screen.getByText('첫번째 기술 : Jest')).toBeInTheDocument(); // 기술명이 있는지 확인
    expect(screen.getByText('테스트 내용')).toBeInTheDocument(); // children 내용이 있는지 확인
  });

  test('type값이 prime일 때의 요소 렌더링확인', () => {
    render(<SectionBoxStack {...defaultProps} type="prime" />);

    const dom = screen.getByText('첫번째 기술 : Jest');
    expect(dom).toHaveClass('text-custompurple');
  });
  test('type값이 normal일 때의 요소 렌더링확인', () => {
    render(<SectionBoxStack {...defaultProps} type="normal" />);

    const dom = screen.getByText('첫번째 기술 : Jest');
    expect(dom).toHaveClass('text-foreground');
  });

  test('두 번째 이미지와 이름이 있을 때 렌더링되어야 한다', () => {
    render(<SectionBoxStack {...defaultProps} icon2="rtl" name2="두번째 기술 : RTL" />);

    expect(screen.getByAltText('React Testing Library')).toBeInTheDocument();
    expect(screen.getByText('두번째 기술 : RTL')).toBeInTheDocument();
  });

  test('두 번째 이미지가 없을 때는 렌더링되지 않아야 한다', () => {
    render(<SectionBoxStack {...defaultProps} />);

    expect(screen.queryByAltText('React Testing Library')).not.toBeInTheDocument(); // 없는 요소 테스트
  });
});
