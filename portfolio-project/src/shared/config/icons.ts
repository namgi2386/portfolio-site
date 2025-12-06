/**
 * 기술 스택 아이콘 경로 매핑
 * FSD 구조에 따라 shared/config에 위치
 */

export const TECH_ICONS = {
  // Frontend Frameworks & Libraries
  react: '/images/icons/temp2/React-Dark.svg',
  nextjs: '/images/icons/temp2/NextJS-Dark.svg',

  // Languages
  javascript: '/images/icons/temp/js.svg',
  typescript: '/images/icons/temp2/typescript-blue.svg',
  dart: '/images/icons/temp/dart.svg',

  // State Management
  jotai: '/images/icons/temp2/jotai.svg',
  recoil: '/images/icons/temp2/recoil.svg',
  tanstack: '/images/icons/temp/tanstack.svg',
  reactquery: '/images/icons/temp2/reactquery.svg',

  // Backend Frameworks
  django: '/images/icons/temp/django.svg',
  springboot: '/images/icons/temp/springboot.svg',

  // Testing
  jest: '/images/icons/temp/jest.svg',
  rtl: '/images/icons/temp2/testing-library-seeklogo.svg',
  'testing-library': '/images/icons/temp2/testing-library-seeklogo.svg',

  // Mobile
  flutter: '/images/icons/temp/flutter.svg',

  // Styling
  tailwind: '/images/icons/temp/tailwind.svg',

  // Tools & Services
  git: '/images/icons/temp/git.svg',
  jira: '/images/icons/temp/jira.svg',
  figma: '/images/icons/temp/figma.svg',
  firebase: '/images/icons/temp/firebase.svg',
  supabase: '/images/icons/supabase-logo/supabase.svg',
  vercel: '/images/icons/temp2/vercel.svg',
  github: '/images/icons/temp2/Github-dark.svg',
} as const;

export type TechIconName = keyof typeof TECH_ICONS;

/**
 * 아이콘 이름에 대한 기본 alt 텍스트 매핑
 */
export const TECH_ICON_LABELS: Record<TechIconName, string> = {
  react: 'React',
  nextjs: 'Next.js',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  dart: 'Dart',
  jotai: 'Jotai',
  recoil: 'Recoil',
  tanstack: 'TanStack Query',
  reactquery: 'React Query',
  django: 'Django',
  springboot: 'Spring Boot',
  jest: 'Jest',
  rtl: 'React Testing Library',
  'testing-library': 'React Testing Library',
  flutter: 'Flutter',
  tailwind: 'Tailwind CSS',
  git: 'Git',
  jira: 'Jira',
  figma: 'Figma',
  firebase: 'Firebase',
  supabase: 'Supabase',
  vercel: 'Vercel',
  github: 'GitHub',
};
