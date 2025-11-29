# 🌟 Portfolio Website - 임남기

> Next.js 15 App Router 기반의 현대적인 개인 포트폴리오 웹사이트

[![Live Demo](https://img.shields.io/badge/Live%20Demo-imnammm.me-brightgreen)](https://www.imnammm.me)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)

## 📋 프로젝트 소개

프론트엔드 개발자 임남기의 개인 포트폴리오 웹사이트입니다. Next.js 15의 최신 App Router를 활용하여 현대적인 웹 애플리케이션을 구현했으며, 서버 컴포넌트와 클라이언트 컴포넌트를 효율적으로 분리하여 최적의 성능을 달성했습니다.

### ✨ 주요 특징

- 🚀 **Next.js 15 App Router** - 최신 패러다임 완전 도입
- 🎨 **반응형 디자인** - 모든 디바이스에서 최적화된 경험
- ⚡ **성능 최적화** - Lighthouse 90+ 점수 달성
- 🌙 **다크/라이트 모드** - 시스템 테마 자동 감지
- 📱 **PWA 지원** - 모바일 앱과 같은 사용자 경험
- 🔍 **SEO 최적화** - 완벽한 메타데이터 및 사이트맵 구성

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Animation**: GSAP 3.13
- **Theme**: next-themes 0.4.6
- **Icons**: React Icons 5.5.0

### Backend & Database
- **Database**: Supabase (PostgreSQL)
- **API**: Next.js API Routes
- **Authentication**: Supabase Auth

### Testing & Quality
- **Testing**: Jest 30.0.5 + React Testing Library 16.3.0
- **Type Checking**: TypeScript (strict mode)
- **Linting**: ESLint + Next.js config
- **Code Formatting**: Prettier

### Deployment & Monitoring
- **Hosting**: Vercel
- **Domain**: Custom domain (imnammm.me)
- **Analytics**: Vercel Analytics
- **Performance**: Core Web Vitals monitoring

## 🎯 주요 기능

### 📚 블로그 시스템
- Velog API 연동을 통한 자동 포스트 동기화
- 핀 고정, 날짜순 정렬 등 다양한 필터링 옵션
- 반응형 카드 레이아웃으로 최적화된 UI

### 💝 피드백 시스템
- 다단계 피드백 수집 (평점, 코멘트, 채용정보, 버그리포트)
- 관계형 데이터베이스 설계로 확장 가능한 구조
- 실시간 데이터 검증 및 에러 처리

### 💖 좋아요 시스템
- 낙관적 업데이트로 즉시 반응하는 UI
- localStorage를 활용한 중복 방지
- 실시간 카운팅 및 히스토리 추적

### 🎨 프로젝트 쇼케이스
- 인터셉팅 라우트를 활용한 모달 시스템
- 동적 라우팅으로 각 프로젝트 상세 페이지
- GSAP 애니메이션으로 부드러운 사용자 경험

---

# 🔧 트러블 슈팅 (Troubleshooting)

> 프로젝트 개발 과정에서 마주친 기술적 도전과 해결 방안들을 정리했습니다.

## 🌐 Next.js App Router 관련 이슈

### 1. 서버/클라이언트 컴포넌트 경계 설정

**문제 상황**
```typescript
// ❌ 문제: 서버 컴포넌트에서 상태 관리 시도
export default function BlogSection() {
  const [blogs, setBlogs] = useState([]); // Error: useState는 클라이언트에서만 사용 가능
  return <div>{/* 블로그 렌더링 */}</div>;
}
```

**해결 방안**
```typescript
// ✅ 해결: 적절한 컴포넌트 분리
// 서버 컴포넌트 - 데이터 fetching
export default async function BlogSection() {
  const blogs = await getBlogsFromAPI();
  return <BlogClientComponent initialBlogs={blogs} />;
}

// 클라이언트 컴포넌트 - 상태 관리
'use client';
export default function BlogClientComponent({ initialBlogs }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  // 상호작용 로직
}
```

**학습 포인트**
- 서버 컴포넌트는 데이터 fetching과 초기 렌더링에 집중
- 클라이언트 컴포넌트는 상호작용과 상태 관리에 집중
- 'use client' 지시문을 최소한으로 사용하여 번들 크기 최적화

### 2. 하이드레이션 불일치 문제

**문제 상황**
```typescript
// ❌ 문제: 서버와 클라이언트 렌더링 결과 불일치
export default function ThemeToggle() {
  const { theme } = useTheme();
  return <div>{theme === 'dark' ? '🌙' : '☀️'}</div>; // 하이드레이션 에러
}
```

**해결 방안**
```typescript
// ✅ 해결: 조건부 렌더링으로 안전한 하이드레이션
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>🌟</div>; // 로딩 상태

  return <div>{theme === 'dark' ? '🌙' : '☀️'}</div>;
}
```

**학습 포인트**
- 브라우저 전용 API나 상태는 클라이언트에서만 접근
- `mounted` 상태로 하이드레이션 완료 후 렌더링
- `suppressHydrationWarning` 속성 신중한 사용

### 3. 병렬 라우트와 인터셉팅 라우트 구현

**문제 상황**
- 모달과 페이지를 동시에 지원하는 복잡한 라우팅 구조 필요
- URL 상태와 모달 상태의 동기화 문제

**해결 방안**
```typescript
// app/layout.tsx - 병렬 라우트 설정
export default function RootLayout({
  children,
  modal, // 병렬 슬롯
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        {modal} {/* 모달이 동시에 렌더링 */}
      </body>
    </html>
  );
}

// app/@modal/(.)projects/[id]/page.tsx - 인터셉팅 라우트
export default function InterceptedProjectModal({ params }) {
  return (
    <Modal>
      <ProjectDetail id={params.id} />
    </Modal>
  );
}

// app/projects/[id]/page.tsx - 일반 페이지
export default function ProjectPage({ params }) {
  return <ProjectDetail id={params.id} />; // 같은 컴포넌트 재사용
}
```

**학습 포인트**
- 병렬 라우트로 모달과 페이지 동시 렌더링 가능
- 인터셉팅 라우트로 URL 변경 없이 모달 표시
- 컴포넌트 재사용으로 코드 중복 방지

### 4. API Routes에서 타입 안전성 확보

**문제 상황**
```typescript
// ❌ 문제: 타입이 없는 API 응답
export async function POST(request: Request) {
  const body = await request.json(); // any 타입
  // 타입 검증 없이 데이터 사용
  const result = await saveData(body);
  return Response.json(result);
}
```

**해결 방안**
```typescript
// ✅ 해결: 완전한 타입 안전성 확보
interface FeedbackRequest {
  ratings?: { portfolioScore: number; technicalScore: number; designScore: number; };
  comment_text?: string;
  bug_description?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: { code: string; message: string; };
}

export async function POST(request: Request): Promise<NextResponse<ApiResponse<{ feedback_id: string }>>> {
  try {
    const body: FeedbackRequest = await request.json();
    
    // 입력 검증
    if (!body.ratings && !body.comment_text && !body.bug_description) {
      return NextResponse.json({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: '최소 하나의 데이터가 필요합니다.' }
      });
    }

    const result = await saveFeedback(body);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: { code: 'SERVER_ERROR', message: '서버 오류가 발생했습니다.' }
    });
  }
}
```

**학습 포인트**
- API 요청/응답에 대한 완전한 타입 정의
- 런타임 검증과 타입 검증의 조합
- 일관된 에러 응답 형식으로 클라이언트 처리 간소화

## 🧪 테스팅 관련 이슈

### 5. Next.js 환경에서 Jest 설정 최적화

**문제 상황**
```bash
# ❌ 문제: 모듈 해석 오류
FAIL src/components/Button.test.tsx
● Test suite failed to run
Cannot resolve module '@/components/Button' from 'src/components/Button.test.tsx'
```

**해결 방안**
```typescript
// jest.config.ts - Next.js 전용 설정
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Next.js 앱 루트 디렉토리
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // 모듈 매핑 설정
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/public/$1',
  },
  
  // Next.js 특화 설정
  testPathIgnorePatterns: ['.next/', 'node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};

export default createJestConfig(config);
```

**학습 포인트**
- `nextJest`로 Next.js 환경 자동 설정
- 절대 경로 imports 매핑 필요
- next/babel preset으로 Next.js 전용 변환 적용

### 6. 비동기 컴포넌트 테스트 전략

**문제 상황**
```typescript
// ❌ 문제: 비동기 데이터 로딩 테스트 실패
test('블로그 목록 렌더링', () => {
  render(<BlogList />);
  expect(screen.getByText('블로그 제목')).toBeInTheDocument(); // 즉시 실패
});
```

**해결 방안**
```typescript
// ✅ 해결: waitFor와 적절한 모킹
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('블로그 목록 렌더링', async () => {
  // API 모킹
  mockedAxios.get.mockResolvedValue({
    data: { success: true, data: [{ id: 1, title: '테스트 블로그' }] }
  });

  render(<BlogList />);
  
  // 로딩 상태 확인
  expect(screen.getByText('로딩 중...')).toBeInTheDocument();
  
  // 비동기 렌더링 대기
  await waitFor(() => {
    expect(screen.getByText('테스트 블로그')).toBeInTheDocument();
  });
  
  // API 호출 검증
  expect(mockedAxios.get).toHaveBeenCalledWith('/api/blog');
});
```

**학습 포인트**
- `waitFor`로 비동기 상태 변경 대기
- 실제 API 대신 모킹된 응답 사용
- 로딩 상태와 완료 상태 모두 테스트

### 7. 커스텀 훅의 복잡한 상태 관리 테스트

**문제 상황**
```typescript
// useLike 훅에서 낙관적 업데이트와 에러 롤백 테스트 필요
// 복잡한 상태 변화와 부작용(localStorage, API) 검증
```

**해결 방안**
```typescript
// ✅ 해결: renderHook과 act로 정교한 훅 테스트
import { renderHook, act, waitFor } from '@testing-library/react';
import { useLike } from '@/features/likes/model/useLike';

describe('useLike 에러 처리', () => {
  test('API 실패 시 상태 롤백', async () => {
    // 초기 데이터 모킹
    mockedAxios.get.mockResolvedValue({
      data: { success: true, data: { count: 10 } }
    });
    
    // API 실패 모킹
    mockedAxios.post.mockRejectedValue(new Error('Network Error'));

    const { result } = renderHook(() => useLike());
    
    // 초기 로딩 대기
    await waitFor(() => {
      expect(result.current.heartCount).toBe(10);
    });

    // 좋아요 액션 실행
    act(() => {
      result.current.clickThatLike();
    });

    // 낙관적 업데이트 확인
    expect(result.current.isLiked).toBe(true);
    expect(result.current.heartCount).toBe(11);
    expect(localStorage.getItem('loveActually')).toBe('true');

    // 에러 발생 후 롤백 확인
    await waitFor(() => {
      expect(result.current.isLiked).toBe(false);
      expect(result.current.heartCount).toBe(10);
      expect(localStorage.getItem('loveActually')).toBe('false');
    });
  });
});
```

**학습 포인트**
- `renderHook`으로 훅 독립 테스트
- `act`로 상태 변경 액션 감싸기
- 낙관적 업데이트와 에러 롤백 시나리오 모두 검증

### 8. Provider가 필요한 컴포넌트 테스트

**문제 상황**
```typescript
// ❌ 문제: ThemeProvider 없이 테스트 시 에러
test('ThemeToggle 버튼 렌더링', () => {
  render(<ThemeToggle />); // Error: useTheme must be used within ThemeProvider
});
```

**해결 방안**
```typescript
// ✅ 해결: 테스트용 Provider Wrapper 생성
import { ThemeProvider } from 'next-themes';

function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

test('ThemeToggle 버튼 동작', async () => {
  const user = userEvent.setup();
  
  render(
    <TestWrapper>
      <ThemeToggle />
    </TestWrapper>
  );

  const button = screen.getByRole('button', { name: '테마 변경' });
  expect(button).toBeInTheDocument();

  await user.click(button);
  expect(button).toBeInTheDocument(); // 클릭 후에도 존재
});
```

**학습 포인트**
- 테스트용 Provider Wrapper 패턴 활용
- 실제 사용 환경과 동일한 Context 제공
- `userEvent.setup()`으로 사용자 상호작용 시뮬레이션

## 🚀 배포 및 성능 최적화 이슈

### 9. Vercel 배포 시 환경 변수 관리

**문제 상황**
```bash
# ❌ 문제: 환경 변수 누락으로 빌드 실패
Error: Missing environment variable: SUPABASE_URL
Build failed in Vercel deployment
```

**해결 방안**
```typescript
// ✅ 해결: 환경 변수 검증 로직
// src/shared/lib/supabase/server.ts
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(`Missing Supabase environment variables:
    SUPABASE_URL: ${supabaseUrl ? '✓' : '✗'}
    SUPABASE_SERVICE_ROLE_KEY: ${supabaseServiceKey ? '✓' : '✗'}
  `);
}

// Vercel 환경 변수 설정 가이드 추가
// vercel.json
{
  "env": {
    "SUPABASE_URL": "@supabase-url",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase-service-key"
  }
}
```

**해결 체크리스트**
- [ ] Vercel Dashboard에서 환경 변수 설정 확인
- [ ] Production/Preview/Development 환경별 변수 설정
- [ ] 빌드 시점에 환경 변수 검증 로직 추가
- [ ] 민감한 정보는 Vercel Secret 사용

**학습 포인트**
- 환경 변수 검증을 앱 시작 시점에 실행
- 각 배포 환경별로 다른 변수 설정 가능
- 에러 메시지에 디버깅 정보 포함

### 10. 이미지 최적화 및 외부 도메인 설정

**문제 상황**
```bash
# ❌ 문제: 외부 이미지 로드 실패
Error: Invalid src prop on `next/image`, hostname "velog.velcdn.com" is not configured
```

**해결 방안**
```typescript
// ✅ 해결: next.config.ts에서 외부 도메인 허용
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co', // 와일드카드 사용 가능
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // 이미지 품질 및 크기 최적화
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
```

**성능 최적화 추가 설정**
```typescript
// 이미지 컴포넌트 사용 예시
import Image from 'next/image';

export default function BlogCard({ blog }) {
  return (
    <Image
      src={blog.thumbnail}
      alt={blog.title}
      width={400}
      height={250}
      priority={blog.isPinned} // 중요한 이미지 우선 로드
      placeholder="blur" // 로딩 중 블러 효과
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." // 임시 이미지
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

**학습 포인트**
- 외부 이미지 도메인은 반드시 설정 필요
- 와일드카드로 서브도메인 일괄 허용 가능
- priority와 sizes 속성으로 로딩 성능 최적화

### 11. Core Web Vitals 최적화

**문제 상황**
- LCP (Largest Contentful Paint) 지연
- CLS (Cumulative Layout Shift) 발생
- FID (First Input Delay) 개선 필요

**해결 방안**
```typescript
// ✅ 해결 1: LCP 최적화 - 중요 리소스 preload
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* 중요 폰트 preload */}
        <link
          rel="preload"
          href="/fonts/PaperlogyTTF/woff/Paperlogy-5Regular-sub.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* 중요 이미지 preload */}
        <link
          rel="preload"
          href="/images/profiles/imnamgi_port_01.png"
          as="image"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

// ✅ 해결 2: CLS 방지 - 고정 크기 지정
export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64"> {/* 고정 크기 컨테이너 */}
      <Image
        src="/images/profiles/imnamgi_port_01.png"
        alt="임남기 프로필"
        fill
        className="object-cover rounded-full"
        sizes="256px"
        priority
      />
    </div>
  );
}

