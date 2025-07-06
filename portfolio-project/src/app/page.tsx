import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
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
      </div>
      <div className="mt-8">
        <Link href="/feedback" className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 inline-block">
          피드백 모달 열기
        </Link>
      </div>
    </>
  );
}
