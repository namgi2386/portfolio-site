import { Bold, SectionBoxSmall } from '@/shared/ui/section-box/SectionBox';
import ProfileInfo from '@/widgets/profile-section/profile-info';
import ProfileSWGrid from '@/widgets/profile-section/profile-sw-grid';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoPhonePortrait } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { SiVelog } from 'react-icons/si';

export default function ProfileSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 왼쪽: 프로필 이미지와 기본 정보 */}
        <div className="lg:col-span-3">
          {/* lg 미만에서는 가로 배치 */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 h-full">
            {/* 프로필 이미지 */}
            <div className="col-span-1 w-full aspect-square rounded-lg overflow-hidden relative">
              <Image src="/images/profiles/imnamgi_port_05.png" alt="프로필 사진" fill className="object-cover" priority={true} sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            {/* 텍스트 정보들 */}
            <div className="col-span-1 lg:col-span-1 space-y-4 lg:space-y-6 flex flex-col justify-between">
              {/* 이름과 직업 */}
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">프론트엔드 개발자</h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custompurple">임남기</h3>
              </div>

              {/* 연락처 정보 */}
              <SectionBoxSmall>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex gap-2">
                    <div className="bg-foreground rounded-full p-0.5">
                      <MdEmail className="text-lg text-background dark:text-no2" />
                    </div>
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap">happynj2697@gmail.com</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-foreground rounded-full p-0.5">
                      <IoPhonePortrait className="text-lg text-background dark:text-no2" />
                    </div>
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap">010-2386-4855</span>
                  </div>
                  <div className="flex gap-2">
                    <SiVelog className="text-2xl text-foreground" />
                    <span>Blog</span>
                    <Link
                      aria-label="블로그 이동하기"
                      title="블로그 이동하기"
                      href="https://velog.io/@happynj2697/posts"
                      className="text-custompurple font-semibold cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      보러가기
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <FaGithub className="text-2xl text-foreground" />
                    <span>GitHub</span>
                    <Link
                      aria-label="깃허브 이동하기"
                      title="깃허브 이동하기"
                      href="https://github.com/namgi2386"
                      className="text-custompurple font-semibold cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      보러가기
                    </Link>
                  </div>
                </div>
              </SectionBoxSmall>

              {/* 경력 정보 */}
              <SectionBoxSmall>
                <div className="space-y-3 lg:space-y-4">
                  <Bold>SQLD</Bold>
                  <p>2024.03</p>
                  <Bold>정보처리기사</Bold>
                  <p>2024.06</p>
                  <Bold>삼성 청년 SW 아카데미 12기</Bold>
                  <div>
                    <p>2024.07.01 - 2025.06.30</p>
                    <p>성적 우수 (1등)</p>
                  </div>
                </div>
              </SectionBoxSmall>
            </div>
          </div>
        </div>

        {/* 오른쪽: 자기소개 */}
        <div className="lg:col-span-9 space-y-6">
          <ProfileInfo />
          <ProfileSWGrid />
        </div>
      </div>
    </div>
  );
}
