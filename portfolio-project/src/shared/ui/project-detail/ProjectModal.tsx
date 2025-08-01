'use client';

import ProjectModal1 from '@/shared/ui/project-detail/ProjectModal1';
import ProjectModal2 from '@/shared/ui/project-detail/ProjectModal2';
import ProjectModal3 from '@/shared/ui/project-detail/ProjectModal3';
import { useRouter, redirect } from 'next/navigation';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

interface ProjectModalProps {
  id: string;
}

const modalComponents = {
  '1': ProjectModal1,
  '2': ProjectModal2,
  '3': ProjectModal3,
} as const;

type ModalId = keyof typeof modalComponents;

export default function ProjectModal({ id }: ProjectModalProps) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [router]);

  // 유효하지 않은 id인 경우 리다이렉트
  if (!(id in modalComponents)) {
    redirect('/');
  }

  const ModalComponent = modalComponents[id as ModalId];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => router.back()}>
      <div className="relative bg-background p-8 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => router.back()} className="absolute right-10 cursor-pointer hover:text-no43 transition duration-200 ease-in-out">
          <IoClose size={24} />
        </button>
        <ModalComponent />
      </div>
    </div>
  );
}