// ✅ 해결 3: FID 개선 - 코드 스플리팅
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false, // 클라이언트에서만 로드
  loading: () => <div>Loading...</div>
});
```

**측정 및 모니터링**
```typescript
// web-vitals 라이브러리로 성능 측정
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Vercel Analytics나 Google Analytics로 전송
  console.log(metric);
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onFCP(sendToAnalytics);
onLCP(sendToAnalytics);
onTTFB(sendToAnalytics);
```

**학습 포인트**
- 중요 리소스는 preload로 우선 로드
- 이미지와 컨테이너에 고정 크기 지정으로 CLS 방지
- 무거운 컴포넌트는 동적 import로 분리

### 12. 번들 크기 최적화

**문제 상황**
```bash
# ❌ 문제: 번들 크기 과다로 초기 로딩 지연
Route (app)                              Size     First Load JS
┌ ○ /                                    15.2 kB        98.1 kB  # 너무 큼
├ ○ /projects/[id]                       2.45 kB        85.4 kB
└ ○ /feedback                            8.1 kB         91.0 kB
```

**해결 방안**
```typescript
// ✅ 해결: 동적 import와 코드 스플리팅
// 1. 라이브러리 동적 로드
const loadGSAP = async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  return gsap;
};

// 2. 컴포넌트 지연 로드
const AnimatedSection = dynamic(() => import('./AnimatedSection'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
});

