import React from "react";
import { motion } from "framer-motion"; // Perbarui impor ini
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark dark:border-light  border-solid border-transparent border-[3px] text-light flex items-center justify-center rounded-full text-2x1 
        font-bold "
        whileHover={{
          scale: 1.2,
          // backgroundColor: [
          //   "#121212",
          //   "rgba(131,58,180,1)",
          //   "rgba(253,29,29,1)",
          //   "rgba(252,176,69,1)",
          //   "rgba(131,58,180,1)",
          //   "#121212",
          // ],
          transition: { duration: 0.5 },
        }}
      >
        WiNF
      </MotionLink>
    </div>
  );
};

export default Logo;
