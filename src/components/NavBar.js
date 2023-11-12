// Import
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import InstagramIcon from "@/icons/InstagramIcon";
import YoutubeIcon from "@/icons/YtIcon";
import GithubIcon from "@/icons/GithubIcon";
import LInkedinIcon from "@/icons/LInkedinIcon";
import { motion } from "framer-motion";
import UseThemeSwitcher from "./hooks/useThemeSwitcher";
import LightMode from "@/icons/LightMode";
import DarkMode from "@/icons/DarkkMode";

// Isi
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block  bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = UseThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" z-[99] w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative  lg:px-16 md:px-12 sm:px-8 ">
      <button
        className=" flex-col justify-center items-center  hidden ia:flex md:-ml-0 lg:-ml-[2rem]"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-500 ease-out block h-[3px] w-10 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-[24px]" : "-translate-y-0.7"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light flex items-start h-[3px] w-6 rounded-sm my-2 lg:-ml-[15px]  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-[3px] w-10 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-4" : "translate-y-0.7"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center ia:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="mx-4" />
        </nav>

        <nav className="flex justify-center items-center flex-wrap ">
          <motion.a
            href="https://instagram.com/fzn7289"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://youtube.com/@WiNF-Vells?si=JxRQ_RGRqWkcEgdj"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <YoutubeIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mr-3 flex rounded-full  ${
              mode === "light" ? " text-light" : "bg-light text-dark"
            } `}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/winf2307"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 "
          >
            <LInkedinIcon className={`rounded-full`} />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            } `}
          >
            {mode === "dark" ? (
              <LightMode className={"fill-dark"} />
            ) : (
              <DarkMode className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-30  min-w-[70vw] flex flex-col justify-between items-center fixed 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              title="Contact"
              href="/contact"
              className=" "
              toggle={handleClick}
            />
          </nav>

          <nav className="flex justify-center items-center flex-wrap mt-2 ">
            <motion.a
              href="https://instagram.com/fzn7289"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm-mx-1"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://youtube.com/@WiNF-Vells?si=JxRQ_RGRqWkcEgdj"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm-mx-1"
            >
              <YoutubeIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`bg-light rounded-full w-6 mr-3 flex sm-mx-1  ${
                mode === "light" ? " text-light" : "bg-light text-dark"
              } `}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/winf2307"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3  sm-mx-1"
            >
              <LInkedinIcon className={`rounded-full`} />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              } `}
            >
              {mode === "dark" ? (
                <LightMode className={"fill-dark"} />
              ) : (
                <DarkMode className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
