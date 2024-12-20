"use client";
import { useEffect, useState } from "react";
import HeroComp1 from "./HeroComp1";
import HeroComp2 from "./HeroComponent2";
import "./Hero.css";
import { title } from "process";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`w-screen ${currentPage === 0 ? "hero1" : "hero2"}`}>
      {currentPage === 0 ? (
        <HeroComp1 />
      ) : (
        <HeroComp2 />
      )}
    </section>
  );
};

export default Hero;
