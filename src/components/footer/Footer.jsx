import React from "react";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/evaicons-solid/Github";
import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";


const Footer = () => {
  return (
    <section className="bg-[#101010] m-4 rounded-xl md:h-auto border border-gray-200 border-opacity-25 flex flex-col items-center text-[#F5FEFD] ">
      <div className="max-w-screen-xl p-4 mx-auto overflow-hidden sm:px-4 lg:px-8">
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/vaibhavkumar11/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Linkedin className="h-4" />
          </a>
          <a href="https://github.com/vaibhav11kr" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Github className="h-4" />
          </a>
          <a href="https://www.instagram.com/_kumar.vaibhav/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Instagram className="h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <Facebook className="h-4" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Dribbble</span>
            <Twitter className="h-4" />
          </a>
        </div>
        <p className="mt-4 text-sm leading-4 text-center text-gray-400">
          © 2021, Made with ☕ by Vaibhav.
        </p>
      </div>
    </section>
  );
};

export default Footer;
