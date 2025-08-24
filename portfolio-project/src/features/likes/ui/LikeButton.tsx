'use client';

import useLike from '@/features/likes/model/useLike';

export default function LikeButton() {
  const { clickThatLike, heartCount, isLiked } = useLike();

  return (
    <div className="relative">
      <button aria-label={isLiked ? '좋아요 취소' : '좋아요'} title={isLiked ? '좋아요 취소' : '좋아요'} className="text-2xl cursor-pointer" onClick={clickThatLike}>
        {isLiked ? '❤️' : '🩶'}
      </button>
      <div className="absolute -top-2 -right-3 cursor-pointer border border-2 p-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-background text-xs">{heartCount}</div>
    </div>
  );
}
