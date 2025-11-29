import ProjectModal1 from '@/features/projects/ui/ProjectModal1';
import ProjectModal2 from '@/features/projects/ui/ProjectModal2';
import ProjectModal3 from '@/features/projects/ui/ProjectModal3';
import ProjectModal4 from '@/features/projects/ui/ProjectModal4';
import { redirect } from 'next/navigation';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id !== '1' && id !== '2' && id !== '3' && id !== '4') {
    redirect('/');
  }

  switch (id) {
    case '1':
      return (
        <div className="py-32 px-16">
          <ProjectModal1 />
        </div>
      );
    case '2':
      return (
        <div className="py-32 px-16">
          <ProjectModal2 />
        </div>
      );
    case '3':
      return (
        <div className="py-32 px-16">
          <ProjectModal3 />
        </div>
      );
    case '4':
      return (
        <div className="py-32 px-16">
          <ProjectModal4 />
        </div>
      );
    default:
      return null;
  }
}
