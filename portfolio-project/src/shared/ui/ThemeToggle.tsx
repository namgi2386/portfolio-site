'use client';
import { useTheme } from 'next-themes';
import { BsBrightnessAltHigh, BsBrightnessAltHighFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-2xl cursor-pointer">
      <BsBrightnessAltHigh className="dark:hidden" />
      <BsBrightnessAltHighFill className="hidden dark:block" />
    </button>
  );
}
