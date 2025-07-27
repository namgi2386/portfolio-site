import SectionBox, { Bold, SectionBoxSmall } from '@/shared/ui/SectionBox';
import Image from 'next/image';

export default function ProfileSection() {
  return (
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
              <SectionBoxSmall>
                <div className="space-y-3 lg:space-y-4">
                  <Bold>SQLD</Bold>
                  <p>2024.03</p>
                  <Bold>정보처리기사</Bold>
                  <p>2024.06</p>
                  <Bold>삼성 청년 SW 아카데미 12기</Bold>
                  <div>
                    <p>2024.07.01 - 2025.05.29</p>
                    <p>성적 우수 (1등)</p>
                  </div>
                </div>
              </SectionBoxSmall>
            </div>
          </div>
        </div>

        {/* 오른쪽: 자기소개 */}
        <div className="lg:col-span-9 space-y-6">
          {/* 나머지 코드는 동일 */}
          <SectionBox>
            <div className="space-y-6">
              <div>
                <Bold>React, Next.js, TypeScript</Bold> 중심의 웹 개발 역량을 쌓은 프론트엔드 개발자입니다.
              </div>
              <div>
                <Bold>팀장</Bold>으로서 6인 규모 프로젝트를
                <Bold> 기간 내 성공적으로 완성</Bold>한 경험이 있고, <Bold>팀원</Bold>으로는
                <Bold> 새로운 기술 스택을 빠르게</Bold>
                습득하여 팀 속도에 맞춰합니다.
              </div>
              <div>
                <Bold>기능 완성</Bold>을 우선시 하며, 팀의 개발 속도에 맞춰 <Bold>안정적</Bold>인 결과물을 만들어 냅니다.
              </div>
            </div>
          </SectionBox>

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
  );
}
