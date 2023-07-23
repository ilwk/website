import './globals.css';
import { PageHeader } from '@/components/page-header';

export const metadata = {
  title: 'Vet3x',
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
        {children}
      </body>
    </html>
  );
}
