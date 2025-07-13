'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsBrightnessAltHigh, BsBrightnessAltHighFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-2xl">
      {theme === 'dark' ? <BsBrightnessAltHighFill /> : <BsBrightnessAltHigh />}
    </button>
  );
}
