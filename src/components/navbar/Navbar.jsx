import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";
import { LinkIntact } from "@styled-icons/open-iconic/LinkIntact";

const links = [
  { title: "HOME", url: "/" },
  { title: "ABOUT", url: "/about" },
  { title: "CONTACT", url: "/contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(0,0,0)",
      position: "absolute",
      bottom: 33
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(0,0,0)",
      position: "absolute",
      bottom: 16
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      y: -20,
      opacity: 0,
    },
    opened: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="h-16 md:bg-white flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-32 text-base sticky top-0 z-40 transition-all ease-in-out rounded-b-lg md:bg-opacity-0 md:backdrop-blur"
      // Apply motion animation to the Navbar
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* LOGO */}
      <div className="md:flex md:w-1/3 md:justify-start">
        <Link
          to="/"
          className="text-sm bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1 ml-1">Vaibhav</span>
          <span className="w-auto pr-1 pl-1 h-8 rounded bg-white text-black flex items-center justify-center">
            @hypersonic
          </span>
        </Link>
      </div>
      {/* LINKS */}
      <div className="hidden md:flex md:gap-4 md:w-1/3 md:justify-between">
  {links.map((link) => {
    return (
      <Link to={link.url} onClick={() => { setOpen((prev) => !prev) }} className="hover:text-gray-400 text-extrabold" key={link.url}>{link.title}</Link>
    );
  })}
</div>

      {/* Resume */}
      <div className="hidden md:flex md:gap-4 md:w-1/3 md:justify-end">
        <button className="md:flex md:flex-row md:justify-center md:items-center pointer bg-black text-sm text-white p-2 w-32 rounded-full hover:text-black hover:bg-white hover:border-black hover:border-[1px]"> 
          <LinkIntact className="h-3 md:flex md:justify-center mr-1 mb-1"/> 
          <a href="/" className="" target="_blank">Resume</a>
        </button>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden w-full flex flex-col justify-center items-center left-0 rounded-t-2xl bg-opacity-5 backdrop-blur bg-white/50 shadow-lg fixed bottom-0 z-50">
        {/* MENU BUTTON */}
        <button
          className="w-6 h-4 m-4 self-end flex flex-col justify-between z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-6 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="w-[70%] h-[30%] mb-8 text-black text-extrabold flex flex-wrap justify-center text-sm z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className="w-1/3 flex mb-8 font-bold justify-center"
                key={link.title}
              >
                <Link
                  to={link.url}
                  onClick={() => setOpen((prev) => !prev)}
                  className="hover:text-gray-400 text-extrabold"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}

            <button className="flex flex-row justify-center items-center pointer bg-black text-sm text-white p-2 rounded-full w-[60%]"> 
              <LinkIntact className="h-3 flex justify-center mr-1 mb-1"/> 
              <a href="/" className="" target="_blank">Resume</a>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
