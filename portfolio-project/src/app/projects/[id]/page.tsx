export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <div>전체화면</div>
      <div>Project: {id}</div>
    </>
  );
}
