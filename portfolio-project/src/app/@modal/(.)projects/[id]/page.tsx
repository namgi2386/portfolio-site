import ProjectModal1 from '@/shared/ui/project-detail/ProjectModal1';
import ProjectModal2 from '@/shared/ui/project-detail/ProjectModal2';
import ProjectModal3 from '@/shared/ui/project-detail/ProjectModal3';
import { redirect } from 'next/navigation';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id !== '1' && id !== '2' && id !== '3') {
    redirect('/');
  }

  switch (id) {
    case '1':
      return <ProjectModal1 />;
    case '2':
      return <ProjectModal2 />;
    case '3':
      return <ProjectModal3 />;
    default:
      return null;
  }
}