// 3. 조건부 import
export default function HomePage() {
  const handleAnimation = async () => {
    if (typeof window !== 'undefined') {
      const gsap = await loadGSAP();
      gsap.to('.element', { opacity: 1, duration: 1 });
    }
  };

  return (
    <div>
      <MainContent />
      <AnimatedSection onTrigger={handleAnimation} />
    </div>
  );
}

// 4. Tree shaking 최적화
// ❌ 전체 라이브러리 import
import * as icons from 'react-icons/all';

// ✅ 필요한 아이콘만 import
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
```

**번들 분석 도구**
```bash
# 번들 분석
npm install --save-dev @next/bundle-analyzer

# next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# 실행
ANALYZE=true npm run build
```

**학습 포인트**
- 무거운 라이브러리는 필요할 때만 동적 로드
- Tree shaking을 위해 named import 사용
- Bundle analyzer로 불필요한 의존성 식별

## 💾 데이터베이스 및 API 관련 이슈

### 13. Supabase 연결 및 타입 안전성 확보

**문제 상황**
```typescript
// ❌ 문제: 타입이 없는 Supabase 쿼리
const { data, error } = await supabase
  .from('feedback')
  .select('*'); // any 타입 반환

// 런타임에서만 발견되는 오타
const result = data.feebdack_id; // 오타가 있어도 컴파일 에러 없음
```

**해결 방안**
```typescript
// ✅ 해결: 완전한 타입 정의와 검증
// 1. 데이터베이스 스키마 타입 정의
interface Database {
  public: {
    Tables: {
      feedback: {
        Row: {
          feedback_id: string;
          has_rating: boolean;
          has_comment: boolean;
          created_at: string;
        };
        Insert: {
          feedback_id?: string;
          has_rating: boolean;
          has_comment: boolean;
          created_at?: string;
        };
        Update: {
          feedback_id?: string;
          has_rating?: boolean;
          has_comment?: boolean;
          created_at?: string;
        };
      };
    };
  };
}

