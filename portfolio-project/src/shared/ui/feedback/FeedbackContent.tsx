'use client';

import { FeedbackContentProps } from '@/entities/feedback/model/types';
import { useRouter } from 'next/navigation';
import FeedbackForm from '@/shared/ui/feedback/FeedbackForm';
import { useEffect } from 'react';

export default function FeedbackContent({ isModal = false }: FeedbackContentProps) {
  const router = useRouter();

  const handleClose = () => {
    if (isModal) {
      router.back();
    } else {
      router.push('/');
    }
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [router]);

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => router.back()}>
        <div className="bg-foreground p-8 rounded-lg max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-background font-paperlogy">피드백</h2>
            <button onClick={handleClose} className="text-background cursor-pointer text-xl ">
              ✕
            </button>
          </div>
          <FeedbackForm />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold font-paperlogy my-6">피드백</h2>
      <FeedbackForm />
    </main>
  );
}
