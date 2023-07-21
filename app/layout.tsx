import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Vet3x',
  description: 'Software engineer specializing in JavaScript-related technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen  dark:bg-neutral-900 dark:text-neutral-50`}>
        <header className="sticky top-0 z-10">
          <nav className="px-4 md:px-6 py-2 max-w-[700px] mx-auto flex justify-between items-center dark:bg-neutral-900 dark:text-neutral-50">
            <ul className="flex items-center gap-6">
              <li>
                <a className="px-4 py-2 text-sm transition-colors rounded-full text-slate-300 hover:text-slate-400" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="px-4 py-2 text-sm transition-colors rounded-full text-slate-300 hover:text-slate-400" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
