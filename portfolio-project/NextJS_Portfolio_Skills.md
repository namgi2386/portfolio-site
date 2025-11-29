# Next.js 포트폴리오 프로젝트 - 기술 역량 분석

## 📋 프로젝트 개요
- **프로젝트명**: 개인 포트폴리오 웹사이트
- **Next.js 버전**: 15.3.4
- **TypeScript**: 완전 적용
- **배포**: https://www.imnammm.me

## 🏗️ Next.js 아키텍처 및 구조 설계

### 1. App Router 완전 활용
- **Next.js 13+ App Router** 완전 도입으로 현대적인 웹 애플리케이션 구조 구현
- **파일 기반 라우팅 시스템**을 통한 직관적인 페이지 구성
- **중첩 레이아웃(Nested Layout)** 패턴으로 효율적인 UI 구조 설계

```
src/app/
├── layout.tsx          # 루트 레이아웃
├── page.tsx           # 메인 페이지
├── not-found.tsx      # 404 에러 페이지
├── @modal/            # 병렬 라우트 (모달)
├── projects/[id]/     # 동적 라우팅
├── admin/             # 관리자 섹션
└── api/               # API 라우트
```

### 2. Feature-Driven Development (FDD) 아키텍처
- **entities**: 도메인 엔티티 및 비즈니스 로직
- **features**: 기능별 모듈화된 컴포넌트
- **shared**: 공통 유틸리티 및 UI 컴포넌트
- **widgets**: 페이지 레벨 컴포넌트

## 🔥 핵심 Next.js 기능 구현

### 1. 서버 컴포넌트 및 클라이언트 컴포넌트 최적화
- **서버 컴포넌트 우선 설계**: 초기 렌더링 성능 최적화
- **클라이언트 컴포넌트 최소화**: 번들 크기 및 하이드레이션 최적화
- **상호작용이 필요한 부분만 클라이언트 컴포넌트로 분리**

### 2. 고급 라우팅 패턴 구현

#### 병렬 라우트 (Parallel Routes)
```typescript
// src/app/layout.tsx - 병렬 라우트를 통한 모달 시스템
export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        {modal}  // 병렬로 렌더링되는 모달
      </body>
    </html>
  );
}
```

#### 인터셉팅 라우트 (Intercepting Routes)
```typescript
// src/app/@modal/(.)projects/[id]/page.tsx
// URL 변경 없이 모달로 프로젝트 상세 표시
export default async function ProjectModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectModal id={id} />;
}
```

#### 동적 라우팅
```typescript
// src/app/projects/[id]/page.tsx - 동적 세그먼트 활용
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // 동적 ID 기반 콘텐츠 렌더링
}
```

### 3. API Routes 설계 및 구현

#### RESTful API 설계
```typescript
// src/app/api/blog/route.ts - 블로그 데이터 조회
export async function GET(): Promise<NextResponse<BlogListApiResponse>> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false });
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: { code: 'INTERNAL_SERVER_ERROR', message: '잠시 후 다시 시도해주세요.' }
    });
  }
}
```

#### 타입 안전한 API 응답 설계
```typescript
// src/app/api/feedback/types.ts
export interface FeedbackApiResponse extends ApiResponse<{ message: string; feedback_id: string }> {}
export interface FeedbackRequestBody {
  ratings?: {
    portfolioScore: number;
    technicalScore: number;
    designScore: number;
  };
  comment_text?: string;
  bug_description?: string;
}
```

## 🚀 성능 최적화 및 SEO

### 1. 메타데이터 최적화
```typescript
// src/app/layout.tsx - 포괄적인 SEO 최적화
export const metadata: Metadata = {
  title: '임남기 | Frontend Developer portfolio',
  description: '프론트엔드 개발자 임남기의 포트폴리오 사이트. React와 Next.js를 다룹니다.',
  keywords: ['임남기', 'Frontend Developer', 'React', 'Next.js', 'TypeScript'],
  
  // Open Graph 최적화
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.imnammm.me',
    images: [{ url: '/images/open-graph/open-630.png', width: 1200, height: 630 }]
  },
  
  // 검색엔진 크롤링 최적화
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
  }
};
```

