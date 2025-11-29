import Image from 'next/image';

export default function ProjectModal4() {
  return (
    <div className=" max-w-6xl mx-auto">
      {/* 헤더 */}
      <div className=" flex justify-between items-start mb-8 ">
        <h1 className="text-3xl font-bold text-foreground">
          Serverless <span className="text-custompurple">포트폴리오</span> 사이트
        </h1>
      </div>

      {/* 메인 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 설명 */}
        <div className="space-y-8">
          {/* 1 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">FSD 아키텍처 적용</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              개인 프로젝트임에도 <span className="text-custompurple">확장성과 유지보수성</span>을 고려하여 <span className="text-custompurple">FSD 아키텍처</span>를 적용했습니다.
              <span className="text-custompurple">entities, features, shared, widgets</span> 레이어로 구성하여 코드의 <span className="text-custompurple">가독성과 재사용성</span>을 높였습니다.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">풀스택 개발 경험</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              <span className="text-custompurple">Next.js 15 App Router</span>를 활용한 프론트엔드부터 <span className="text-custompurple">Supabase</span> 기반 백엔드,
              <span className="text-custompurple">Vercel</span> 배포까지 전 과정을 직접 구현했습니다.
              <br />
              <span className="text-custompurple">TypeScript</span>와 <span className="text-custompurple">Jest</span>를 통한 타입 안전성과 테스트 환경을 구축했습니다.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">사용자 경험 최적화</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              <span className="text-custompurple">GSAP 애니메이션</span>과 <span className="text-custompurple">다크/라이트 테마</span> 지원으로 몰입감 있는 UI를 구현했으며,
              <span className="text-custompurple">프로젝트 모달 인터랙션</span>과 <span className="text-custompurple">키보드 네비게이션</span>으로 접근성을 향상시켰습니다.
            </p>
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
        <div>
          <h2 className=" text-xl font-bold text-foreground mb-4 inline-block bg-no3/30 px-4 py-2 rounded-lg">개발자로서</h2>
          <p className="text-foreground leading-relaxed tracking-wider">
            팀 프로젝트에서 배운 <span className="text-custompurple">아키텍처 설계 원칙</span>을 개인 프로젝트에 적용하며 <span className="text-custompurple">실무 역량</span>을 검증했습니다. 특히{' '}
            <span className="text-custompurple">Next.js 15의 최신 기능들</span>을 활용하여 서버 컴포넌트와 클라이언트 컴포넌트를 적절히 분리하고,
            <span className="text-custompurple">SEO 최적화</span>와 <span className="text-custompurple">성능 최적화</span>를 동시에 달성했습니다. 또한{' '}
            <span className="text-custompurple">실제 사용자가 있는 서비스</span>를 운영하며 지속적인 피드백을 수집하고 개선하는 경험을 쌓았습니다.
          </p>
        </div>

        {/* 2 */}
        <div className="">
          <h2 className=" text-xl font-bold text-foreground mb-4 inline-block bg-no3/30 px-4 py-2 rounded-lg">개인 브랜딩으로서</h2>
          <p className="text-foreground leading-relaxed tracking-wider">
            단순한 이력서를 넘어 <span className="text-custompurple">나만의 기술적 정체성</span>을 표현하는 공간으로 설계했습니다.
            <span className="text-custompurple">블로그 시스템</span>을 통해 기술적 성장 과정을 기록하고, <span className="text-custompurple">피드백 시스템</span>으로 방문자와의 소통 창구를
            마련했습니다. 이를 통해 단순한 포트폴리오가 아닌 <span className="text-custompurple">성장하는 개발자의 여정</span>을 보여주는 살아있는 플랫폼으로 발전시켰습니다. 현재도 지속적으로 새로운
            기능을 추가하며 <span className="text-custompurple">기술적 도전</span>을 이어가고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
