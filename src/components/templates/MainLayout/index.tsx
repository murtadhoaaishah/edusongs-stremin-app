"use client";
import Footer from "@/components/organisms/Footer";
import NavBar from "@/components/organisms/NavBar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
