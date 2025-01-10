'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <div className="w-1/2 mx-auto">
      <div className="pt-6">
        <Image
          className="w-44 mx-auto"
          src="/images/edusongslogo.png"
          alt=""
          width={500}
          height={500}
        />

        <div className="flex mx-10 font-medium border-b-2">
          {[
            {
              name: 'Sign in',
              href: '/auth/login',
            },
            {
              name: 'Sign up',
              href: '/auth/signup',
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mx-0 w-16 pb-1 cursor-pointer ${
                pathName === link.href ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
