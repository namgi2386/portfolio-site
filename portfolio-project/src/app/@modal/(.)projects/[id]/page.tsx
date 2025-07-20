import ProjectModal1 from '@/shared/ui/project-detail/ProjectModal1';
import ProjectModal2 from '@/shared/ui/project-detail/ProjectModal2';
import ProjectModal3 from '@/shared/ui/project-detail/ProjectModal3';
import { redirect } from 'next/navigation';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 유효한 ID가 아닌 경우 메인으로 리다이렉트
  if (id !== '1' && id !== '2' && id !== '3') {
    redirect('/');
  }

  // ID에 따른 컴포넌트 렌더링
  switch (id) {
    case '1':
      return <ProjectModal1 />;
    case '2':
      return <ProjectModal2 />;
    case '3':
      return <ProjectModal3 />;
    default:
      // 이미 위에서 리다이렉트하므로 여기는 도달하지 않음
      return null;
  }
}
