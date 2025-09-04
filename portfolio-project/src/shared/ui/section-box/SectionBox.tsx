import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}
interface BoldProps {
  children: ReactNode;
  className?: string;
}
interface StackProps {
  children: ReactNode;
  imgsrc1: string;
  imgsrc2?: string;
  name1: string;
  name2?: string;
  type: 'prime' | 'normal';
}

export function Bold({ children, className = '' }: BoldProps) {
  return <span className={`font-bold text-foreground ${className}`}>{children}</span>;
}

export default function SectionBox({ children, className = '' }: Props) {
  return (
    <div className={` bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-6 md:p-8 text-no1 dark:text-no3 leading-relaxed text-base md:text-lg tracking-wider ${className}`}>
      {children}
    </div>
  );
}

export function SectionBoxSmall({ children, className = '' }: Props) {
  return (
    <div className={` bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-3 md:p-4 text-no1 dark:text-no3 leading-relaxed text-sm lg:text-md  ${className}`}>{children}</div>
  );
}

export function SectionBoxBgNone({ children, className = '' }: Props) {
  return (
    <div className={` bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-3 md:p-4 text-no1 dark:text-no3 leading-relaxed text-sm lg:text-md ${className}`}>{children}</div>
  );
}

export function SectionBoxStack({ children, imgsrc1, imgsrc2, name1, name2, type }: StackProps) {
  if (type === 'prime') {
    return (
      <div className=" bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-3 md:p-4 text-no1 dark:text-no3 leading-relaxed text-sm lg:text-md ">
        <div className="flex flex-col gap-3 h-full">
          <div className="flex items-center space-x-3">
            <Image src={imgsrc1} alt={name1} width={40} height={40} className="rounded" />
            {imgsrc2 && name2 ? <Image src={imgsrc2} alt={name2} width={40} height={40} className="rounded" /> : <></>}
            <div className="flex flex-col">
              <div className="text-md text-custompurple font-bold">{name1}</div>
              {imgsrc2 && name2 ? <Bold className="text-md">{name2}</Bold> : <></>}
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  } else if (type === 'normal') {
    return (
      <div className=" bg-no0 dark:bg-no2 shadow-custom dark:shadow-none rounded-lg p-3 md:p-4 text-no1 dark:text-no3 leading-relaxed text-sm lg:text-md lg:min-h-46 ">
        <div className="flex flex-col gap-3  h-full">
          <div className="flex items-center space-x-3">
            <Image src={imgsrc1} alt={name1} width={40} height={40} className="rounded" />
            {imgsrc2 && name2 ? <Image src={imgsrc2} alt={name2} width={40} height={40} className="rounded" /> : <></>}
            <div className="flex flex-col">
              <div className="text-md font-bold text-foreground">{name1}</div>
              {imgsrc2 && name2 ? <div className="text-md text-foreground">{name2}</div> : <></>}
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  }
}
