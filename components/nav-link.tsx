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
      className={cn('btn btn-square btn-ghost', {
        'btn-active': active,
      })}
      href={href}
    >
      {children}
    </Link>
  );
}
