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
      return (
        <div className="p-8">
          <ProjectModal1 />
        </div>
      );
    case '2':
      return (
        <div className="p-8">
          <ProjectModal2 />
        </div>
      );
    case '3':
      return (
        <div className="p-8">
          <ProjectModal3 />
        </div>
      );
    default:
      return null;
  }
}
