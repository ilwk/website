import { HomeIcon, FileTextIcon, FaceIcon } from '@radix-ui/react-icons';
import NavLink from './nav-link';

const links = [
  {
    label: <HomeIcon />,
    href: '/',
  },
  {
    label: <FileTextIcon />,
    href: '/blog',
  },
  {
    label: <FaceIcon />,
    href: '/about',
  },
];

export const PageHeader = () => {
  return (
    <header className='main-header bg-header sticky top-0 z-10 backdrop-blur-md'>
      <nav className='mx-auto flex max-w-2xl items-center justify-between p-2 md:px-4 '>
        <ul className='flex items-center gap-2'>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
