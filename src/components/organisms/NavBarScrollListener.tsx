"use client";

import { useState, useEffect, ReactNode } from "react";

interface NavbarScrollListenerProps {
  children: (isScrolled: boolean) => ReactNode;
}

const NavbarScrollListener: React.FC<NavbarScrollListenerProps> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Explicitly invoke the `children` function with `isScrolled`
  return <>{children(isScrolled)}</>;
};

export default NavbarScrollListener;
