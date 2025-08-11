import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import Link from 'next/link';
import TempFeedForm from '@/shared/ui/counting-star/TempFeedForm';

export default function FinalSection() {
  return (
    <div className="w-full  font-paperlogy">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 메인 타이틀 */}
        <div className="space-y-8 mb-32 text-center">
          <div className="space-y-4">
            <h2 className="font-paperlogy text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Here&apos;s</span>
              <br />
              <span className="text-custompurple">Imnamm&apos;m&apos;m</span>
            </h2>
            <div className="w-24 h-1 bg-custompurple mx-auto rounded-full"></div>
          </div>
        </div>

        {/* form */}
        <TempFeedForm />
      </div>
      <div className="bg-gradient-to-b from-transparent to-no1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* final */}
          <div className=" pt-30 text-center ">
            {/* 버튼s */}
            <div className="space-y-6">
              <div className="flex gap-4 justify-center items-center">
                <Link href="mailto:happynj2697@gmail.com" className="group bg-custompurple hover:bg-no43 dark:hover:bg-no42 text-no0 font-bold py-4 px-4 rounded-full duration-300 hover:scale-105">
                  <div className="flex items-center justify-center">
                    <MdOutlineEmail className="text-2xl" />
                  </div>
                </Link>

                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/namgi2386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-no2/50 hover:bg-no2 text-no0 p-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub className="text-2xl" />
                  </Link>

                  <Link
                    href="https://velog.io/@happynj2697/posts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-green-velog hover:bg-green-velog/50 text-no0 p-4 rounded-full transition duration-300 hover:scale-105"
                  >
                    <SiVelog className="text-2xl" />
                  </Link>
                </div>
              </div>
              {/* 마지막 메시지 */}
              <div className="pt-8 space-y-4">
                <div className="text-foreground font-bold text-lg">계획보다 실행을, 완벽보다 완성을</div>
                <p className="text-2xl md:text-3xl font-bold text-no0">
                  결국 해내는 개발자 <span className="text-custompurple">임남기</span>
                </p>
              </div>
              {/* 연락처 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                <div className="space-y-2 text-center">
                  <h4 className="text-no3 text-sm uppercase tracking-wider">Email</h4>
                  <p className="text-no0 text-lg">happynj2697@gmail.com</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-no3 text-sm uppercase tracking-wider">Phone</h4>
                  <p className="text-no0 text-lg">010-2386-4855</p>
                </div>
              </div>

              {/* 푸터 */}
              <div className="pt-8 text-no3 text-sm">
                <p>© 2025 Imnamgi. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