// 2. 타입이 적용된 Supabase 클라이언트
import { createClient } from '@supabase/supabase-js';

export function createServerClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}

// 3. 타입 안전한 쿼리 사용
export async function getFeedback(): Promise<Database['public']['Tables']['feedback']['Row'][]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from('feedback') // 테이블명 자동완성
    .select('feedback_id, has_rating, has_comment, created_at') // 컬럼명 검증
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Feedback 조회 실패: ${error.message}`);
  }

  return data; // 완전한 타입 추론
}
```

**추가 안전 장치**
```typescript
// 4. 런타임 검증 추가
import { z } from 'zod';

const FeedbackSchema = z.object({
  feedback_id: z.string().uuid(),
  has_rating: z.boolean(),
  has_comment: z.boolean(),
  created_at: z.string().datetime(),
});

export async function getFeedbackSafe() {
  const data = await getFeedback();
  return data.map(item => FeedbackSchema.parse(item)); // 런타임 검증
}
```

**학습 포인트**
- TypeScript 제네릭으로 Supabase 타입 안전성 확보
- 컴파일 타임과 런타임 검증 조합
- 데이터베이스 스키마 변경 시 타입도 함께 업데이트

### 14. 복잡한 관계형 데이터 처리

**문제 상황**
```typescript
// ❌ 문제: 여러 테이블에 걸친 트랜잭션 처리 부족
export async function saveFeedback(data) {
  // 각각 독립적으로 실행 - 중간에 실패하면 일관성 깨짐
  const feedback = await supabase.from('feedback').insert(data.main);
  const ratings = await supabase.from('feedback_ratings').insert(data.ratings);
  const extras = await supabase.from('feedback_extras').insert(data.extras);
}
```

