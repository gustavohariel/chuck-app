import type { Metadata } from 'next';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import { Providers } from '@/providers/providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Chuck Facts',
  description: 'Find out more about Chuck Norris Facts!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
