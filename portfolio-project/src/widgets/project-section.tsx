import SectionBox from '@/shared/ui/section-box/SectionBox';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectBoxProps {
  children: ReactNode;
  className?: string;
}

function ProjectBox({ children, className = '' }: ProjectBoxProps) {
  return <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 ${className}`}>{children}</div>;
}

export default function ProjectSection() {
  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Project !</h2>

        <div className="space-y-8">
          {/* 프로젝트 1: 노코딩 AI 모델 파이프라인 호스팅 플랫폼 */}
          <ProjectBox>
            {/* 왼쪽: 프로젝트 정보 */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-no42 rounded-full"></div>
                <span className="text-no2 dark:text-no3 text-sm">2025.04 - 2025.05 (6주)</span>
              </div>

              <div className="space-y-2 hover:text-">
                <Link aria-label="노코딩 AI 모델 프로젝트 이동하기" title="노코딩 AI 모델 프로젝트 이동하기" href="projects/1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block">노코딩 AI 모델 </h3>
                  <h4 className="text-2xl md:text-3xl font-bold inline-block">
                    <span className="text-custompurple">파이프라인 호스팅</span>
                    <span className="text-foreground"> 플랫폼</span>
                  </h4>
                </Link>
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
              <Link aria-label="노코딩 AI 모델 프로젝트 이동하기" title="노코딩 AI 모델 프로젝트 이동하기" href="projects/1">
                <SectionBox>
                  <div className="space-y-4 text-no3">
                    <div>팀장, 프론트엔드 ( FE 2인 개발 / 총 6인 )</div>
                    <div className="space-y-2 text-foreground">
                      <p>Next.js, TypeScript 기반의 반응형 웹 프론트엔드 개발</p>
                      <p>FSD 아키텍처 설계 및 팀 개발 환경 구축</p>
                      <p>Next.js 하이브리드 렌더링 구현으로 페이지별 렌더링 최적화</p>
                    </div>
                  </div>
                </SectionBox>
              </Link>
            </div>
          </ProjectBox>

          {/* 프로젝트 2: 사회초년생 맞춤 예산관리 핀테크 앱 서비스 */}
          <ProjectBox>
            {/* 왼쪽: 프로젝트 정보 */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-no42 rounded-full"></div>
                <span className="text-no2 dark:text-no3 text-sm">2025.03 - 2025.04 (6주)</span>
              </div>

              <div className="space-y-2">
                <Link aria-label="사회초년생 맞춤 예산관리 프로젝트 이동하기" title="사회초년생 맞춤 예산관리 프로젝트 이동하기" href="projects/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block">사회초년생 맞춤 예산관리</h3>
                  <h4 className="text-2xl md:text-3xl font-bold inline-block">
                    <span className="text-custompurple">핀테크 앱</span>
                    <span className="text-foreground"> 서비스</span>
                  </h4>
                </Link>
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
              <Link aria-label="사회초년생 맞춤 예산관리 프로젝트 이동하기" title="사회초년생 맞춤 예산관리 프로젝트 이동하기" href="projects/2">
                <SectionBox>
                  <div className="space-y-4 text-no3">
                    <div>프론트엔드, 발표 ( FE 3인 개발 / 총 6인 )</div>
                    <div className="space-y-2 text-foreground">
                      <p>Flutter기반 크로스플랫폼 앱 개발</p>
                      <p>자산 관리 CRUD 시스템 구축 및 Riverpod 상태관리 최적화</p>
                      <p>RSA-AES 하이브리드 암호화 시스템 설계 및 Dio 인터셉터 구현</p>
                    </div>
                  </div>
                </SectionBox>
              </Link>
            </div>
          </ProjectBox>

          {/* 프로젝트 3: WebRTC기반 실시간 화상 스터디 서비스 */}
          <ProjectBox>
            {/* 왼쪽: 프로젝트 정보 */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-no42 rounded-full"></div>
                <span className="text-no2 dark:text-no3 text-sm">2025.01 - 2025.02 (6주)</span>
              </div>

              <div className="space-y-2">
                <Link aria-label="실시간 화상 스터디 프로젝트 이동하기" title="실시간 화상 스터디 프로젝트 이동하기" href="projects/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block">WebRTC기반</h3>
                  <h4 className="text-2xl md:text-3xl font-bold inline-block">
                    <span className="text-custompurple">실시간 화상</span>
                    <span className="text-foreground"> 스터디 서비스</span>
                  </h4>
                </Link>
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
              <Link aria-label="실시간 화상 스터디 프로젝트 이동하기" title="실시간 화상 스터디 프로젝트 이동하기" href="projects/3">
                <SectionBox>
                  <div className="space-y-4 text-no3">
                    <div className="">프론트엔드, 발표 ( FE 2인 개발 / 총 6인 )</div>
                    <div className="space-y-2 text-foreground ">
                      <p>React, OpenVidu 기반 실시간 소통 웹 프론트엔드 개발</p>
                      <p>레이아웃 아키텍처 설계 및 팀 개발 환경 구축</p>
                      <p>화면공지, WebRTC 기능, axios API 구축 및 구현</p>
                    </div>
                  </div>
                </SectionBox>
              </Link>
            </div>
          </ProjectBox>
        </div>
      </div>
    </div>
  );
}
