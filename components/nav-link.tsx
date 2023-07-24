'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children, ...props }: NavLinkProps) {
  const pathname = usePathname(); // active paths on dynamic subpages
  const active = href === '/' ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      {...props}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded text-sm',
        'transition-colors',
        'hover:bg-secondary hover:text-primary',
        active ? 'bg-secondary text-primary' : 'text-secondary'
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
