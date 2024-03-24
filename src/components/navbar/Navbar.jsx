import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThreeBars } from "@styled-icons/octicons/ThreeBars";
import { Close } from "@styled-icons/material-sharp/Close";

const Navbar = () => {
  const links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-10 backdrop-blur-lg bg-opacity-50 rounded-lg'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 backdrop-blur-lg bg-opacity-50'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 text-white md:justify-center'>
          <span>LOGO</span>
        </div>
        <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white'>
          {open ? <Close /> : <ThreeBars />}
        </div>
        <ul className={`flex flex-col md:flex-row items-center justify-center absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 bg-white backdrop-blur-lg md:pb-0 pb-12 ' : 'top-[-490px] '}`}>
          {links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold ' onClick={toggleMenu}>
              <Link to={link.link} className='md:text-white text-blackhover:text-blue-400 duration-500'>{link.name}</Link>
            </li>
          ))}
          <a className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static' target='_blank' href='https://bit.ly/vaibhavkumarCV'>Resume</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
