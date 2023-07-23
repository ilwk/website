import Link from 'next/link';
import { HomeIcon } from 'lucide-react';
import NavLink from './nav-link';

const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

export const PageHeader = () => {
  return (
    <header className='main-header bg-header sticky top-0 z-10 backdrop-blur-md'>
      <nav className='mx-auto flex max-w-[700px] items-center justify-between px-4 py-2 md:px-6 '>
        <Link href='/' className='hidden shrink-0 sm:block'>
          <HomeIcon className='h-4 w-4' />
        </Link>
        <ul className='flex items-center gap-6'>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className='flex h-8 w-8 items-center justify-center'>
          {/* <ThemeSwitcher /> */}
        </div>
      </nav>
    </header>
  );
};
