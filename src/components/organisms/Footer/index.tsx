import Button from "@/components/atoms/Button";
import React from "react";
import { footerLinks } from "../../../../data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="w-1/2 mx-auto">
        <Button label="Get Started" />
        <p className="my-2 text-white">Create or restart your membership</p>
      </div>
      <div className="mb-4 underline">
        <span className="">Questions?</span>
        <span>Contact Us.</span>
      </div>
      <div className=" mb-[3rem] max-w-3xl  grid grid-cols-1 md:grid-cols-2 gap-2 underline">
        {footerLinks.map(({ links }, index) =>
          links.map(({ name, url }, subIndex) => (
            <a href={url} key={`${index}- ${subIndex}`}>
              {name}
            </a>
          ))
        )}
      </div>
      <p className="rounded-[2rem] flex justify-center text-white border border-ash w-28 p-2 mb-4">
        English
      </p>
      <p>Nyamuk Africa</p>
    </footer>
  );
};

export default Footer;
