'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface CountingStarsProps {
  value?: number;
  onChange?: (rating: number) => void;
  disabled?: boolean;
  name?: string;
}

export default function CountingStars({ value, onChange, disabled = false, name = 'test-rate' }: CountingStarsProps) {
  const [internalValue, setInternalValue] = useState(value ?? 0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const currentValue = value ?? internalValue;

  const handleStarClick = (rating: number) => {
    if (disabled) return;

    if (value === undefined) {
      setInternalValue(rating);
    }
    onChange?.(rating);
  };

  const getStarColor = (starNumber: number) => {
    const activeRating = hoveredRating || currentValue;

    if (starNumber > activeRating) return '#666';

    if (hoveredRating > 0) {
      const hoverColors = ['#a23c3c', '#99542d', '#9f7e18', '#22885e', '#7951ac'];
      return hoverColors[hoveredRating - 1];
    }

    if (currentValue > 0) {
      const selectedColors = ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#9333ea'];
      return selectedColors[currentValue - 1];
    }

    return '#666';
  };

  const titles = ['Bad', 'Okay', 'Good', 'Great!', 'Excellent!'];

  return (
    <div className="flex flex-row-reverse text-3xl" onMouseLeave={() => !disabled && setHoveredRating(0)}>
      {[5, 4, 3, 2, 1].map((starNumber) => (
        <label
          key={starNumber}
          title={titles[starNumber - 1]}
          className={`mr-1 transition-all duration-300 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          onMouseEnter={() => !disabled && setHoveredRating(starNumber)}
          onClick={() => handleStarClick(starNumber)}
        >
          <input type="radio" name={name} value={starNumber} checked={currentValue === starNumber} disabled={disabled} className="hidden" readOnly />
          <FaStar style={{ color: getStarColor(starNumber) }} className="transition-colors duration-300" />
        </label>
      ))}
    </div>
  );
}
