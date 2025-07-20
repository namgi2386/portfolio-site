'use client';

import ProjectModal1 from '@/shared/ui/project-detail/ProjectModal1';
import ProjectModal2 from '@/shared/ui/project-detail/ProjectModal2';
import ProjectModal3 from '@/shared/ui/project-detail/ProjectModal3';
import { useRouter, redirect } from 'next/navigation';
import { useEffect } from 'react';

interface ProjectModalProps {
  id: string;
}

export default function ProjectModal({ id }: ProjectModalProps) {
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [router]);

  if (id !== '1' && id !== '2' && id !== '3') {
    redirect('/');
  }

  switch (id) {
    case '1':
      return (
        <>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => router.back()}>
            <div className="relative bg-background p-8 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => router.back()} className="absolute right-10 text-gray-400 hover:text-white text-2xl font-bold">
                ×
              </button>
              <ProjectModal1 />
            </div>
          </div>
        </>
      );
    case '2':
      return (
        <>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => router.back()}>
            <div className="relative bg-background p-8 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => router.back()} className="absolute right-10 text-gray-400 hover:text-white text-2xl font-bold">
                ×
              </button>
              <ProjectModal2 />
            </div>
          </div>
        </>
      );
    case '3':
      return (
        <>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => router.back()}>
            <div className="relative bg-background p-8 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => router.back()} className="absolute right-10 text-gray-400 hover:text-white text-2xl font-bold">
                ×
              </button>
              <ProjectModal3 />
            </div>
          </div>
        </>
      );
    default:
      return null;
  }
}
