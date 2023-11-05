import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { Silkscreen } from "next/font/google";
import { motion } from "framer-motion";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  weight: ["400", "700"],
});
const Footer = () => {
  return (
    <footer
      className={
        "font-medium w-full border-t-2 border-solid border-dark  text-lg dark:text-light dark:border-light sm:text-base"
      }
    >
      <Layout className="font-silkscreen flex justify-between py-8 items-center lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="custom-item ">
          Build With{" "}
          <span className="text-primary text-2xl px-1">&#9825; </span> by&nbsp;
          <motion.a
            href="https:xyz.xyz"
            target={"_blank"}
            whileHover={{ y: -2 }}
          >
            WiNF
          </motion.a>
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
