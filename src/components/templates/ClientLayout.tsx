// src/components/ClientLayout.tsx
"use client";

import dynamic from "next/dynamic";

const DynamicNavBar = dynamic(() => import("@/components/organisms/NavBar"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("@/components/organisms/Footer"), {
  ssr: false,
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DynamicNavBar />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default ClientLayout;
