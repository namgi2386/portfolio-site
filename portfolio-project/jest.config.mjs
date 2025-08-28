import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // Next.js 앱이 있는 디렉터리 경로 (보통 프로젝트 루트)
});

// Jest 커스텀 설정
const config = {
  coverageDirectory: 'coverage', // 테스트 커버리지 리포트 저장될 디렉터리

  // 테스트 환경 (jsdom = 브라우저 환경 시뮬레이션)
  /*
  jsdom: 브라우저 환경 시뮬레이션
  - DOM API 사용 가능 (document, window 등)
  - React 컴포넌트 테스트에 필수
  - 단, 현재는 API Routes 단위테스트는 불가능하며, 백엔드테스트 하고싶다면,
    - jest.api.config.mjs (API 전용) 만들고, 
    - testEnvironment: 'node' 설정하고 (서버 환경, API 테스트용)
    - testMatch: app/api 하위에 있는 *.test.ts 파일들로 제한하는 백엔드 테스트 따로 만들어.
  */
  testEnvironment: 'jsdom',

  // 테스트 파일 패턴
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)', // __tests__ 폴더 내 파일들
    '**/*.(test|spec).(ts|tsx|js)', // .test. 또는 .spec. 포함된 파일
  ],

  // 커버리지 제외할 파일들
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],

  // 복잡한 초기화 로직할때, setupFilesAfterEnv , jest.setup.js를 나중에 추가할 예정
  // moduleNameMapping 설정은 사용하지 않는다. SWC환경에서 Next.js가 자동으로 tsconfig.json paths를 처리해줌
};

// Next.js와 Jest 설정을 합쳐서 export
export default createJestConfig(config);
