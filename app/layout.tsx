import './globals.css';
import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';

export const metadata = {
  title: 'VET3X',
  description:
    'Software engineer specializing in JavaScript-related technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen  dark:bg-neutral-900 dark:text-neutral-50`}
      >
        <PageHeader></PageHeader>
        <main className='mx-auto flex max-w-2xl flex-col gap-20 px-4 py-20'>
          {children}
        </main>
        <PageFooter />
      </body>
    </html>
  );
}
