"use client";
import { useEffect, useState } from "react";
import "./NavBar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { pages } from "../../../../data";
import Search from "@/components/molecules/Search";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   console.log("Router object:", router);
  // }, [router]);

  // useEffect(() => {
  //   AOS.init({ duration: 700, offset: 120 });
  // }, []);

  // const handleScroll = (e: any, target: any) => {
  //   e.preventDefault();
  //   document.querySelector(target).scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("Scroll event triggered"); // Check if the function is being called
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleNavigateToAuth = () => {
  //   router.push("/auth");
  // };

  return (
    <nav className="nav">
      <div className="flex">
        <p className="edusongs">EDUSONGS</p>
        <div className="nav-item-cont">
          {pages.map((page, index) => (
            // <div>
            <Link
              key={index}
              href={page.url}
              // onClick={(e) => handleScroll(e, page.url)}
            >
              {page.name}
            </Link>
            // </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-8">
          <Search />
        </div>
        <div className="user-div">
          <img src="/vectors/user.svg" alt="user" />
        </div>
        {/* <div onClick={hand}> */}

        <Button label="Get started" onClick={() => ""} />
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
