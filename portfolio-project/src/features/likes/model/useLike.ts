import { LikeApi } from '@/entities/likes';
import { useEffect, useState } from 'react';

export default function useLike() {
  const [isLiked, setIsLiked] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  const fetchHeartCounts = async () => {
    try {
      const response = await LikeApi.getLikes();
      if (response.success) {
        setHeartCount(response.count);
      } else {
        console.error('fetchHeartCounts Error', response.error);
      }
    } catch (error) {
      console.error('fetchHeartCounts Error', error);
    }
  };

  useEffect(() => {
    const havebeenliked = localStorage.getItem('loveActually');
    if (havebeenliked === 'true') {
      setIsLiked(true);
    }
    fetchHeartCounts();
  }, []);

  const clickThatLike = async () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    localStorage.setItem('loveActually', newLikedState.toString());
    try {
      const action = newLikedState ? 'like' : 'unlike';
      const response = await LikeApi.postLikeOrDislike(action);
      if (response.success) {
        fetchHeartCounts();
      } else {
        setIsLiked(!newLikedState);
        localStorage.setItem('loveActually', (!newLikedState).toString());
        console.error('updateHeartCounts Error in response', response.error);
      }
    } catch (error) {
      setIsLiked(!newLikedState);
      localStorage.setItem('loveActually', (!newLikedState).toString());
      console.error('updateHeartCounts Error', error);
    }
  };
  return {
    isLiked,
    clickThatLike,
    heartCount,
    refetch: fetchHeartCounts,
  };
}
