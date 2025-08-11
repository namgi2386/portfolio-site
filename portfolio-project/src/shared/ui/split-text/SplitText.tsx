'use client';
import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(GSAPSplitText); // GSAP에 SplitText 플러그인 등록

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | gsap.EaseFunction;
  splitType?: 'chars' | 'words' | 'lines' | 'words,chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  textAlign?: React.CSSProperties['textAlign'];
}

export default function SplitText({
  text,
  className = '',
  delay = 60,
  duration = 1,
  ease = 'elastic.out(1,0.6)',
  splitType = 'chars',
  from = { opacity: 0, y: -40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
}: SplitTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const initializeAnimation = useCallback(() => {
    // 서버사이드 렌더링 체크, DOM 참조 체크, 텍스트 존재 체크
    if (typeof window === 'undefined' || !ref.current || !text) return;

    const el = ref.current; // DOM 요소 참조를 변수에 저장

    const absoluteLines = splitType === 'lines';
    if (absoluteLines) el.style.position = 'relative';

    let splitter: GSAPSplitText; // SplitText 인스턴스 변수 선언
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: 'split-line',
      });
    } catch (error) {
      console.error('Failed to create SplitText:', error);
      return;
    }

    let targets: Element[]; // 애니메이션 대상 요소들 배열
    switch (splitType) {
      case 'lines':
        targets = splitter.lines;
        break;
      case 'words':
        targets = splitter.words;
        break;
      case 'chars':
        targets = splitter.chars;
        break;
      default:
        targets = splitter.chars;
    }

    if (!targets || targets.length === 0) {
      console.warn('No targets found for SplitText animation');
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      if (t instanceof HTMLElement) {
        t.style.willChange = 'transform, opacity'; // GPU 가속을 위한 will-change 속성 설정
      }
    });

    // gsap 타임라인 생성 문법
    const tl = gsap.timeline({
      smoothChildTiming: true,
      onComplete: () => {
        gsap.set(targets, {
          ...to,
          clearProps: 'willChange', // will-change 속성 제거 (최적화)
          immediateRender: true,
        });
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true }); // 타임라인에 초기 상태 설정 (즉시 렌더링 안함, 3D 가속 사용)
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    }); // 타임라인에 애니메이션 추가

    // 클린업!
    return () => {
      tl.kill(); // 타임라인 제거
      gsap.killTweensOf(targets); // 대상 요소들의 모든 애니메이션 제거
      if (splitter) {
        splitter.revert();
      } // splitter 인스턴스 초기화
    };
  }, [text, delay, duration, ease, splitType, from, to]);

  useEffect(() => {
    return initializeAnimation();
  }, [initializeAnimation]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {text}
    </p>
  );
}
