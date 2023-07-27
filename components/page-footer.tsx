import { chunk } from 'lodash-es';
import Link from 'next/link';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },

  {
    label: 'Uses',
    href: '/uses',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  },

  {
    label: 'Github',
    href: 'https://github.com/ilwk',
  },
];

export const PageFooter = () => {
  return (
    <footer className='footer mx-auto max-w-2xl px-4 py-10 text-base-content'>
      {chunk(links, 2).map((chunk, index) => (
        <div key={index}>
          {chunk.map((link) => (
            <Link key={link.label} className='link-hover link' href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </footer>
  );
};
