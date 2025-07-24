import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Sidebar from '@/shared/ui/Sidebar';

export const metadata: Metadata = {
  title: '임남기 | Frontend Developer portfolio',
  description: '프론트엔드 개발자 임남기의 포트폴리오 사이트. React와 Next.js를 다룹니다.',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    other: {
      'naver-site-verification': 'ec1702c58ce9f6d66225dcde3031b1a664bf4761',
    },
  },
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          {children}
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
