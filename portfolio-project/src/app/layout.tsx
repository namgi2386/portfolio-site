import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'portfolio-project',
  description: 'portfolio!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
