import './globals.css';
import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/config/site';

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`min-h-screen`}>
        <PageHeader />
        <main className='mx-auto flex min-h-screen max-w-2xl flex-col gap-20 px-4 py-20'>
          {children}
        </main>
        <PageFooter />
      </body>
    </html>
  );
}
