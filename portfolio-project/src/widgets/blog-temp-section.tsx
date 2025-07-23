'use client';
import Image from 'next/image';

export default function TempBlogSection() {
  return (
    <div className="w-full px-4 py-12 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-paperlogy text-4xl md:text-5xl font-bold text-foreground mb-12">Blog (offline)</h2>

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
              <Image src="/images/blog/blog-error-box.png" alt="블로그 포스트 2" fill className="object-cover transition-transform duration-300 hover:scale-110" />
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
  );
}
