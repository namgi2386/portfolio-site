'use client';

import ProjectModal1 from '@/features/projects/ui/ProjectModal1';
import ProjectModal2 from '@/features/projects/ui/ProjectModal2';
import ProjectModal3 from '@/features/projects/ui/ProjectModal3';
import ProjectModal4 from '@/features/projects/ui/ProjectModal4';
import ProjectModal5 from '@/features/projects/ui/ProjectModal5';
import { useRouter, redirect } from 'next/navigation';
import { useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ProjectModalProps {
  id: string;
}

const modalComponents = {
  '1': ProjectModal1,
  '2': ProjectModal2,
  '3': ProjectModal3,
  '4': ProjectModal4,
  '5': ProjectModal5,
} as const;

type ModalId = keyof typeof modalComponents;

export default function ProjectModal({ id }: ProjectModalProps) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
      if (e.key === 'ArrowLeft') navigateProject('prev');
      if (e.key === 'ArrowRight') navigateProject('next');
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!(id in modalComponents)) {
    redirect('/');
  }

  const ModalComponent = modalComponents[id as ModalId];
  const currentIndex = parseInt(id);

  const navigateProject = (direction: 'prev' | 'next') => {
    const total = Object.keys(modalComponents).length;
    const nextIndex = direction === 'prev' ? (currentIndex === 1 ? total : currentIndex - 1) : currentIndex === total ? 1 : currentIndex + 1;

    router.replace(`/projects/${nextIndex}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={() => router.back()}>
      {/* 이전 버튼 */}
      <button
        aria-label="이전 프로젝트로 이동"
        title="이전 프로젝트로 이동"
        onClick={(e) => {
          e.stopPropagation();
          navigateProject('prev');
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-10"
      >
        <IoChevronBack size={24} className="text-white" />
      </button>

      {/* 모달 콘텐츠 */}
      <div className="relative w-full max-w-6xl mx-16 bg-textured p-8 rounded-2xl max-h-[90vh] overflow-y-auto " onClick={(e) => e.stopPropagation()}>
        <button aria-label="닫기" title="닫기" onClick={() => router.back()} className="absolute right-10 top-10 z-20 cursor-pointer hover:text-no43 transition duration-200 ease-in-out">
          <IoClose size={24} />
        </button>

        {/* 인디케이터 */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: Object.keys(modalComponents).length }, (_, i) => (
            <div key={i + 1} className={`w-2 h-2 rounded-full transition-all duration-200 ${i + 1 === currentIndex ? 'bg-custompurple' : 'bg-gray-300'}`} />
          ))}
        </div>

        <ModalComponent />
      </div>

      {/* 다음 버튼 */}
      <button
        aria-label="다음 프로젝트로 이동"
        title="다음 프로젝트로 이동"
        onClick={(e) => {
          e.stopPropagation();
          navigateProject('next');
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-10"
      >
        <IoChevronForward size={24} className="text-white" />
      </button>
    </div>
  );
}
