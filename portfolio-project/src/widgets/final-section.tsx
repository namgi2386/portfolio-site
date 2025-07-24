'use client';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

export default function FinalSection() {
  const handleEmailClick = () => {
    window.open('mailto:happynj2697@gmail.com', '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/namgi2386', '_blank', 'noopener,noreferrer');
  };

  const handleBlogClick = () => {
    window.open('https://velog.io/@happynj2697/posts', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full px-4 py-20 bg-gradient-to-b from-transparent to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* 메인 타이틀 */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="font-paperlogy text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Here&apos;s</span>
              <br />
              <span className="text-no42">Imnamm&apos;m&apos;m</span>
            </h2>
            <div className="w-24 h-1 bg-no42 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">감사합니다.</p>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button onClick={handleEmailClick} className="group bg-no42 hover:bg-purple-500 text-white font-bold py-4 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center">
              <MdOutlineEmail className="text-2xl" />
            </div>
          </button>

          <div className="flex space-x-4">
            <button onClick={handleGithubClick} className="group bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-105">
              <FaGithub className="text-2xl" />
            </button>

            <button onClick={handleBlogClick} className="group bg-green-600 hover:bg-green-500 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-105">
              <SiVelog className="text-2xl" />
            </button>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-700 pt-12">
          <div className="space-y-6">
            {/* 마지막 메시지 */}
            <div className="pt-8 space-y-4">
              <p className="text-gray-400 text-lg">
                <span className="text-no42 font-bold">계획보다 실행을, 완벽보다 완성을</span>
              </p>
              <p className="text-2xl md:text-3xl font-paperlogy font-bold text-white">
                결국 해내는 개발자 <span className="text-no42">임남기</span>
              </p>
            </div>
            {/* 연락처 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div className="space-y-2 text-center">
                <h4 className="text-gray-400 text-sm uppercase tracking-wider">Email</h4>
                <p className="text-white text-lg">happynj2697@gmail.com</p>
              </div>
              <div className="space-y-2 text-center">
                <h4 className="text-gray-400 text-sm uppercase tracking-wider">Phone</h4>
                <p className="text-white text-lg">010-2386-4855</p>
              </div>
            </div>

            {/* 푸터 */}
            <div className="pt-8 text-gray-500 text-sm">
              <p>© 2025 Imnamgi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
