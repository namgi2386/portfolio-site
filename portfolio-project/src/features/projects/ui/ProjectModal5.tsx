import Image from 'next/image';

export default function ProjectModal4() {
  return (
    <div className=" max-w-6xl mx-auto">
      {/* 헤더 */}
      <div className=" flex justify-between items-start mb-8 ">
        <h1 className="text-3xl font-bold text-foreground">
          <span className="text-custompurple">알고리즘 학습</span> 개인화 서비스
        </h1>
      </div>

      {/* 메인 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 설명 */}
        <div className="space-y-8">
          {/* 1 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">Query 중심 아키텍처로의 마이그레이션</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              Zustand + TanStack Query <span className="text-custompurple">이중 상태 관리</span>로 mutation 후 UI가 즉시 반영되지 않는 문제가 발생했습니다. 4가지 해결 방안을 비교 분석한 결과
              <span className="text-custompurple">TanStack Query를 Single Source of Truth로</span> 사용하는 아키텍처를 선택했고, <span className="text-custompurple">HydrationBoundary</span>로 서버
              데이터를 클라이언트에 주입하여 <span className="text-custompurple">SSR 이점</span>을 유지하면서도 mutation 후 즉시 UI가 반영되도록 구현했습니다.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">9-Step 온보딩 시스템</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              35개 Sequence의 인터랙티브 온보딩 구현 과정에서 Zustand persist Hydration 타이밍, Spotlight 위치 리사이즈 동기화, Step 전환 시 Sequence 리셋, 이벤트 리스너 Capture Phase, 사용자 클릭
              제어 등 5가지 도전과제를 해결했습니다. useSyncExternalStore, useRef 활용, preventDefault 제거 후 100ms 딜레이, pointer-events 제어 등 React 생태계의 심화 패턴을 적용했습니다.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">59% 렌더링 성능 개선</h2>
            58개 TagCard가 하나의 태그 변경에도 전체 리렌더링되는 문제를 <span className="text-custompurple">React.memo</span>의 <span className="text-custompurple">Custom Comparison 함수</span>로
            해결했습니다. useMemo가 모든 태그에 대해 새 객체를 생성하여 props 참조가 변경되었던 것을 실제 내용을 비교하도록 개선하여 <span className="text-custompurple">98%</span> 리렌더링 감소와
            <span className="text-custompurple">59%</span> 렌더링 시간 단축을 달성했습니다.
          </div>
          {/* 3 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">3계층 인증 시스템과 무한 리다이렉트 해결</h2>
            RTR 방식의 인증을 <span className="text-custompurple">middleware</span>(토큰 검증/재발급), <span className="text-custompurple">server</span>(SSR 쿠키 처리),
            <span className="text-custompurple">client</span>(Axios Interceptor) 3계층에서 일관되게 구현했습니다. 특히 만료된 토큰으로 인한 무한 리다이렉트 문제를 Middleware에서 쿠키를 삭제할 수
            있다는 특성을 활용하여 해결했으며, Server Component의 쿠키 수정 불가 제약을 우회했습니다.
          </div>
        </div>

        {/* 이미지 */}
        <div className="relative min-h-[400px] overflow-hidden">
          <Image alt="portfolio-img" src="/images/projects/portfolio-main.png" fill className="object-contain" quality={85} priority />
        </div>
      </div>

      {/* 서브섹션 */}
      <div className="mt-8 space-y-6">
        {/* 1 */}
        <h2 className=" text-xl font-bold text-foreground mb-4 inline-block bg-no3/30 px-4 py-2 rounded-lg">트러블 슈팅</h2>
        <div>
          <h2 className=" text-xl font-bold text-foreground mb-4">Calendar 양방향 동기화 Race Condition</h2>
          <p className="text-foreground leading-relaxed tracking-wider">
            <span className="text-custompurple">문제 상황</span>: SmallCalendar와 BigCalendar의 양방향 동기화 구현 시, 두 캘린더 모두 독립적인 네비게이션 버튼을 가지고 있어 복잡한 동기화 문제가
            발생했습니다. 네비게이션 버튼 첫 클릭 시 아무 반응이 없고, 이후 클릭 시 Console에 2개의 events가 출력되지만 UI는 변경되지 않았습니다.
          </p>
          <p className="text-foreground leading-relaxed tracking-wider">
            <span className="text-custompurple">원인 분석</span>: react-calendar 라이브러리 내부 state와 커스텀 zustand store를 동시에 사용하여 race condition이 발생했습니다.
          </p>
          <p className="text-foreground leading-relaxed tracking-wider">
            <span className="text-custompurple">해결 방법</span>: 두 캘린더 양방향 동기화를 단방향으로 분리 (useEffect 의존성 배열 수정)한 뒤, navigation 로직을 단일 handler로 중앙화 했습니다. 또한,
            zustand store actions를 개별 selector로 분리하여 의도하지 않은 리렌더링을 방지 했습니다.
          </p>
          <p className="text-foreground leading-relaxed tracking-wider">
            <span className="text-custompurple">배운 점</span>: 라이브러리 내부 state와 외부 state의 충돌 문제, 단방향 데이터 흐름의 중요성, selector 패턴으로 리렌더링 최적화
          </p>
        </div>
        {/* 2 */}
        <div>
          <h2 className=" text-xl font-bold text-foreground mb-4">SSR 환경에서의 Hydration Error 체계적 해결</h2>
          <p className="text-foreground leading-relaxed tracking-wider mb-2">
            <span className="text-custompurple">해결 방법</span>: 여러 라이브러리와 기능에서 Hydration Error가 발생했으며, 각 상황에 맞는 해결 방법을 적용했습니다:
          </p>
          <div className="mb-1">
            <div className="text-custompurple">react-big-calendar</div>
            <ul className="list-disc pl-5">
              <li>
                <span className="text-custompurple">문제</span>: 서버/클라이언트 렌더링시 날짜 data의 차이가 발생
              </li>
              <li>
                <span className="text-custompurple">해결</span>: next/dynamic으로 SSR=false 설정 (SEO 불필요 영역)
              </li>
            </ul>
          </div>
          <div className="mb-1">
            <div className="text-custompurple">createPortal 기반 ModalProvider</div>
            <ul className="list-disc pl-5">
              <li>
                <span className="text-custompurple">문제</span>: 서버는 portal 미렌더링, 클라이언트는 렌더링
              </li>
              <li>
                <span className="text-custompurple">해결</span>: useSyncExternalStore를 사용하여 서버에서는 {`() =>`} false 반환하며, 클라이언트에서는 {`() =>`} true 반환하는 방식으로 해결
              </li>
            </ul>
          </div>
          <div className="mb-1">
            <div className="text-custompurple">DndContext</div>
            <ul className="list-disc pl-5">
              <li>
                <span className="text-custompurple">문제</span>: aria-describedby ID가 서버/클라이언트에서 다르게 생성
              </li>
              <li>
                <span className="text-custompurple">해결</span>: useId()로 고유 ID를 생성하여 DndContext id props로 전달
              </li>
            </ul>
          </div>
          <div className="mb-1">
            <div className="text-custompurple">Zustand persist (온보딩)</div>
            <ul className="list-disc pl-5">
              <li>
                <span className="text-custompurple">문제</span>: localStorage 로딩 전 useEffect 실행으로 온보딩 재시작
              </li>
              <li>
                <span className="text-custompurple">해결</span>: onRehydrateStorage 콜백과 _hasHydrated 플래그 추가
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
