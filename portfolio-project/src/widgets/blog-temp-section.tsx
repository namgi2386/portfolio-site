import Image from 'next/image';
import Link from 'next/link';
import { BsFillPinAngleFill } from 'react-icons/bs';

export default function TempBlogSection() {
  return (
    <div className="w-full px-4 py-12 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Blog (offline)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 tracking-wider">
          {/* 블로그 포스트 1 */}
          <Link
            aria-label="블로그 포스트1번"
            href="https://velog.io/@happynj2697/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden cursor-pointer duration-300 hover:scale-105 flex flex-col shadow-custom"
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute top-2 right-2 z-10">
                <BsFillPinAngleFill className="text-background text-xl" />
              </div>
              <Image src="/images/blog/blog-error-box.png" alt="에러일수도있지" fill className="object-cover duration-300 hover:scale-110" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-no1">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-no3">
                  <span>2025년 7월 25일</span>
                  <span>•</span>
                  <span>Hello Error</span>
                </div>
                <h3 className="text-lg text-no0 line-clamp-2">현재 블로그를 불러올 수 없습니다.</h3>
                <p className="text-sm text-no3 line-clamp-3">임시 게시글 클릭시 블로그로 이동할 수 있습니다.</p>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className="text-xs text-no0 px-2 py-1 rounded"># im</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># nam</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># gi</span>
              </div>
            </div>
          </Link>
          {/* 블로그 포스트 2 */}
          <Link
            aria-label="블로그 포스트2번"
            href="https://velog.io/@happynj2697/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden cursor-pointer duration-300 hover:scale-105 flex flex-col shadow-custom"
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute top-2 right-2 z-10">
                <BsFillPinAngleFill className="text-background text-xl" />
              </div>
              <Image src="/images/blog/blog8.png" alt="Next.js Image컴포넌트를 활용한 이미지 최적화" fill className="object-cover  duration-300 hover:scale-110" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-no1">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-no3">
                  <span>2025년 7월 18일</span>
                  <span>•</span>
                  <span>Next.js</span>
                </div>
                <h3 className="text-lg text-no0 line-clamp-2">Next.js Image컴포넌트를 활용한 이미지 최적화</h3>
                <p className="text-sm text-no3 line-clamp-3">Next.js의 Image 컴포넌트를 이용하여 최적화하는 과정에서 고민해본 내용들을 정리해뒀다.</p>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className="text-xs text-no0 px-2 py-1 rounded"># JPEG</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># image</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># optimization</span>
              </div>
            </div>
          </Link>

          {/* 블로그 포스트 6 */}
          <Link
            aria-label="블로그 포스트6번"
            href="https://velog.io/@happynj2697/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden cursor-pointer duration-300 hover:scale-105 flex flex-col shadow-custom"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image src="/images/blog/blog7.png" alt="남기야 WebSocket은 Socket을 대신할 수 없어" fill className="object-cover  duration-300 hover:scale-110" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-no1">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-no3">
                  <span>2025년 7월 22일</span>
                  <span>•</span>
                  <span>Network</span>
                </div>
                <h3 className="text-lg text-no0 line-clamp-2">남기야 WebSocket은 Socket을 대신할 수 없어</h3>
                <p className="text-sm text-no3 line-clamp-3">커널에서 네트워크 계층에 접근할 수 있는 도구가 소켓이며, 그중에서 TCP프로토콜에 접근하는 소켓이 TCP소켓이다. webSocket은 뭘까용</p>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className="text-xs text-no0 px-2 py-1 rounded"># CS</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># Socket</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># WebSocket</span>
              </div>
            </div>
          </Link>

          {/* 블로그 포스트 4 */}
          <Link
            aria-label="블로그 포스트4번"
            href="https://velog.io/@happynj2697/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden cursor-pointer duration-300 hover:scale-105 flex flex-col shadow-custom"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image src="/images/blog/blog5.png" alt="Next.js에서 다크모드 적용시 주의할점" fill className="object-cover  duration-300 hover:scale-110" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-no1">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-no3">
                  <span>2025년 7월 13일</span>
                  <span>•</span>
                  <span>Next.js</span>
                </div>
                <h3 className="text-lg text-no0 line-clamp-2">Next.js에서 다크모드 적용시 주의할점 + next-themes 사용법</h3>
                <p className="text-sm text-no3 line-clamp-3">
                  Next.js SSR 환경에서 다크모드는 많은 고려사항이 필요하다. 상태관리, localStorage, 시스템테마, 깜빡임(FOUC), Hydration, 인라인 스크립트에 대해 고민해본 뒤 next-themes 라이브러리로
                  해결해보자.
                </p>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className="text-xs text-no0 px-2 py-1 rounded"># FOUC</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># SSR</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># next-themes</span>
              </div>
            </div>
          </Link>

          {/* 블로그 포스트 3 */}
          <Link
            aria-label="블로그 포스트3번"
            href="https://velog.io/@happynj2697/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden cursor-pointer duration-300 hover:scale-105 flex flex-col shadow-custom"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image src="/images/blog/blog6.png" alt="Supabase RLS 사용하지 않고 개발하기" fill className="object-cover  duration-300 hover:scale-110" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-no1">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-no3">
                  <span>2025년 7월 9일</span>
                  <span>•</span>
                  <span>Database</span>
                </div>
                <h3 className="text-lg text-no0 line-clamp-2">Supabase RLS (Row Level Security) 사용하지 않고 개발하기</h3>
                <p className="text-sm text-no3 line-clamp-3">
                  Next.js에서 Supabase 사용시, RLS없이 어떻게 안전하게 데이터를 보호할 수 있을지, 그리고 환경변수는 어떻게 관리해야 하는지에 대한 고민 과정에 관한 내용이다.
                </p>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className="text-xs text-no0 px-2 py-1 rounded"># RLS</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># Next.js</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># Supabase</span>
              </div>
            </div>
          </Link>

          {/* 블로그 포스트 5 */}
          <Link
            aria-label="블로그 포스트5번"
            href="https://velog.io/@happynj2697/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden cursor-pointer duration-300 hover:scale-105 flex flex-col shadow-custom"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image src="/images/blog/blog1.png" alt="세미콜론 실수로 코테 떨어져보자" fill className="object-cover  duration-300 hover:scale-110" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-no1">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-no3">
                  <span>2025년 6월 20일</span>
                  <span>•</span>
                  <span>Algorithm_JS</span>
                </div>
                <h3 className="text-lg text-no0 line-clamp-2">세미콜론 실수로 코테 떨어져보자</h3>
                <p className="text-sm text-no3 line-clamp-3">세미콜론, 특정 상황에서는 반드시 써야 한다.</p>
              </div>
              <div className="flex items-center space-x-2 flex-wrap gap-1">
                <span className="text-xs text-no0 px-2 py-1 rounded"># Algorithm</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># ASI</span>
                <span className="text-xs text-no0 px-2 py-1 rounded"># Prettier</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
