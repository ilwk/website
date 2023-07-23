'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import cn from 'clsx';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname(); // active paths on dynamic subpages
  const active = pathname === href;

  return (
    <Link
      className={cn(
        'rounded-full px-4 py-2 text-sm transition-colors',
        active ? 'bg-secondary text-primary' : 'text-secondary'
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
