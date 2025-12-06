import MainTitleSection from '@/widgets/main-title-section';
import ProfileSection from '@/widgets/profile-section/profile-section';
import ProjectSection from '@/widgets/project-section';
import BlogSection from '@/widgets/blog-section';
import FinalSection from '@/widgets/final-section';

export default function Home() {
  return (
    <>
      {/* 메인 타이틀 섹션 */}
      <div id="main-title-section" className="pt-12">
        <MainTitleSection />
      </div>
      {/* 프로필 섹션 */}
      <div id="profile-section" className="pt-12">
        <ProfileSection />
      </div>
      {/* 프로젝트 섹션 */}
      <div id="project-section" className="pt-12">
        <ProjectSection />
      </div>
      {/* 블로그 섹션 */}
      <div id="blog-section" className="pt-12">
        <BlogSection />
      </div>
      {/* 마지막 섹션 */}
      <div id="final-section" className="pt-12">
        <FinalSection />
      </div>
    </>
  );
}
