import ProjectModal from '@/shared/ui/project-detail/ProjectModal';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProjectModal id={id} />;
}
