import {
  HomeIcon,
  FileTextIcon,
  FaceIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import NavLink from './nav-link';
import Link from 'next/link';

const links = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    label: 'Blog',
    icon: <FileTextIcon />,
    href: '/blog',
  },
  {
    label: 'About',
    icon: <FaceIcon />,
    href: '/about',
  },
];

export const PageHeader = () => {
  return (
    <header className='sticky top-0 z-10 backdrop-blur-md'>
      <nav className='navbar mx-auto flex max-w-2xl items-center justify-between'>
        <ul className='flex items-center gap-1'>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.icon}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <Link
              className='btn btn-ghost'
              href='https://github.com/ilwk/website'
              target='_blank'
            >
              <GitHubLogoIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
