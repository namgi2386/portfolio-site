import SectionBox from '@/shared/ui/section-box/SectionBox';
import { render, screen } from '@testing-library/react';

describe('SectionBox 테스트', () => {
  test('children 렌더링 테스트', () => {
    render(
      <SectionBox>
        <button aria-label="안녕버튼">안녕?</button>
        <button aria-label="byebye">잘가no.1</button>
        <button>잘가no.2</button>
        <button aria-label="오잉버튼">오잉</button>
        <p>오잉</p>
      </SectionBox>,
    );
    // aria-label으로 찾아옴 (우선순위 : aria-label > aria-labelledby > text > title)
    const dom = screen.getByRole('button', { name: '안녕버튼' });
    expect(dom).toBeInTheDocument();

    // 텍스트 내용으로 찾기 (button태그일때 "잘가no.2" 텍스트인 요소 찾아옴)
    // '잘가no.1'을 찾을때는 aria-label이 달려있고, aria-label가 우선시되기에 text로 찾을 수 없음.
    // 때문에 aria-label이 없는 "잘가no.2" 요소는 getByRole로 찾을 수 있다.
    const dom2 = screen.getByRole('button', { name: '잘가no.2' });
    expect(dom2).toBeInTheDocument();

    // getByRole 혹은 getByText일때, button태그와 p태그 둘 다 해당되기에 에러발생함 "Found multiple elements"
    // 곧, 해당하는 요소들 여러개를 찾아와야하기 때문에! getAll 들어간 애들을 사용하자
    const dom3list = screen.getAllByText('오잉');
    dom3list.forEach((btn) => {
      expect(btn).toBeInTheDocument();
    });

    // 3. aria-labelledby로 찾기 ( "안녕"이 들어간 놈들 찾아옴)
    const dom4 = screen.getByRole('button', { name: /안녕/ });
    expect(dom4).toBeInTheDocument();
  });
  test('CSS 테스트', () => {
    render(
      <SectionBox className="custom">
        <button aria-label="안녕버튼">안녕?</button>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" />
      </SectionBox>,
    );
    // 기본적으로 label값으로 찾아오는데, aria-label도 인식함.
    // parentElement하면, 부모요소 찾아옴
    const dom = screen.getByLabelText('안녕버튼').parentElement;
    expect(dom).toHaveClass('bg-no0', 'dark:bg-no2', 'shadow-custom', 'custom');
  });
});
