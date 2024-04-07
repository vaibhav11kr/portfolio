import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('vaibhavkr_portfolio', 'template_wusj4jq', form.current, 'l_xLMoNqrHGyS-rWe')
      e.target.reset()
    };

  return (
    <section className=" bg-[#101010] m-2 rounded-2xl  w-[90vw] md:w-[92vw] md:h-auto border border-gray-200 border-opacity-25 flex flex-col items-center text-[#F5FEFD] relative">
      <motion.h2 
        className="text-3xl font-mono font-extrabold mt-8"
        whileHover={{ scale: 1.2, rotate: 3, color: "#9A616D", textDecoration: "underline" }}
        transition={{ duration: 0.3 }}
      >
        Contact Me
      </motion.h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl ">Lets Connect and discuss.</p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 w-[75%] mb-10">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
              </div>
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                  <input type="text" name="name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your message..." name="message"></textarea>
              </div>
              <button type="submit" value="Send" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
      </section>
  );
};

export default ContactForm;
