import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Nightcrawler Portfolio',
  description: 'A sleek, dark-themed portfolio with smooth animations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
