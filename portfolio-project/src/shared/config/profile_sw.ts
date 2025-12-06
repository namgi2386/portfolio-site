import { TechIconName } from '@/shared/config/icons';

interface SkillItem {
  icon1: TechIconName;
  icon2?: TechIconName;
  name1: string;
  name2?: string;
  type: 'prime' | 'normal';
  description: string;
}

export const SWSKILLS: SkillItem[] = [
  {
    icon1: 'javascript',
    name1: 'JavaScript',
    type: 'prime',
    description: '브라우저와 Node.js 환경의 차이를 이해하고, 각 런타임에 적합한 JavaScript 코드 작성 가능. 꾸준한 알고리즘 학습을 통한 논리적 문제 해결 능력 보유',
  },
  {
    icon1: 'typescript',
    name1: 'TypeScript',
    type: 'prime',
    description: '재귀적 타입 정의를 통한 복잡한 중첩 구조 모델링 능력 보유. 데이터베이스 스키마 기반 자동 타입 생성 시스템 구축 경험으로 백엔드-프론트엔드 간 타입 동기화 가능',
  },
  {
    icon1: 'react',
    name1: 'React',
    type: 'prime',
    description: '중첩 라우팅과 Provider 패턴을 활용한 확장 가능한 SPA 아키텍처 설계 경험. ReactQuery를 통한 서버 상태와 클라이언트 상태관리 도구를 이용하여 분리된 상태 관리 구현 가능',
  },
  {
    icon1: 'nextjs',
    name1: 'Next.js',
    type: 'prime',
    description: 'Next.js 15 App Router 기반 프로젝트 설계 및 Server/Client Components 최적화 경험. FSD 아키텍처 설계로 확장 가능한 프로젝트 구조 구축 가능. Metadata API를 활용한 SEO 최적화 경험',
  },
  {
    icon1: 'tanstack',
    name1: 'TanStack Query',
    type: 'normal',
    description: '서버 상태 관리 및 캐싱을 통한 효율적인 데이터 페칭 구현 가능',
  },
  {
    icon1: 'jotai',
    icon2: 'recoil',
    name1: 'Jotai',
    name2: 'Recoil',
    type: 'normal',
    description: '프로젝트 규모와 요구사항에 따라 적합한 상태 관리 라이브러리를 선택하여 보일러플레이트 최소화 및 성능 최적화 가능',
  },
  {
    icon1: 'supabase',
    name1: 'Supabase',
    type: 'normal',
    description: 'Supabase의 실시간 기능, Authentication, Storage를 활용한 풀스택 애플리케이션 개발',
  },
  {
    icon1: 'vercel',
    name1: 'Vercel',
    type: 'normal',
    description: 'Vercel 플랫폼을 활용한 CI/CD 파이프라인 구축 및 Edge Functions 활용 가능',
  },
  {
    icon1: 'jest',
    icon2: 'rtl',
    name1: 'Jest',
    name2: 'RTL',
    type: 'normal',
    description: 'Jest와 React Testing Library를 활용한 컴포넌트 단위 테스트 경험',
  },
  {
    icon1: 'tailwind',
    name1: 'Tailwind CSS',
    type: 'normal',
    description: '디자인 시스템 기반 UI/UX 개발 가능',
  },
  {
    icon1: 'git',
    name1: 'Git',
    type: 'normal',
    description: '팀장으로서 Git 브랜치 전략(Git Flow) 기반 협업 경험 및 Pull Request 기반 코드 리뷰 참여 경험',
  },
  {
    icon1: 'figma',
    name1: 'Figma',
    type: 'normal',
    description: '디자인 시스템 구축 및 활용을 통한 UI/UX 구현이 가능하여, 디자이너와의 원활한 협업 가능',
  },
  {
    icon1: 'jira',
    name1: 'Jira',
    type: 'normal',
    description: '팀장으로서 Jira를 통한 애자일 스크럼 방식의 프로젝트 관리 및 백로그 관리 경험 보유',
  },
  {
    icon1: 'flutter',
    icon2: 'dart',
    name1: 'Flutter',
    name2: 'Dart',
    type: 'normal',
    description: '위젯 기반 UI 구성, 상태 관리 및 네비게이션 HTTP 통신을 통한 API 연동, 웹과 모바일 자이원 학습을 위한 경험',
  },
  {
    icon1: 'django',
    name1: 'Django',
    type: 'normal',
    description: 'Django를 활용한 RESTful API 설계, 데이터베이스 모델링 및 비즈니스 로직 구현 경험',
  },
];
