import './globals.css';
import type { Metadata } from 'next';
import { Archivo, Martian_Mono } from 'next/font/google';
import { MotionProvider } from '@/components/MotionProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const sans = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-sans' });
const mono = Martian_Mono({ subsets: ['latin'], variable: '--font-mono' });

const description = 'Software engineer building production web apps and backends, and writing benchmark tasks that test AI coding models.';

export const metadata: Metadata = {
  title: 'Abiodun Michael | Software Engineer',
  description,
  keywords: ['Software Engineer', 'Full Stack Developer', 'Next.js', 'TypeScript', 'Python', 'Django', 'AI Evaluation', 'Portfolio'],
  authors: [{ name: 'Abiodun Michael' }],
  openGraph: {
    title: 'Abiodun Michael | Software Engineer',
    description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} font-sans bg-background text-primary min-h-screen antialiased`}>
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
