'use client';

import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const { id } = useParams();
  return (
    <>
      <div>
        <p>project detail : {id}</p>
      </div>
    </>
  );
}
