import React from "react";
import { motion } from "framer-motion";

const PartSkill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer absolute py-3 px-6 dark:text-dark dark:bg-light 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
        xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    
      // viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};
const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-[57px] md:mt-32">Skills</h2>
      <div className="w-full h-screen lg:h-[70vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd dark:md:bg-circularDarkMd
      xs:bg-circularLightSm xs:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light 
        lg:p-6 md:p-4 xs:text-xs xs:p-2   xs:font-bold "
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>

        <PartSkill name="CSS" x="-5vw" y="-10vw" />
        <PartSkill name="Html" x="-20vw" y="2vw" />
        <PartSkill name="ReactJs" x="20vw" y="6vw" />
        <PartSkill name="ThreeJS" x="0vw" y="12vw" />
        <PartSkill name="NextJs" x="-20vw" y="-15vw" />
        <PartSkill name="TailwindCSS" x="15vw" y="-12vw" />
        <PartSkill name="Photoshop" x="32vw" y="-5vw" />
        <PartSkill name="Blender" x="0vw" y="-20vw" />
        <PartSkill name="Python" x="-25vw" y="18vw" />
        <PartSkill name="Ilustrator" x="18vw" y="18vw" />
        <PartSkill name="Microsoft Office" x="-5vw" y="21vw" />
      </div>
    </>
  );
};

export default Skill;
