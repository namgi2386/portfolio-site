import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Fixedbar from '@/shared/ui/nav/Fixedbar';

export const metadata: Metadata = {
  title: '임남기 | Frontend Developer portfolio',
  description: '프론트엔드 개발자 임남기의 포트폴리오 사이트. React와 Next.js를 다룹니다.',
  keywords: ['임남기', '프론트엔드 개발자', 'Frontend Developer', 'React', 'Next.js', 'TypeScript', '웹 개발', '포트폴리오', 'SSAFY'],

  authors: [{ name: '임남기', url: 'https://www.imnammm.me' }],
  creator: '임남기',
  publisher: '임남기',

  metadataBase: new URL('https://www.imnammm.me'),
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.imnammm.me',
    title: '임남기 | Frontend Developer Portfolio',
    description: '프론트엔드 개발자 임남기의 포트폴리오 사이트. React와 Next.js를 다룹니다.',
    siteName: '임남기 | Frontend Developer Portfolio',
    images: [
      {
        url: '/images/open-graph/open-630.png',
        width: 1200,
        height: 630,
        alt: '임남기 Portfolio',
      },
      {
        url: '/images/open-graph/open-1200.png',
        width: 1200,
        height: 1200,
        alt: '임남기 Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '임남기 | Frontend Developer Portfolio',
    description: '프론트엔드 개발자 임남기의 포트폴리오 사이트. React와 Next.js를 다룹니다.',
    images: ['/images/open-graph/open-630.png'],
  },

  // 로봇 크롤링 설정
  robots: {
    index: true, // 검색결과에 포함
    follow: true, // 링크 내려가기 가능
    nocache: false, // 캐시 허용
    googleBot: {
      index: true, // 구글전용 동일함
      follow: true, // 동일함
      noimageindex: false, // 이미지도 포함
      'max-image-preview': 'large', // 큰이미지 허용
      'max-snippet': -1, // 텍스트미리보기제한없음
    },
  },

  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    other: {
      'naver-site-verification': '3c26c6185dcc108a90a8f0c600b3bd0bcb82c595',
    },
  },
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Fixedbar />
          {children}
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
