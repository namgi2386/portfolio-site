import Image from 'next/image';

export default function ProjectModal3() {
  return (
    <div className=" max-w-6xl mx-auto">
      {/* 헤더 */}
      <div className="font-paperlogy flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          WebRTC기반 <span className="text-custompurple">실시간 화상</span> 스터디 서비스
        </h1>
      </div>

      {/* 메인 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 설명 */}
        <div className="space-y-8">
          {/* 1 */}
          <div>
            <h2 className="font-paperlogy text-xl font-bold text-foreground mb-4">WebRTC 실시간 통신 시스템 구현</h2>
            <p className="text-foreground leading-relaxed">
              <span className="text-custompurple font-semibold">OpenVidu</span> 기반 화상회의 기능을 구현하면서 세션 관리, 토큰 발급, 스트림 처리 등 복잡한 실시간 통신 로직을 담당했습니다.{' '}
              <span className="text-custompurple font-semibold">14개의 Custom Hook</span>으로 관심사를 분리하여 유지보수성과 재사용성을 크게 향상시켰습니다.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-paperlogy text-xl font-bold text-foreground mb-4">P2P 채팅 시스템 최적화</h2>
            <p className="text-foreground leading-relaxed">
              서버 부하를 줄이기 위해 <span className="text-custompurple font-semibold">OpenVidu Signal</span>을 활용한
              <span className="text-custompurple font-semibold">P2P 채팅 시스템</span>을 설계했습니다. <span className="text-custompurple font-semibold">Socket.io</span> 대신
              <span className="text-custompurple font-semibold">WebRTC 데이터 채널</span>을 활용하여 서버 우회 직접 통신 을 구현했고, 실시간 즉석 필터링 시스템을 추가했습니다.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-paperlogy text-xl font-bold text-foreground mb-4">JWT 자동 갱신 시스템 구축</h2>
            <p className="text-foreground leading-relaxed">
              <span className="text-custompurple font-semibold">Axios Interceptor</span>를 활용하여 토큰 만료 시 사용자 개입 없이 자동으로 갱신되는 시스템을 구현했습니다. 무 한 재시도 방지 로직과 원본
              요청복원 메커니즘을 통해 안 정적인 인증 플로우를 완성했습니다.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="relative  min-h-[400px] overflow-hidden">
          <Image alt="webrtc-study-img" src="/images/projects/dreammoa01.png" fill className="object-contain" />
        </div>
      </div>

      {/* 서브섹션 */}
      <div className="mt-8 space-y-6">
        {/* 1 */}
        <div>
          <h2 className="font-paperlogy text-xl font-bold text-foreground mb-4 inline-block bg-no3/30 px-4 py-2 rounded-lg">실시간 통신 기술에 대한 깊은 이해</h2>
          <div className="text-foreground leading-relaxed space-y-4">
            <p>
              <span className="text-custompurple font-semibold">WebRTC</span>를 다루면서 다순한 라이브러리 사용을 넘어 <span className="text-custompurple font-semibold">P2P 통신</span>의 본질적 특성을
              이해하게 되었습니다.
            </p>
            <p>네트워크 상태, 브라우저 호환성, 방화벽 등 제어할 수 없는 변수들을 고려한 예러 핸들링과 폴백 전략의 중요성을 체감했습니다.</p>
            <p>
              특히 <span className="text-custompurple font-semibold">WebSocket</span> 연결 문제를 해결하면서 프로토콜 레벨에서의 디버깅 능력과 환결별 설정 차이를 분석하는 역량을 기를 수 있었습니다.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h2 className="font-paperlogy text-xl font-bold text-foreground mb-4 inline-block bg-no3/30 px-4 py-2 rounded-lg">사용자 중심의 기술적 사고로 전환</h2>
          <div className="text-foreground leading-relaxed space-y-4">
            <p>이전에는 기능 구현에만 집중했다면, 이번 프로젝트에서는 사용자 경험을 우선시하는 기술적 판단을 내리게 되었습니다.</p>
            <p>토큰 만료 시 사용자가 모르게 자동 갱신하거나, 채팅에서 욕설을 자동스럽게 이모지로 치환하는 등 기술적 완성도와 사용자 편의성을 동시에 추구했습니다.</p>
            <p>
              또한 무한 스크롤 성능 최적화를 위해 <span className="text-custompurple font-semibold">debounce와 Intersection Observer</span>를 활용하여 체감 성능을 크게 개선하는 경험을 통해 성능
              최적화에 대한 실무적 감각을 기를 수 있었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
