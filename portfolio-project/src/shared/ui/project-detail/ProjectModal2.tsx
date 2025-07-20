'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProjectModal2() {
  const router = useRouter();
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [router]);
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => router.back()}>
        <div className="bg-foreground p-8 rounded-lg max-w-md w-full text-background" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => router.back()}>X</button>
          <div>모달화면</div>
        </div>
      </div>
    </>
  );
}
