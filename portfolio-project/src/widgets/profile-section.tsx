import SectionBox, { Bold, SectionBoxSmall, SectionBoxStack } from '@/shared/ui/section-box/SectionBox';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoPhonePortrait } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { SiVelog } from 'react-icons/si';

export default function ProfileSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 왼쪽: 프로필 이미지와 기본 정보 */}
        <div className="lg:col-span-3">
          {/* lg 미만에서는 가로 배치 */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 h-full">
            {/* 프로필 이미지 */}
            <div className="col-span-1 w-full aspect-square rounded-lg overflow-hidden relative">
              <Image src="/images/profiles/imnamgi_port_05.png" alt="프로필 사진" fill className="object-cover" priority={true} sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            {/* 텍스트 정보들 */}
            <div className="col-span-1 lg:col-span-1 space-y-4 lg:space-y-6 flex flex-col justify-between">
              {/* 이름과 직업 */}
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">프론트엔드 개발자</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custompurple">임남기</h3>
              </div>

              {/* 연락처 정보 */}
              <SectionBoxSmall>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex gap-2">
                    <div className="bg-foreground rounded-full p-0.5">
                      <MdEmail className="text-lg text-background dark:text-no2" />
                    </div>
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap">happynj2697@gmail.com</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-foreground rounded-full p-0.5">
                      <IoPhonePortrait className="text-lg text-background dark:text-no2" />
                    </div>
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap">010-2386-4855</span>
                  </div>
                  <div className="flex gap-2">
                    <SiVelog className="text-2xl text-foreground" />
                    <span>Blog</span>
                    <Link
                      aria-label="블로그 이동하기"
                      title="블로그 이동하기"
                      href="https://velog.io/@happynj2697/posts"
                      className="text-custompurple font-semibold cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      보러가기
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <FaGithub className="text-2xl text-foreground" />
                    <span>GitHub</span>
                    <Link
                      aria-label="깃허브 이동하기"
                      title="깃허브 이동하기"
                      href="https://github.com/namgi2386"
                      className="text-custompurple font-semibold cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      보러가기
                    </Link>
                  </div>
                </div>
              </SectionBoxSmall>

              {/* 경력 정보 */}
              <SectionBoxSmall>
                <div className="space-y-3 lg:space-y-4">
                  <Bold>SQLD</Bold>
                  <p>2024.03</p>
                  <Bold>정보처리기사</Bold>
                  <p>2024.06</p>
                  <Bold>삼성 청년 SW 아카데미 12기</Bold>
                  <div>
                    <p>2024.07.01 - 2025.06.30</p>
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
                <Bold> 새로운 기술 스택을 빠르게 </Bold>
                습득하여 팀 속도에 맞춰합니다.
              </div>
              <div>
                <Bold>기능 완성</Bold>을 우선시 하며, 팀의 개발 속도에 맞춰 <Bold>안정적</Bold>인 결과물을 만들어 냅니다.
              </div>
            </div>
          </SectionBox>

          <div className="space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skill & Tools</h2>

            {/* 기술스택 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* React & JavaScript */}
              <SectionBoxStack icon1="react" icon2="javascript" name1="React" name2="JavaScript" type="prime">
                <span>함수형 컴포넌트와 Hook 기반 개발, Custom Hook을 통한 재사용 로직 분리, useMemo/useCallback을 활용한 성능 최적화가 가능합니다.</span>
              </SectionBoxStack>

              {/* TanStack Query */}
              <SectionBoxStack icon1="tanstack" icon2="jotai" name1="TanStack Query" name2="Jotai" type="normal">
                <p>useQuery를 통한 서버 데이터 페칭, 쿼리 키 설계 및 캐시 관리 경험 및 Atomic한 전역 상태 관리 가능합니다.</p>
              </SectionBoxStack>

              {/* Django & Spring Boot */}
              <SectionBoxStack icon1="django" icon2="springboot" name1="Django" name2="Spring Boot" type="normal">
                <p>Django/Spring Boot를 활용한 RESTful API 설계, 데이터베이스 모델링 및 비즈니스 로직 구현 경험이 있습니다.</p>
              </SectionBoxStack>
              {/* Next.js & TypeScript */}
              <SectionBoxStack icon1="nextjs" icon2="typescript" name1="Next.js" name2="TypeScript" type="prime">
                <p>App Router와 Pages Router를 활용해 SSR/SSG/ISR 구현을 통한 렌더링 최적화, Dynamic Routing, API Routes 방식을 구현할 수 있습니다.</p>
              </SectionBoxStack>

              {/* Jest & RTL */}
              <SectionBoxStack icon1="jest" icon2="rtl" name1="Jest" name2="RTL" type="normal">
                <p>Jest를 활용한 단위 테스트 설계 및 에러 시나리오 검증이 있으며, 컴포넌트 및 컴포넌트 통합 검증이 가능합니다.</p>
              </SectionBoxStack>

              {/* Git */}
              <SectionBoxStack icon1="git" name1="Git" type="normal">
                <p>Git Flow 브랜치 전략 운영 경험이 있으며, 코드 리뷰 및 충돌 해결을 통한 안정적인 협업 워크플로우 구축이 가능합니다.</p>
              </SectionBoxStack>

              {/* Flutter & Dart */}
              <SectionBoxStack icon1="flutter" icon2="dart" name1="Flutter" name2="Dart" type="normal">
                <p>위젯 기반 UI 구성, 상태 관리 및 네비게이션 HTTP 통신을 통한 API 연동, 웹과 모바일 자이원 학습을 위한 경험</p>
              </SectionBoxStack>

              {/* Tailwind CSS */}
              <SectionBoxStack icon1="tailwind" name1="Tailwind CSS" type="normal">
                <p>유틸리티 클래스 기반 스타일링, 반응형 디자인 구현, 커스텀 설정, 애니메이션 및 트랜지션이 가능합니다.</p>
              </SectionBoxStack>

              {/* Jira */}
              <SectionBoxStack icon1="jira" name1="Jira" type="normal">
                <p>스프린트 계획 및 백로그 관리 경험이 있으며, 애자일 방법론 기반의 효율적인 프로젝트 일정 관리가 가능합니다.</p>
              </SectionBoxStack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
