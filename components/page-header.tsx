import Link from 'next/link';
import { EggIcon, FeatherIcon, HomeIcon } from 'lucide-react';
import NavLink from './nav-link';

const links = [
  {
    label: 'Home',
    href: '/',
  },
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
        <Link href='/' className='hidden shrink-0 items-center gap-3 sm:flex'>
          <FeatherIcon className='h-6 w-6' />
          <span>VET3X</span>
        </Link>
        <ul className='flex items-center gap-6'>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className='flex h-8 w-8 items-center justify-center'></div>
      </nav>
    </header>
  );
};