**해결 방안**
```typescript
// ✅ 해결: 완전한 트랜잭션과 에러 처리
interface FeedbackData {
  ratings?: {
    portfolioScore: number;
    technicalScore: number;
    designScore: number;
  };
  comment_text?: string;
  bug_description?: string;
  company_name?: string;
  job_link?: string;
}

export async function saveFeedbackTransaction(data: FeedbackData) {
  const supabase = createServerClient();
  
  try {
    // 1. 메인 피드백 레코드 생성
    const { data: feedbackData, error: feedbackError } = await supabase
      .from('feedback')
      .insert([{
        has_rating: !!data.ratings,
        has_comment: !!data.comment_text,
        has_job_share: !!(data.company_name || data.job_link),
        has_bug_report: !!data.bug_description,
      }])
      .select('feedback_id')
      .single();

    if (feedbackError) throw feedbackError;

    const feedbackId = feedbackData.feedback_id;
    const operations: Promise<any>[] = [];

    // 2. 조건부 관련 데이터 삽입
    if (data.ratings) {
      operations.push(
        supabase.from('feedback_ratings').insert([{
          feedback_id: feedbackId,
          portfolio_score: data.ratings.portfolioScore,
          technical_score: data.ratings.technicalScore,
          design_score: data.ratings.designScore,
        }])
      );
    }

    if (data.comment_text || data.bug_description || data.company_name || data.job_link) {
      operations.push(
        supabase.from('feedback_extras').insert([{
          feedback_id: feedbackId,
          comment_text: data.comment_text || null,
          bug_description: data.bug_description || null,
          company_name: data.company_name || null,
          job_link: data.job_link || null,
        }])
      );
    }

    // 3. 모든 관련 작업을 병렬로 실행
    const results = await Promise.all(operations);
    
    // 4. 각 작업의 에러 확인
    results.forEach((result, index) => {
      if (result.error) {
        throw new Error(`관련 데이터 삽입 실패 (작업 ${index + 1}): ${result.error.message}`);
      }
    });

    return {
      success: true,
      feedback_id: feedbackId,
      message: '피드백이 성공적으로 저장되었습니다.',
    };

  } catch (error) {
    // 5. 에러 발생 시 정리 작업 (필요한 경우)
    console.error('피드백 저장 중 오류:', error);
    
    // 여기서 롤백이나 정리 작업 수행 가능
    // Supabase는 자동 롤백을 지원하지 않으므로 수동 처리 필요
    
    throw new Error(
      error instanceof Error 
        ? `피드백 저장 실패: ${error.message}`
        : '알 수 없는 오류가 발생했습니다.'
    );
  }
}
```

