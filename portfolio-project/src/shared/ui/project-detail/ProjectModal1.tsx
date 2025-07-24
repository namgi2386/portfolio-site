import Image from 'next/image';

export default function ProjectModal1() {
  return (
    <>
      {/* 헤더 */}
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold text-white">
          노코딩 <span className="text-purple-400">AI</span> 모델 <span className="text-purple-400">파이프라인</span> 호스팅 <span className="text-purple-400">플랫폼</span>
        </h1>
      </div>

      {/* 메인 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 설명 */}
        <div className="space-y-8">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">FSD 아키텍처 도입</h2>
            <p className="text-gray-300 leading-relaxed">
              이전 레이어드 아키텍처에서 느낀 컴포넌트 의존성 문제의 해결을 위해 <span className="text-purple-400 font-semibold">FSD</span> 아키텍처를 도입했습니다. 이를 통해{' '}
              <span className="text-purple-400 font-semibold">feature별 효율적 병렬 작업</span>이 가능하도록 했습니다.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">하이브리드 렌더링</h2>
            <p className="text-gray-300 leading-relaxed">
              Dashboard에서의 <span className="text-purple-400 font-semibold">스켈레톤 코드</span>에는 <span className="text-purple-400 font-semibold">SSR</span>방식을 적용했으며,{' '}
              <span className="text-purple-400 font-semibold">사용자 인터렉티브</span>를 위해서 <span className="text-purple-400 font-semibold">CSR</span>방식을 도입했습니다.
              <br />
              삼세페이지에서의 <span className="text-purple-400 font-semibold">정적/동적 데이터</span>를 분리하기 위해 클라이언트 페칭을 적용했습니다.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">HTTPS 포함시 문제해결</h2>
            <p className="text-gray-300 leading-relaxed">
              HTTPS 배포 환경에서 <span className="text-purple-400 font-semibold">HTTP API 서버 통신 시 Mixed Content</span> 오류 발생을 <span className="text-purple-400 font-semibold">프록시</span>{' '}
              설정으로 해결하여 클라이언트 코드 수정 없이 안전적인 API 통신이 가능하도록 구현했습니다.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="relative min-h-[400px] overflow-hidden">
          <Image alt="rollmodel-img" src="/images/projects/rollmodel01.png" fill className="object-contain" />
        </div>
      </div>

      {/* 서브섹션 */}
      <div className="mt-8 space-y-6">
        {/* 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 inline-block bg-gray-700 px-4 py-2 rounded-lg">프론트엔드로서</h2>
          <p className="text-gray-300 leading-relaxed">
            이전 프로젝트에서는 <span className="text-purple-400 font-semibold">컴포넌트 중심</span>의 사고에 머물렀다면, 이번 프로젝트를 통해 전체 시스템의{' '}
            <span className="text-purple-400 font-semibold">확장성과 유지보수성</span>을 고려하는 관점으로 성장했습니다. <span className="text-purple-400 font-semibold">렌더링 방식별</span> 특성을
            이해하여 <span className="text-purple-400 font-semibold">페이지별 최적화 전략</span>을 수립했고, <span className="text-purple-400 font-semibold">캐싱 전략과 상태 관리</span>를 통한 사용자
            경험 개선 방법을 제득했습니다. 또한 기술적 근거를 바탕으로 한 의사결정 능력과 백엔드팀과의 <span className="text-purple-400 font-semibold">API 협업</span>을 주도하는 협업 역량을 크게
            향상시킬 수 있었습니다.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 inline-block bg-gray-700 px-4 py-2 rounded-lg">팀장으로서</h2>
          <p className="text-gray-300 leading-relaxed">
            프로젝트의 <span className="text-purple-400 font-semibold">복합성성</span>을 관리하기 위해 <span className="text-purple-400 font-semibold">MVP</span>를 3단계로 나누어 진행했습니다.
            1단계에서는 <span className="text-purple-400 font-semibold">최소 기능 구현</span>을 통해 <span className="text-purple-400 font-semibold">타원별 실제 개발 속도</span>를 파악했고,
            2단계에서는 <span className="text-purple-400 font-semibold">구체적인 기능들을 구현</span>하여 상호 의존성 있는 기능들의 <span className="text-purple-400 font-semibold">통합 테스트</span>를
            진행했습니다. 3단계에서는 예러 처리와 완전한 <span className="text-purple-400 font-semibold">기능 통합</span>을 목표로 했습니다. 이러한 단계별 접근을 통해 새롭하라 압곰 관리, 배포
            의사결정, 지속적 소통으로 프로젝트를 성공적으로 완수할 수 있었습니다.
          </p>
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker'].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
