import MainTitleSection from '@/widgets/main-title-section';
import ProfileSection from '@/widgets/profile-section';
import ProjectSection from '@/widgets/project-section';
import BlogSection from '@/widgets/blog-section';
import FinalSection from '@/widgets/final-section';

export default function Home() {
  return (
    <>
      {/* 메인 타이틀 섹션 */}
      <MainTitleSection />
      {/* 프로필 섹션 */}
      <ProfileSection />
      {/* 프로젝트 섹션 */}
      <ProjectSection />
      {/* 블로그 섹션 */}
      <BlogSection />
      {/* 마지막 섹션 */}
      <FinalSection />
    </>
  );
}
