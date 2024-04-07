import React from "react";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/evaicons-solid/Github";
import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
const Socials = () => {
  return (
    <div className="flex justify-around items-center w-[80vw] rounded-xl ">
      <div className="flex flex-col w-4 items-center justify-center p-1 hover:scale-150 cursor-pointer">
        <Linkedin className="h-4 mb-1" />
        <span className="text-sm ">Linkedin</span>
      </div>
      <div className="flex flex-col w-4 items-center justify-center  p-1 rounded-lg">
        <Github className="h-4 mb-1" />

        <span className="text-sm ">Github</span>
      </div>
      <div className="flex flex-col w-4 items-center justify-center p-1 rounded-lg">
        <Instagram className="h-4 mb-1" />
        <span className="text-sm ">Intagram</span>
      </div>
      <div className="flex flex-col w-4 items-center justify-center  p-1 rounded-lg">
        <Facebook className="h-4 mb-1" />
        <span className="text-sm ">Facebook</span>
      </div>
      <div className="flex flex-col w-4 items-center justify-center  p-1 rounded-lg">
        <Twitter className="h-4 mb-1" />
        <span className="text-sm ">Twitter</span>
      </div>
      <div className="flex flex-col w-4 items-center justify-center  p-1 rounded-lg">
        <LinkAlt className="h-4 mb-1" />
        <span className="text-sm ">Resume</span>
      </div>
    </div>
  );
};

export default Socials;
