'use client';

import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('auth', JSON.stringify(true));
    router.push('/');
  };

  return (
    <div>
      <div className="bg-white max-w-md mx-auto min-h-screen lg:max-w-lg flex flex-col">
        <div className="my-8 mx-10 max-w-md">
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <Button label="Sign In" onClick={() => handleLogin()} />

          <a
            href="#"
            className="flex items-center justify-center my-3 text-center hover:text-gray-400 text-blueBlack"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
