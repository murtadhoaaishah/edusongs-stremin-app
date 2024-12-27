'use client';
import TopBar from '@/components/organisms/NavBar';
import SideNav from '@/components/organisms/SideNav';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen overflow-hidden">
      <SideNav />
      <div className="flex flex-col overflow-hidden">
        <TopBar />
        <main
          className={` bg-gray-50 pt-4 pb-24 overflow-y-auto flex-grow  h-full transition-all duration-300
       `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
