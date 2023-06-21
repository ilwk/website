import Link from 'next/link';
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
      <body className={`${inter.className} min-h-screen  dark:bg-neutral-900 dark:text-neutral-50`}>
        <section className="max-w-2xl px-4 py-10 mx-auto ">
          <header className="flex items-baseline justify-between ">
            <Link href="/">
              <h1 className="text-3xl">VET3X</h1>
            </Link>
            <nav className="space-x-4">
              <Link href="/about">About</Link>
              <Link href="/rss.xml">RSS</Link>
            </nav>
          </header>
          {children}
        </section>
      </body>
    </html>
  );
}
