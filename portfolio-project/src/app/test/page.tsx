import CountingStars from '@/shared/ui/counting-star/CountingStars';
import ThemeToggle from '@/shared/ui/nav/ThemeToggle';

export default function TestPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 mt-16">
      <div>
        <div className="h-50 border">
          <CountingStars />
          <CountingStars />
          <CountingStars />
          <CountingStars />
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
    </div>
  );
}
