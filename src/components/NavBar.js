// Import
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import InstagramIcon from "@/icons/InstagramIcon";
import YoutubeIcon from "@/icons/YtIcon";
import GithubIcon from "@/icons/GithubIcon";
import LInkedinIcon from "@/icons/LInkedinIcon";
import { motion } from "framer-motion";

// Isi
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between  ">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink
          title="Connect"
          href="/connect"
          
          className="ml-4 "
        >
          Connect
        </CustomLink>
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
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/winf2307"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <LInkedinIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
