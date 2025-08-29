import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Bold } from '@/shared/ui/section-box/SectionBox';

describe('Bold 컴포넌트', () => {
  test('childred 렌더링확인', () => {
    render(<Bold>컴뽀난뜨</Bold>);
    const domthatshit = screen.getByText('컴뽀난뜨');
    expect(domthatshit).toBeInTheDocument();
  });
  test('CSS적용여부판단', () => {
    render(<Bold className="custom-class">CSS는 필요없다.</Bold>);
    const dom = screen.getByText('CSS는 필요없다.');
    expect(dom).toHaveClass('font-bold', 'text-foreground', 'custom-class');
  });
});
