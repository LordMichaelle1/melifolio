import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientOrbs } from '@/components/GradientOrbs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abiodun Michael | Software Engineer',
  description: 'Software Engineer specializing in building exceptional digital experiences with React, Next.js, and modern web technologies.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Abiodun Michael' }],
  openGraph: {
    title: 'Abiodun Michael | Software Engineer',
    description: 'Software Engineer specializing in building exceptional digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-primary min-h-screen antialiased`}>
        <ThemeProvider>
          <GradientOrbs />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
