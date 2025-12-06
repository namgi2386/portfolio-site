import Image from 'next/image';
import { TECH_ICONS, TECH_ICON_LABELS, TechIconName } from '@/shared/config/icons';

interface TechIconProps {
  /** 아이콘 이름 (타입 안정성 제공) */
  name: TechIconName;
  /** 아이콘 크기 (기본값: 32) */
  size?: number;
  /** 대체 텍스트 (기본값: 아이콘 이름에 따라 자동 설정) */
  alt?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

/**
 * 기술 스택 아이콘 컴포넌트
 *
 * @example
 * ```tsx
 * <TechIcon name="react" />
 * <TechIcon name="nextjs" size={40} />
 * <TechIcon name="typescript" className="custom-class" />
 * ```
 */
export default function TechIcon({ name, size = 32, alt, className = 'rounded' }: TechIconProps) {
  const iconPath = TECH_ICONS[name];
  const iconAlt = alt || TECH_ICON_LABELS[name];

  return <Image src={iconPath} alt={iconAlt} width={size} height={size} className={className} />;
}