**데이터 검증 강화**
```typescript
// 입력 데이터 검증 스키마
const FeedbackInputSchema = z.object({
  ratings: z.object({
    portfolioScore: z.number().min(1).max(5),
    technicalScore: z.number().min(1).max(5),
    designScore: z.number().min(1).max(5),
  }).optional(),
  comment_text: z.string().max(1000).optional(),
  bug_description: z.string().max(1000).optional(),
  company_name: z.string().max(100).optional(),
  job_link: z.string().url().optional(),
});

export async function validateAndSaveFeedback(rawData: unknown) {
  // 입력 검증
  const validData = FeedbackInputSchema.parse(rawData);
  
  // 비즈니스 로직 검증
  if (!validData.ratings && !validData.comment_text && 
      !validData.bug_description && !validData.company_name && !validData.job_link) {
    throw new Error('최소 하나의 피드백 항목이 필요합니다.');
  }
  
  return saveFeedbackTransaction(validData);
}
```

**학습 포인트**
- 관련 테이블 작업을 하나의 트랜잭션으로 묶기
- Promise.all로 병렬 처리하되 에러 처리 철저히
- 입력 검증과 비즈니스 로직 검증 분리

### 15. API 응답 표준화 및 에러 처리

**문제 상황**
```typescript
// ❌ 문제: 일관성 없는 API 응답 형식
// /api/blog
return Response.json(data);

// /api/feedback  
return Response.json({ success: true, result: data });

// /api/heart
return Response.json({ ok: true, count: data });
```

