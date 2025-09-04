import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // next.config.js 및 .env 파일을 테스트 환경에 로드하기 위해 Next.js 앱 경로를 제공합니다.
  dir: './',
});

const config: Config = {
  /*
  - jsdom: 브라우저 환경 시뮬레이션 (테스트환경)
    - DOM API 사용 가능 (document, window 등)
    - React 컴포넌트 테스트에 필수
  - 현재는 API Routes 테스트는 불가능하며, 백엔드테스트 하고싶다면,
    - jest.api.config.mjs (API 전용) 만들고, 
    - testEnvironment: 'node' 설정하고 (서버 환경, API 테스트용)
    - testMatch: app/api 하위에 있는 *.test.ts 파일들로 제한하는 백엔드 테스트 따로 만들어.
  - 공식문서 내용
    - 유용한 정보: async Server Components는 React 생태계에 새롭게 도입되었기 때문에, 현재 Jest는 이를 지원하지 않습니다. 
    - 동기 Server 및 Client Components에 대한 **단위 테스트(Unit Tests)**는 여전히 실행할 수 있지만, async 컴포넌트에 대해서는 E2E 테스트를 사용하는 것을 권장합니다.
  */
  testEnvironment: 'jsdom',

  // 테스트간 독립성보장을 위해 Mock data 초기화
  clearMocks: true,

  /*
  테스트 커버리지 리포트 저장될 디렉토리
  */
  collectCoverage: true,
  coverageDirectory: 'coverage',

  // 커버리지 제외할 파일들
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/'],

  // V8 엔진의 네이티브 커버리지
  coverageProvider: 'v8',

  // 추가설정파일
  // 처음에는 사용하지 않았는데, 테스트 하다보면 사용하게 됨.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  /* 
  테스트 파일 패턴
  __tests__ 폴더 내 파일들
  .test. 또는 .spec. 포함된 파일
  */
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/*.(test|spec).(ts|tsx|js)'],

  // >>>>>>>>>>>>>>>>>>>>[  필요없음   ]>>>>>>>>>>>>>>>>>>>>>>>>
  // automock: false, // 자동 mock - 복잡한 프로젝트용
  // bail: 0, // n개 실패 시 중단 - 나중에 CI 연동시 필요함
  // fakeTimers:{"enableGlobally": false}, // 시간 관련 테스트 없으면 불필요
  // globalSetup/globalTeardown, // DB 연결 등 복잡한 설정용
  // notify: false, // 데스크톱 알림 필요없음
  // projects: undefined, // 멀티 프로젝트용 (모노레포?) 필요없음
  // watchman: true, // 파일 감시 최적화 - 필요없음
  // maxWorkers: "50%", // CPU 코어의 50% 사용
  // moduleNameMapping 설정은 사용하지 않는다. SWC환경에서 Next.js가 자동으로 tsconfig.json paths를 처리해줌
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // ################[ 그 외에는 진심 필요없음   ]################
  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "C:\\Users\\imnamgi\\AppData\\Local\\Temp\\jest",

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "mts",
  //   "cts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
// next/jest가 Next.js 구성을 로드할 수 있도록 createJestConfig가 이 방식으로 내보내집니다.
export default createJestConfig(config);
