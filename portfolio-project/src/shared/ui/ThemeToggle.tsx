'use client';
import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';
import { BsBrightnessAltHigh, BsBrightnessAltHighFill } from 'react-icons/bs';

export default function ThemeToggle() {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-2xl">
      <BsBrightnessAltHigh className="dark:hidden" />
      <BsBrightnessAltHighFill className="hidden dark:block" />
    </button>
  );
}
