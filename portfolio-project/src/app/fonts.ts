import localFont from 'next/font/local';

export const paperlogy = localFont({
  src: [
    {
      path: './fonts/PaperlogyTTF/woff/Paperlogy-4Regular-sub.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PaperlogyTTF/woff/Paperlogy-5Regular-sub.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/PaperlogyTTF/woff/Paperlogy-7Regular-sub.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-paperlogy',
  display: 'swap',
  // preload: true,
  adjustFontFallback: 'Arial',
});

// export const pretendard = localFont({
//   src: './fonts/pretendardVariable.woff2',
//   variable: '--font-pretendard',
//   display: 'swap',
// preload: true,
// weight: '400 600',
// adjustFontFallback: 'Arial',
// });
