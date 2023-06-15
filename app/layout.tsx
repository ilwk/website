import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vet3x',
  description: 'Software engineer specializing in JavaScript-related technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[inter.className, 'max-w-2xl mx-auto py-10 px-4'].join(' ')}>
        <header className="flex items-baseline justify-between ">
          <h1 className="text-3xl">VET3X</h1>
          <nav className="space-x-4">
            <a href="/about">About</a>
            <a href="/rss.xml">RSS</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