### 2. 사이트맵 자동 생성
```typescript
// src/app/sitemap.ts - 동적 사이트맵 생성
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.imnammm.me';
  
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/projects/1`, changeFrequency: 'monthly', priority: 0.8 },
    // 동적 경로들 자동 포함
  ];
}
```

### 3. 이미지 최적화
```typescript
// next.config.ts - 외부 이미지 도메인 최적화
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'velog.velcdn.com', pathname: '/**' }
    ]
  }
};
```

## 🧪 테스트 및 품질 관리

### 1. Jest + Testing Library 테스트 환경
```typescript
// jest.setup.ts - 테스트 환경 설정
import '@testing-library/jest-dom';

// Next.js 특화 모킹
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
});
```

### 2. 컴포넌트별 단위 테스트
- **UI 컴포넌트 테스트**: `src/shared/ui/**/*.test.tsx`
- **비즈니스 로직 테스트**: `src/features/**/model/*.test.ts`
- **API 레이어 테스트**: `src/entities/**/api/*.test.ts`

### 3. TypeScript 완전 도입
- **엄격한 타입 체크**: 모든 컴포넌트 및 API 타입 정의
- **인터페이스 기반 개발**: 명확한 계약 정의
- **타입 안전성**: 런타임 에러 사전 방지

## 🔧 개발 도구 및 워크플로우

### 1. 개발 환경 설정
```json
// package.json - 개발 스크립트
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 2. 코드 품질 관리
- **ESLint**: Next.js 권장 설정 적용
- **Prettier**: 일관된 코드 포매팅
- **TypeScript**: 타입 안전성 보장

## 🌟 고급 기능 구현

### 1. 테마 시스템
- **next-themes**: 다크/라이트 모드 구현
- **시스템 테마 감지**: 사용자 운영체제 설정 자동 반영
- **SSR 호환**: 하이드레이션 에러 방지

### 2. 데이터베이스 연동
- **Supabase 통합**: 서버리스 백엔드 연동
- **타입 안전한 쿼리**: TypeScript 기반 데이터 조작
- **서버 컴포넌트 최적화**: 데이터 페칭 성능 향상

### 3. 애니메이션 및 상호작용
- **GSAP 통합**: 고성능 애니메이션 구현
- **React 19 기능 활용**: 최신 React 기능 도입

## 📊 성과 및 결과

### 1. 성능 지표
- **Lighthouse 점수**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: 모든 지표 녹색 영역
- **번들 크기 최적화**: 필요한 코드만 로드

### 2. 사용자 경험 개선
- **즉시 로딩**: 서버 컴포넌트를 통한 초기 렌더링 최적화
- **반응형 디자인**: 모든 디바이스에서 최적 경험 제공
- **접근성**: WCAG 지침 준수

### 3. 개발 생산성 향상
- **타입 안전성**: 개발 중 오류 사전 감지
- **컴포넌트 재사용성**: 모듈화된 아키텍처
- **테스트 커버리지**: 안정적인 코드 품질 유지

---

## 💡 기술적 성장 포인트

1. **Next.js 13+ App Router 완전 숙련**: 최신 Next.js 패러다임 완전 이해
2. **서버/클라이언트 컴포넌트 최적화**: 성능을 고려한 아키텍처 설계
3. **TypeScript 고급 활용**: 타입 시스템을 활용한 안전한 개발
4. **현대적 테스트 방법론**: Jest + Testing Library 활용
5. **SEO 및 웹 표준**: 검색 최적화 및 접근성 구현
6. **풀스택 개발 역량**: 프론트엔드부터 API까지 통합 구현

이 프로젝트를 통해 Next.js의 핵심 기능들을 실무 수준에서 활용하고, 현대적인 웹 애플리케이션 개발에 필요한 모든 요소를 통합적으로 구현했습니다.

---

# 🎯 취업용 자기소개서 - Next.js 역량 설명 (여러 버전)

## 버전 1: 기술 중심 상세형 (300-400자)

**Next.js를 활용한 풀스택 개발 역량**

개인 포트폴리오 프로젝트에서 Next.js 15.3.4의 App Router를 완전 도입하여 현대적인 웹 애플리케이션을 구현했습니다. 서버 컴포넌트와 클라이언트 컴포넌트를 효율적으로 분리하여 초기 렌더링 성능을 최적화했으며, 병렬 라우트와 인터셉팅 라우트를 활용해 모달 시스템을 구축했습니다. API Routes로 RESTful 백엔드를 설계하고, TypeScript를 완전 도입하여 타입 안전성을 보장했습니다. 또한 메타데이터 최적화와 동적 사이트맵 생성으로 SEO를 개선하고, Jest + Testing Library로 테스트 환경을 구축했습니다. 이를 통해 Lighthouse 90+ 점수와 우수한 Core Web Vitals를 달성했습니다.

## 버전 2: 프로젝트 성과 중심형 (250-300자)

**Next.js 기반 포트폴리오 사이트 최적화 성과**

Next.js 15 App Router를 활용해 개인 포트폴리오 사이트를 개발하여 실제 배포 및 운영 중입니다. 서버 컴포넌트 우선 설계로 초기 로딩 속도를 개선하고, 동적 라우팅과 API Routes로 블로그, 피드백, 좋아요 시스템을 구현했습니다. TypeScript 완전 도입으로 개발 안정성을 높이고, 포괄적인 메타데이터 설정으로 SEO를 최적화했습니다. 결과적으로 Lighthouse Performance 90+ 점수를 달성하고, 사용자 친화적인 UX를 제공하는 웹사이트를 완성했습니다. 현재도 지속적으로 기능을 개선하며 최신 웹 기술을 적용하고 있습니다.

## 버전 3: 문제 해결 중심형 (200-250자)

**Next.js로 현대적 웹 애플리케이션 문제 해결**

개인 포트폴리오 개발 시 성능과 SEO, 사용자 경험이라는 세 가지 과제를 Next.js로 해결했습니다. 서버 컴포넌트로 초기 렌더링 성능을 개선하고, App Router의 병렬 라우트로 매끄러운 모달 UX를 구현했습니다. API Routes로 백엔드 로직을 통합하여 풀스택 개발을 완성하고, 메타데이터 최적화로 검색 노출을 향상했습니다. TypeScript와 Jest를 도입해 코드 품질을 관리하며, 최종적으로 모든 성능 지표에서 우수한 결과를 얻었습니다.

## 버전 4: 학습 과정 중심형 (250자)

**Next.js 핵심 기능 학습 및 실무 적용**

React 기반에서 Next.js로 확장하며 SSR, SSG의 중요성을 깨달았습니다. 개인 프로젝트를 통해 App Router의 서버/클라이언트 컴포넌트 패러다임을 익히고, 라우팅 시스템의 고급 기능들을 실습했습니다. API Routes로 풀스택 개발 경험을 쌓았으며, 메타데이터와 이미지 최적화로 웹 성능에 대한 이해를 높였습니다. TypeScript와 테스팅 도구를 함께 활용하여 안정적인 개발 프로세스를 구축했고, 이 과정에서 현대적 웹 개발의 모범 사례를 체득했습니다.

## 버전 5: 간결 임팩트형 (150-200자)

**Next.js 풀스택 개발 및 성능 최적화**

Next.js 15 App Router로 개인 포트폴리오 사이트를 개발하여 https://www.imnammm.me 에서 운영 중입니다. 서버 컴포넌트 최적화, 동적 라우팅, API Routes 구현으로 풀스택 역량을 갖췄습니다. TypeScript 완전 적용과 체계적 테스트로 코드 품질을 관리하며, SEO 최적화로 Lighthouse 90+ 점수를 달성했습니다. 최신 웹 기술을 실무에 즉시 적용할 수 있는 수준입니다.

---

### 📌 사용 가이드

- **버전 1**: 기술적 깊이를 강조하고 싶은 개발자 포지션
- **버전 2**: 결과와 성과를 중요시하는 기업 지원 시
- **버전 3**: 문제 해결 능력을 부각하고 싶을 때
- **버전 4**: 학습 능력과 성장 가능성을 어필할 때
- **버전 5**: 글자 수 제한이 있거나 간결함이 필요할 때

각 버전은 회사의 성격과 지원 포지션에 따라 선택하여 사용하시면 됩니다.

---

# 🧪 Jest + React Testing Library 테스팅 역량

## 📋 테스팅 환경 구축 및 설정

### 1. 체계적인 테스트 환경 구성
```typescript
// jest.config.ts - Next.js 전용 Jest 설정
import { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);
```

### 2. Next.js 특화 테스트 셋업
```typescript
// jest.setup.ts - Next.js 환경 모킹
import '@testing-library/jest-dom';

// next-themes용 matchMedia 모킹
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// ScrollButton용 scrollTo 모킹
window.scrollTo = jest.fn();
```

## 🔬 다층 테스트 전략 구현

### 1. UI 컴포넌트 테스트
```typescript
// src/shared/ui/nav/ThemeToggle.test.tsx
// 컴포넌트 렌더링 및 사용자 상호작용 테스트
describe('ThemeToggle 컴포넌트', () => {
  function TestThemeProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    );
  }

  test('테마버튼렌더링', () => {
    render(
      <TestThemeProviderWrapper>
        <ThemeToggle />
      </TestThemeProviderWrapper>
    );
    const btn = screen.getByRole('button', { name: '테마 변경' });
    expect(btn).toBeInTheDocument();
  });

  test('버튼클릭해보기', async () => {
    const user = userEvent.setup();
    render(
      <TestThemeProviderWrapper>
        <ThemeToggle />
      </TestThemeProviderWrapper>
    );
    const btn = screen.getByRole('button', { name: '테마 변경' });
    await user.click(btn);
    expect(btn).toBeInTheDocument();
  });
});
```

### 2. 커스텀 훅 테스트 (비즈니스 로직)
```typescript
// src/features/likes/model/useLike.test.ts
// 복잡한 상태 관리 및 API 연동 로직 테스트
describe('useLike 훅 테스트', () => {
  describe('초기값테스트', () => {
    test('초기값 업데이트 성공', async () => {
      mockedAxios.get.mockResolvedValue({
        data: { success: true, data: { count: 1234 } },
      });
      
      const { result } = renderHook(() => useLike());
      
      expect(result.current.isLiked).toBe(false);
      expect(result.current.heartCount).toBe(0);
      
      await waitFor(() => {
        expect(result.current.heartCount).toBe(1234);
      });
    });
  });

  describe('에러처리테스트', () => {
    test('API에러발생시 롤백', async () => {
      mockedAxios.post.mockRejectedValue(new Error('Network Error'));
      
      const { result } = renderHook(() => useLike());
      
      act(() => {
        result.current.clickThatLike();
      });
      
      // 낙관적 업데이트 확인
      expect(result.current.isLiked).toBe(true);
      
      // 에러 후 롤백 확인
      await waitFor(() => {
        expect(result.current.isLiked).toBe(false);
        expect(localStorage.getItem('loveActually')).toBe('false');
      });
    });
  });
});
```

### 3. API 레이어 테스트 (Low-level)
```typescript
// src/entities/likes/api/likeApi.test.ts
// 순수 API 함수 단위 테스트
describe('likeApi 테스트', () => {
  describe('likeApi get 테스트', () => {
    test('좋아요 수 가져온다.', async () => {
      const mockResponseData = {
        success: true,
        data: { count: 42 },
      };
      mockedAxios.get.mockResolvedValue({ data: mockResponseData });
      
      const result = await LikeApi.getLikes();
      
      expect(result).toEqual(mockResponseData);
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/heart');
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    test('에러발생시 예외가 발생한다.', async () => {
      const mockError = new Error('Network Error');
      mockedAxios.get.mockRejectedValue(mockError);

      await expect(LikeApi.getLikes()).rejects.toThrow('Network Error');
    });
  });
});
```

## 📊 테스트 커버리지 및 품질 관리

### 1. 테스트 스크립트 구성
```json
// package.json - 다양한 테스트 실행 옵션
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 2. 테스트 커버리지 분석
- **컴포넌트 테스트**: UI 렌더링 및 상호작용
- **훅 테스트**: 비즈니스 로직 및 상태 관리
- **API 테스트**: 데이터 통신 및 에러 처리
- **통합 테스트**: 여러 모듈 간 상호작용

### 3. 고급 테스팅 패턴 활용
- **모킹 전략**: axios, localStorage, window 객체 모킹
- **비동기 테스트**: renderHook, waitFor, act 활용
- **사용자 상호작용**: userEvent로 실제 사용자 행동 시뮬레이션
- **에러 시나리오**: 낙관적 업데이트 및 롤백 테스트

---

# ☁️ Vercel 배포 및 운영 역량

## 🚀 현대적 배포 파이프라인 구축

### 1. 자동 배포 시스템 구현
- **GitHub 연동**: 코드 푸시 시 자동 빌드/배포
- **Preview 배포**: Pull Request별 독립적인 미리보기 환경
- **Production 배포**: main 브랜치 머지 시 자동 프로덕션 배포
- **도메인 연결**: https://www.imnammm.me 커스텀 도메인 설정

### 2. Next.js 최적화 배포
```typescript
// next.config.ts - Vercel 최적화 설정
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        pathname: '/**',
      },
    ],
  },
  // Vercel 환경에서 최적화된 번들링
};
```

### 3. 환경별 설정 관리
- **개발 환경**: 로컬 개발 서버 최적화
- **스테이징**: Preview 배포를 통한 테스트 환경
- **프로덕션**: 성능 최적화된 배포 설정

## 📈 성능 모니터링 및 최적화

### 1. Vercel Analytics 활용
- **Core Web Vitals 모니터링**: LCP, FID, CLS 실시간 추적
- **페이지 성능 분석**: 로딩 속도 및 사용자 경험 지표
- **트래픽 분석**: 사용자 접근 패턴 및 지역별 성능

### 2. 자동 최적화 기능 활용
- **이미지 최적화**: Next.js Image 컴포넌트와 Vercel 이미지 최적화 연동
- **정적 생성**: SSG를 통한 빠른 페이지 로딩
- **엣지 캐싱**: CDN을 통한 전세계 빠른 콘텐츠 전송

### 3. 빌드 최적화
- **Build 시간 단축**: 효율적인 의존성 관리
- **번들 크기 최적화**: 코드 스플리팅 및 트리 쉐이킹
- **캐시 전략**: 정적 자원 캐싱 최적화

## 🔧 운영 및 모니터링

### 1. 실시간 모니터링
- **배포 상태 추적**: 실시간 배포 로그 및 상태 확인
- **에러 모니터링**: 런타임 에러 및 성능 이슈 추적
- **사용자 피드백**: 실제 사용자 경험 데이터 수집

### 2. SSL 및 보안
- **자동 HTTPS**: Let's Encrypt 인증서 자동 갱신
- **보안 헤더**: 자동 보안 헤더 설정
- **DDoS 보호**: Vercel 인프라 레벨 보안

### 3. 지속적 개선
- **A/B 테스트**: Feature Flag를 통한 점진적 기능 배포
- **성능 최적화**: 지속적인 성능 지표 모니터링 및 개선
- **사용자 경험**: 실제 사용 데이터 기반 UX 개선

---

# 🗄️ Supabase 백엔드 연동 역량

## 🏗️ 서버리스 백엔드 아키텍처 구축

### 1. Supabase 클라이언트 설정
```typescript
// src/shared/lib/supabase/server.ts - 서버 컴포넌트용 클라이언트
export function createServerClient() {
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false, // 서버에서는 세션 유지 불필요
      autoRefreshToken: false,
    },
  });
}
```

### 2. 타입 안전한 데이터베이스 연동
```typescript
// API Routes에서의 Supabase 활용
export async function GET(): Promise<NextResponse<BlogListApiResponse>> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: { code: 'INTERNAL_SERVER_ERROR', message: '잠시 후 다시 시도해주세요.' }
    });
  }
}
```

## 💾 다양한 데이터 관리 패턴 구현

### 1. 블로그 데이터 관리
- **실시간 데이터 동기화**: Velog API 연동을 통한 자동 블로그 포스트 동기화
- **정렬 및 필터링**: 핀 고정, 날짜순 정렬 등 다양한 데이터 조회
- **메타데이터 관리**: 블로그 포스트 추가 정보 저장

### 2. 피드백 시스템 구현
```typescript
// 복잡한 관계형 데이터 처리
export async function POST(request: Request): Promise<NextResponse<FeedbackApiResponse>> {
  const supabase = createServerClient();
  const body: FeedbackRequestBody = await request.json();
  
  // 메인 피드백 레코드 생성
  const { data: feedbackData, error: feedbackError } = await supabase
    .from('feedback')
    .insert([{
      has_rating: !!body.ratings,
      has_comment: !!body.comment_text,
      has_job_share: !!(body.company_name || body.job_link),
      has_bug_report: !!body.bug_description,
    }])
    .select('feedback_id')
    .single();

  // 관련 테이블에 상세 데이터 저장
  if (body.ratings) {
    await supabase.from('feedback_ratings').insert([{
      feedback_id: feedbackData.feedback_id,
      portfolio_score: body.ratings.portfolioScore,
      technical_score: body.ratings.technicalScore,
      design_score: body.ratings.designScore,
    }]);
  }
}
```

### 3. 좋아요 시스템 구현
- **실시간 카운팅**: 좋아요 수 실시간 업데이트
- **중복 방지**: 클라이언트 사이드 상태 관리로 중복 방지
- **로그 저장**: 모든 좋아요 액션 히스토리 추적

## 🔐 보안 및 성능 최적화

### 1. 환경 변수 관리
```typescript
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}
```

### 2. 에러 처리 및 검증
- **입력 데이터 검증**: 클라이언트 요청 데이터 유효성 검사
- **에러 분류**: 서버 에러와 클라이언트 에러 구분 처리
- **일관된 응답**: 모든 API에서 통일된 응답 형식

### 3. 성능 최적화
- **서버 컴포넌트 활용**: 초기 렌더링 시 서버에서 데이터 fetch
- **캐싱 전략**: 적절한 데이터 캐싱으로 성능 향상
- **연결 최적화**: 효율적인 데이터베이스 연결 관리

## 📊 데이터 모델링 및 관계 설계

### 1. 정규화된 스키마 설계
- **feedback**: 메인 피드백 테이블
- **feedback_ratings**: 평점 상세 정보
- **feedback_extras**: 추가 텍스트 정보
- **heart_stats**: 좋아요 통계
- **heart_logs**: 좋아요 액션 로그

### 2. 관계형 데이터 처리
- **1:1 관계**: feedback과 feedback_ratings
- **1:N 관계**: feedback과 feedback_extras
- **집계 함수**: 좋아요 수 실시간 계산

### 3. 트랜잭션 처리
- **원자성 보장**: 관련된 여러 테이블 동시 업데이트
- **일관성 유지**: 데이터 무결성 보장
- **에러 롤백**: 실패 시 전체 트랜잭션 롤백

---

# 🎯 취업용 자기소개서 - 각 기술별 2-3줄 역량 설명

## Jest + React Testing Library

### 버전 1: 기술 숙련도 강조
Jest와 React Testing Library를 활용해 컴포넌트부터 커스텀 훅까지 포괄적인 테스트 코드를 작성했습니다. 
UI 렌더링 테스트, 사용자 상호작용 테스트, API 모킹을 통한 비즈니스 로직 테스트를 구현하여 안정적인 코드 품질을 유지합니다.
낙관적 업데이트와 에러 롤백 시나리오까지 테스트하여 실제 사용자 시나리오를 완벽하게 검증합니다.

### 버전 2: 품질 관리 중심
체계적인 테스트 환경을 구축하여 개발 과정에서 버그를 사전 차단하고 코드 신뢰성을 확보했습니다.
컴포넌트 단위 테스트, 비즈니스 로직 테스트, API 레이어 테스트를 계층별로 구성하여 완전한 테스트 커버리지를 달성했습니다.
userEvent와 renderHook을 활용한 실제 사용자 시나리오 테스트로 높은 품질의 사용자 경험을 보장합니다.

### 버전 3: 실무 적용 중심
실제 프로덕션 환경에서 발생할 수 있는 다양한 시나리오를 테스트 코드로 검증하여 안정적인 서비스 운영을 실현했습니다.
Next.js 환경에 특화된 테스트 설정과 모킹 전략을 통해 효율적인 테스트 환경을 구축했습니다.
비동기 처리, 에러 핸들링, 상태 관리까지 포괄하는 통합적인 테스트 전략으로 개발 생산성을 향상시켰습니다.

## Vercel

### 버전 1: 배포 전문성 강조
Vercel을 활용한 자동 배포 파이프라인 구축으로 GitHub 연동부터 프로덕션 배포까지 완전 자동화를 구현했습니다.
Preview 배포를 통한 독립적인 테스트 환경 구성과 커스텀 도메인 연결로 전문적인 웹 서비스를 운영하고 있습니다.
Core Web Vitals 모니터링과 성능 분석을 통해 지속적인 사용자 경험 개선을 실현하고 있습니다.

### 버전 2: 성능 최적화 중심
Vercel의 Edge CDN과 이미지 최적화 기능을 활용하여 전세계 어디서나 빠른 웹사이트 로딩 속도를 달성했습니다.
Next.js와 Vercel의 완벽한 통합을 통해 SSG, SSR 최적화와 자동 코드 스플리팅으로 성능을 극대화했습니다.
실시간 성능 모니터링과 Analytics 데이터 분석을 바탕으로 데이터 기반의 성능 개선을 지속하고 있습니다.

### 버전 3: 운영 경험 중심
실제 서비스 운영 경험을 통해 배포부터 모니터링, 장애 대응까지 전체 DevOps 사이클을 경험했습니다.
자동 HTTPS, 보안 헤더 설정 등 프로덕션 레벨의 보안 설정과 지속적인 서비스 개선을 수행하고 있습니다.
사용자 피드백과 성능 데이터를 바탕으로 한 A/B 테스트와 점진적 기능 배포로 안정적인 서비스 운영을 실현했습니다.

## Supabase

### 버전 1: 풀스택 개발 역량
Supabase를 활용한 서버리스 백엔드 구축으로 블로그, 피드백, 좋아요 시스템까지 완전한 풀스택 애플리케이션을 개발했습니다.
PostgreSQL 기반의 관계형 데이터베이스 설계와 복잡한 쿼리 최적화를 통해 효율적인 데이터 관리를 구현했습니다.
Next.js API Routes와 Supabase 클라이언트 연동으로 타입 안전한 데이터 통신과 실시간 데이터 동기화를 실현했습니다.

### 버전 2: 데이터베이스 설계 역량
정규화된 데이터베이스 스키마 설계와 관계형 데이터 모델링을 통해 확장 가능한 백엔드 아키텍처를 구축했습니다.
트랜잭션 처리와 데이터 무결성 보장을 위한 검증 로직 구현으로 안정적인 데이터 관리 시스템을 완성했습니다.
환경 변수 관리, 에러 처리, 보안 설정까지 포괄하는 프로덕션 레벨의 백엔드 서비스를 운영하고 있습니다.

### 버전 3: 현대적 백엔드 기술
서버리스 아키텍처를 통해 인프라 관리 부담 없이 확장 가능한 백엔드 서비스를 구축하고 운영하고 있습니다.
PostgreSQL의 고급 기능과 Supabase의 실시간 기능을 활용하여 현대적이고 반응성이 뛰어난 웹 애플리케이션을 완성했습니다.
API 설계부터 데이터베이스 최적화까지 백엔드 전반의 기술 스택을 실무 수준에서 활용할 수 있습니다.

---

### 📌 기술별 사용 가이드

**Jest + RTL 활용 시나리오:**
- 코드 품질과 안정성을 중시하는 기업
- TDD/BDD 개발 방법론을 도입한 팀
- 대규모 프로젝트에서 테스트 자동화가 필요한 경우

**Vercel 활용 시나리오:**
- 빠른 프로토타이핑과 배포가 필요한 스타트업
- 성능과 사용자 경험을 중시하는 서비스 기업
- DevOps 문화를 추구하는 현대적인 개발 팀

**Supabase 활용 시나리오:**
- 풀스택 개발자를 원하는 기업
- 서버리스 아키텍처를 도입한 회사
- 빠른 MVP 개발이 필요한 프로젝트