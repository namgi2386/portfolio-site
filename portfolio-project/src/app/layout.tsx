import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'portfolio-project',
  description: 'portfolio!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar/>
          {children}
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
