import ProjectModal from '@/features/projects/ui/ProjectModal';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProjectModal id={id} />;
}
