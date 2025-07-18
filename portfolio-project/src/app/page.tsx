import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* 메인 타이틀 섹션 */}
      <div className="w-full flex justify-center h-screen items-center">
        <div className="-space-y-2 md:-space-y-3 lg:-space-y-4">
          <h1 className="font-paperlogy font-medium text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] light:text-no4 text-no3 transition-all duration-300 ease-in-out">
            계획보다 실행을, 완벽보다 완성을,
          </h1>
          <h1 className="font-paperlogy text-[2rem] md:text-[2.4rem] lg:text-[3rem] font-bold transition-all duration-300 ease-in-out">
            결국 해내는 개발자 <span className="text-no4">임남기</span> 입니다.
          </h1>
        </div>
      </div>

      {/* 프로필 섹션 */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 왼쪽: 프로필 이미지와 기본 정보 */}
          <div className="lg:col-span-3">
            {/* lg 미만에서는 가로 배치 */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
              {/* 프로필 이미지 */}
              <div className="col-span-1 w-full aspect-square rounded-lg overflow-hidden relative">
                <Image src="/images/profiles/imnamgi_port_05.png" alt="프로필 사진" fill className="object-cover" priority={true} sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw" />
              </div>

              {/* 텍스트 정보들 */}
              <div className="col-span-2 lg:col-span-1 space-y-4 lg:space-y-6">
                {/* 이름과 직업 */}
                <div className="space-y-2">
                  <h2 className="font-paperlogy text-xl md:text-2xl lg:text-3xl font-bold text-foreground">프론트엔드 개발자</h2>
                  <h3 className="font-paperlogy text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400">임남기</h3>
                </div>

                {/* 연락처 정보 */}
                <div className="space-y-2 lg:space-y-3 text-no4 dark:text-no3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm">📧</span>
                    <span className="text-xs md:text-sm lg:text-base">happynj2697@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm">📱</span>
                    <span className="text-xs md:text-sm lg:text-base">010-2386-4855</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm">⚫</span>
                    <span className="text-xs md:text-sm lg:text-base">GitHub</span>
                    <span className="text-xs text-gray-400">보러 가기</span>
                  </div>
                </div>

                {/* 경력 정보 */}
                <div className="bg-gray-800 rounded-lg p-3 lg:p-4 space-y-3 lg:space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-1 text-sm lg:text-base">SQLD</h4>
                    <p className="text-xs lg:text-sm text-gray-400">2024.03</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-sm lg:text-base">정보처리기사</h4>
                    <p className="text-xs lg:text-sm text-gray-400">2024.06</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-sm lg:text-base">삼성 청년 SW 아카데미 12기</h4>
                    <p className="text-xs lg:text-sm text-gray-400">2024.07.01 - 2025.05.29</p>
                    <p className="text-xs lg:text-sm text-gray-400">성적 우수 (1등)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 자기소개 */}
          <div className="lg:col-span-9 space-y-6">
            {/* 나머지 코드는 동일 */}
            <div className="bg-gray-800 rounded-lg p-6 md:p-8 ">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg md:text-xl">
                  <span className="font-bold text-white">React, Next.js, TypeScript</span> 중심의 웹 개발 역량을 쌓은 프론트엔드 개발자입니다.
                </p>

                <p className="text-base md:text-lg">
                  <span className="font-bold text-white">팀장</span>으로서 6인 규모 프로젝트를
                  <span className="font-bold text-white"> 기간 내 성공적으로 완성</span>한 경험이 있고, <span className="font-bold text-white">팀원</span>으로는
                  <span className="font-bold text-white"> 새로운 기술 스택을 빠르게</span>
                  습득하여 팀 속도에 맞춰합니다.
                </p>

                <p className="text-base md:text-lg">
                  <span className="font-bold text-white">기능 완성</span>을 우선시 하며, 팀의 개발 속도에 맞춰 <span className="font-bold text-white">안정적</span>인 결과물을 만들어 냅니다.
                </p>
              </div>
            </div>

            <div className="space-y-6 ">
              <h2 className="font-paperlogy text-3xl md:text-4xl font-bold text-foreground">Skill & Tools</h2>

              {/* 기술스택 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 기술스택 카드들은 동일하게 유지 */}
                {/* React & JavaScript */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp2/React-Dark.svg" alt="React" width={32} height={32} className="rounded" />
                    <Image src="/images/icons/temp/js.svg" alt="JavaScript" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-purple-400 font-bold">React</span>
                      <br />
                      <span className="text-white">JavaScript</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">함수형 컴포넌트와 Hook 기반 개발, Custom Hook을 통한 재사용 로직 분리, useMemo/useCallback을 활용한 성능 최적화가 가능합니다.</p>
                </div>

                {/* TanStack Query */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp2/reactquery.svg" alt="TanStack Query" width={32} height={32} className="rounded" />
                    <Image src="/images/icons/temp2/jotai.svg" alt="Jotai" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">TanStack Query</span>
                      <br />
                      <span className="text-gray-300">Jotai/Recoil</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">useQuery를 통한 서버 데이터 페칭, 쿼리 키 설계 및 캐시 관리 경험 및 Atomic한 전역 상태 관리 가능합니다.</p>
                </div>

                {/* Django & Spring Boot */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp/django.svg" alt="Django" width={32} height={32} className="rounded" />
                    <Image src="/images/icons/temp/springboot.svg" alt="Spring Boot" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">Django</span>
                      <br />
                      <span className="text-gray-300">Spring Boot</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">Django/Spring Boot를 활용한 RESTful API 설계, 데이터베이스 모델링 및 비즈니스 로직 구현 경험이 있습니다.</p>
                </div>

                {/* Next.js & TypeScript */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp2/NextJS-Dark.svg" alt="Next.js" width={32} height={32} className="rounded" />
                    <Image src="/images/icons/temp2/typescript-blue.svg" alt="TypeScript" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-purple-400 font-bold">Next.js</span>
                      <br />
                      <span className="text-white">TypeScript</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    App Router와 Pages Router를 활용해 SSR/SSG/ISR 구현을 통한 렌더링 최적화, Dynamic Routing, API Routes 방식을 구현할 수 있습니다.
                  </p>
                </div>

                {/* Jest & RTL */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp/jest.svg" alt="Jest" width={32} height={32} className="rounded" />
                    <Image src="/images/icons/temp2/testing-library-seeklogo.svg" alt="React Testing Library" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">Jest</span>
                      <br />
                      <span className="text-gray-300">RTL</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">Jest를 활용한 단위 테스트 설계 및 에러 시나리오 검증이 있으며, 컴포넌트 및 컴포넌트 통합 검증이 가능합니다.</p>
                </div>

                {/* Git */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp/git.svg" alt="Git" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">Git</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">Git Flow 브랜치 전략 운영 경험이 있으며, 코드 리뷰 및 충돌 해결을 통한 안정적인 협업 워크플로우 구축이 가능합니다.</p>
                </div>

                {/* Flutter & Dart */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp/flutter.svg" alt="Flutter" width={32} height={32} className="rounded" />
                    <Image src="/images/icons/temp/dart.svg" alt="Dart" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">Flutter</span>
                      <br />
                      <span className="text-gray-300">Dart</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">위젯 기반 UI 구성, 상태 관리 및 네비게이션 HTTP 통신을 통한 API 연동, 웹과 모바일 자이원 학습을 위한 경험</p>
                </div>

                {/* Tailwind CSS */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp/tailwind.svg" alt="Tailwind CSS" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">Tailwind CSS</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">유틸리티 클래스 기반 스타일링, 반응형 디자인 구현, 커스텀 설정, 애니메이션 및 트랜지션이 가능합니다.</p>
                </div>

                {/* Jira */}
                <div className="bg-gray-800 rounded-lg p-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/icons/temp/jira.svg" alt="Jira" width={32} height={32} className="rounded" />
                    <div>
                      <span className="text-white font-bold">Jira</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">스프린트 계획 및 백로그 관리 경험이 있으며, 애자일 방법론 기반의 효율적인 프로젝트 일정 관리가 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 섹션 */}
      <div className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-paperlogy text-4xl md:text-5xl font-bold text-foreground mb-12">Project !</h2>

          <div className="space-y-8">
            {/* 프로젝트 1: 노코딩 AI 모델 파이프라인 호스팅 플랫폼 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* 왼쪽: 프로젝트 정보 */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">2025.04 - 2025.05 (6주)</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">노코딩 AI 모델</h3>
                  <h4 className="text-2xl md:text-3xl font-bold">
                    <span className="text-purple-400">파이프라인 호스팅</span>
                    <span className="text-foreground"> 플랫폼</span>
                  </h4>
                </div>

                {/* 기술스택 아이콘 */}
                <div className="flex space-x-3">
                  <Image src="/images/icons/temp2/NextJS-Dark.svg" alt="Next.js" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp2/typescript-blue.svg" alt="TypeScript" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp2/reactquery.svg" alt="TanStack Query" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp2/jotai.svg" alt="Jotai" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/jest.svg" alt="Jest" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/tailwind.svg" alt="Tailwind CSS" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/figma.svg" alt="Figma" width={32} height={32} className="rounded" />
                </div>
              </div>

              {/* 오른쪽: 프로젝트 설명 */}
              <div className="lg:col-span-7">
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="text-gray-400 text-sm">팀장, 프론트엔드 ( FE 2인 개발 / 총 6인 )</div>
                  <div className="space-y-3 text-gray-300">
                    <p>Next.js, TypeScript 기반의 반응형 웹 프론트엔드 개발</p>
                    <p>FSD 아키텍처 설계 및 팀 개발 환경 구축</p>
                    <p>Next.js 하이브리드 렌더링 구현으로 페이지별 렌더링 최적화</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 프로젝트 2: 사회초년생 맞춤 예산관리 핀테크 앱 서비스 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* 왼쪽: 프로젝트 정보 */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">2025.03 - 2025.04 (6주)</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">사회초년생 맞춤 예산관리</h3>
                  <h4 className="text-2xl md:text-3xl font-bold">
                    <span className="text-purple-400">핀테크 앱</span>
                    <span className="text-foreground"> 서비스</span>
                  </h4>
                </div>

                {/* 기술스택 아이콘 */}
                <div className="flex space-x-3">
                  <Image src="/images/icons/temp/flutter.svg" alt="Flutter" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/dart.svg" alt="Dart" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/firebase.svg" alt="Firebase" width={32} height={32} className="rounded" />
                </div>
              </div>

              {/* 오른쪽: 프로젝트 설명 */}
              <div className="lg:col-span-7">
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="text-gray-400 text-sm">프론트엔드, 발표 ( FE 3인 개발 / 총 6인 )</div>
                  <div className="space-y-3 text-gray-300">
                    <p>Flutter기반 크로스플랫폼 앱 개발</p>
                    <p>자산 관리 CRUD 시스템 구축 및 Riverpod 상태관리 최적화</p>
                    <p>RSA-AES 하이브리드 암호화 시스템 설계 및 Dio 인터셉터 구현</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 프로젝트 3: WebRTC기반 실시간 화상 스터디 서비스 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* 왼쪽: 프로젝트 정보 */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">2025.01 - 2025.02 (6주)</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">WebRTC기반</h3>
                  <h4 className="text-2xl md:text-3xl font-bold">
                    <span className="text-purple-400">실시간 화상</span>
                    <span className="text-foreground"> 스터디 서비스</span>
                  </h4>
                </div>

                {/* 기술스택 아이콘 */}
                <div className="flex space-x-3">
                  <Image src="/images/icons/temp2/React-Dark.svg" alt="React" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/js.svg" alt="JavaScript" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp2/recoil.svg" alt="Recoil" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/tailwind.svg" alt="Tailwind CSS" width={32} height={32} className="rounded" />
                  <Image src="/images/icons/temp/figma.svg" alt="Figma" width={32} height={32} className="rounded" />
                </div>
              </div>

              {/* 오른쪽: 프로젝트 설명 */}
              <div className="lg:col-span-7">
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="text-gray-400 text-sm">프론트엔드, 발표 ( FE 2인 개발 / 총 6인 )</div>
                  <div className="space-y-3 text-gray-300">
                    <p>React, OpenVidu 기반 실시간 소통 웹 프론트엔드 개발</p>
                    <p>레이아웃 아키텍처 설계 및 팀 개발 환경 구축</p>
                    <p>화면공지, WebRTC 기능, axios API 구축 및 구현</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 블로그 섹션 */}
      <div className="w-full px-4 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-paperlogy text-4xl md:text-5xl font-bold text-white mb-12">Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 블로그 포스트 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image src="/images/blog/blog1.png" alt="블로그 포스트 1" fill className="object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>2025.01.15</span>
                  <span>•</span>
                  <span>Next.js</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">Next.js 15 App Router와 Pages Router 성능 비교 분석</h3>
                <p className="text-sm text-gray-400 line-clamp-3">Next.js 15에서 새롭게 도입된 App Router와 기존 Pages Router의 성능을 실제 프로젝트에서 비교 분석한 내용을 공유합니다...</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Performance</span>
                </div>
              </div>
            </div>

            {/* 블로그 포스트 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image src="/images/blog/blog2.png" alt="블로그 포스트 2" fill className="object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>2025.01.08</span>
                  <span>•</span>
                  <span>TypeScript</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">TypeScript 고급 타입 활용으로 런타임 에러 90% 줄이기</h3>
                <p className="text-sm text-gray-400 line-clamp-3">실무에서 자주 발생하는 런타임 에러를 TypeScript의 고급 타입 시스템을 활용하여 컴파일 타임에 잡는 방법을 소개합니다...</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">TypeScript</span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Best Practice</span>
                </div>
              </div>
            </div>

            {/* 블로그 포스트 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image src="/images/blog/blog3.png" alt="블로그 포스트 3" fill className="object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>2024.12.28</span>
                  <span>•</span>
                  <span>React</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">React 18 Concurrent Features로 UX 개선하기</h3>
                <p className="text-sm text-gray-400 line-clamp-3">React 18의 Concurrent Features인 Suspense, Transition, useDeferredValue를 활용하여 사용자 경험을 개선한 사례를 공유합니다...</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">React 18</span>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">UX</span>
                </div>
              </div>
            </div>

            {/* 블로그 포스트 4 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image src="/images/blog/blog4.png" alt="블로그 포스트 4" fill className="object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>2024.12.20</span>
                  <span>•</span>
                  <span>Testing</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">Jest + RTL로 프론트엔드 테스트 커버리지 80% 달성하기</h3>
                <p className="text-sm text-gray-400 line-clamp-3">
                  실무 프로젝트에서 Jest와 React Testing Library를 활용하여 효과적인 테스트 전략을 수립하고 높은 커버리지를 달성한 경험을 공유합니다...
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">Testing</span>
                  <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Jest</span>
                </div>
              </div>
            </div>

            {/* 블로그 포스트 5 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image src="/images/blog/blog5.png" alt="블로그 포스트 5" fill className="object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>2024.12.15</span>
                  <span>•</span>
                  <span>Performance</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">Core Web Vitals 최적화로 Lighthouse 성능 점수 95점 달성</h3>
                <p className="text-sm text-gray-400 line-clamp-3">실제 운영 중인 웹사이트의 Core Web Vitals를 분석하고 최적화하여 Lighthouse 성능 점수를 대폭 개선한 과정을 상세히 기록했습니다...</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Performance</span>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">Optimization</span>
                </div>
              </div>
            </div>

            {/* 블로그 포스트 6 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <Image src="/images/blog/blog6.png" alt="블로그 포스트 6" fill className="object-cover transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>2024.12.08</span>
                  <span>•</span>
                  <span>Architecture</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-2">FSD 아키텍처 도입으로 대규모 프론트엔드 프로젝트 관리하기</h3>
                <p className="text-sm text-gray-400 line-clamp-3">Feature-Sliced Design 아키텍처를 실제 프로젝트에 적용하면서 겪은 시행착오와 얻은 인사이트를 정리했습니다...</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">Architecture</span>
                  <span className="text-xs bg-teal-600 text-white px-2 py-1 rounded">FSD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
