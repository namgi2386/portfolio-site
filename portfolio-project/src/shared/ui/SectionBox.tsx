import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}
interface BoldProps {
  children: ReactNode;
}

export function Bold({ children }: BoldProps) {
  return <span className="font-bold text-foreground">{children}</span>;
}

export default function SectionBox({ children, className = '' }: Props) {
  return <div className={`bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-6 md:p-8 text-no1 dark:text-no3 leading-relaxed text-base md:text-lg ${className}`}>{children}</div>;
}

export function SectionBoxSmall({ children, className = '' }: Props) {
  return <div className={`bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-3 md:p-4 text-no1 dark:text-no3 leading-relaxed text-sm lg:text-base ${className}`}>{children}</div>;
}