**해결 방안**
```typescript
// ✅ 해결: 표준화된 API 응답 형식
// shared/api/types.ts
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    timestamp: string;
    version: string;
  };
}

// API 응답 헬퍼 함수
export class ApiResponseHelper {
  static success<T>(data: T, meta?: any): ApiResponse<T> {
    return {
      success: true,
      data,
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0',
        ...meta,
      },
    };
  }

  static error(code: string, message: string, details?: any): ApiResponse<never> {
    return {
      success: false,
      error: {
        code,
        message,
        details,
      },
      meta: {
        timestamp: new Date().toISOString(),
        version: '1.0',
      },
    };
  }
}

// 표준화된 API Route 구현
export async function GET(): Promise<NextResponse<ApiResponse<Blog[]>>> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        ApiResponseHelper.error('DATABASE_ERROR', error.message, error),
        { status: 500 }
      );
    }

    return NextResponse.json(ApiResponseHelper.success(data));

  } catch (error) {
    console.error('블로그 조회 에러:', error);
    
    return NextResponse.json(
      ApiResponseHelper.error(
        'INTERNAL_SERVER_ERROR',
        '서버 내부 오류가 발생했습니다.',
        process.env.NODE_ENV === 'development' ? error : undefined
      ),
      { status: 500 }
    );
  }
}

// 클라이언트 사이드 API 호출 헬퍼
export class ApiClient {
  static async request<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      const result: ApiResponse<T> = await response.json();

      if (!result.success) {
        throw new ApiError(
          result.error?.code || 'UNKNOWN_ERROR',
          result.error?.message || '알 수 없는 오류가 발생했습니다.',
          result.error?.details
        );
      }

      return result.data!;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      throw new ApiError('NETWORK_ERROR', '네트워크 오류가 발생했습니다.', error);
    }
  }
}

// 커스텀 에러 클래스
export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
```

**사용 예시**
```typescript
// 클라이언트에서 사용
try {
  const blogs = await ApiClient.request<Blog[]>('/api/blog');
  setBlogs(blogs);
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`API 에러 [${error.code}]:`, error.message);
    // 에러 코드별 세밀한 처리 가능
  }
}
```

**학습 포인트**
- 모든 API에서 일관된 응답 형식 사용
- 에러 코드로 클라이언트에서 세밀한 처리 가능
- 개발/운영 환경별 에러 정보 노출 수준 조절

---

## 🚀 설치 및 실행 가이드

### 📋 사전 요구사항
- Node.js 18.17 이상
- npm 9.0 이상
- Git

### 🔧 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/imnammm/portfolio-project.git
cd portfolio-project
```

2. **의존성 설치**
```bash
npm install
```

3. **환경 변수 설정**
```bash
# .env.local 파일 생성
cp .env.example .env.local

# 필요한 환경 변수들 설정
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **개발 서버 실행**
```bash
npm run dev
```

5. **브라우저에서 확인**
```
http://localhost:3000
```

### 🧪 테스트 실행

```bash
# 전체 테스트 실행
npm test

# 테스트 watch 모드
npm run test:watch

# 테스트 커버리지 확인
npm run test:coverage
```

### 🏗️ 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 로컬 실행
npm start

# 타입 체크
npm run type-check

# 린팅
npm run lint
```

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인해주세요.

## 📧 연락처

**임남기** - Frontend Developer
- 이메일: your.email@example.com
- 포트폴리오: [https://www.imnammm.me](https://www.imnammm.me)
- GitHub: [@imnammm](https://github.com/imnammm)

---

<div align="center">
  <p>⭐ 이 프로젝트가 도움이 되셨다면 별표를 눌러주세요!</p>
  <p>Made with ❤️ by 임남기</p>
</div>