import React from "react";
import { motion } from "framer-motion";



const PartSkill = ({name, x, y}) => {

    return (
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer absolute py-3 px-6"
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        animate={{x:x, y:y}}
        transition={{duration:1.5}}
        >
          {name}
        </motion.div>

    )

}
const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center ">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer"
        whileHover={{scale:1.05}}
        >
          Skills
        </motion.div>

        <PartSkill name="CSS" x="-5vw" y="-10vw"/>
        <PartSkill name="Html" x="-20vw" y="2vw"/>
        <PartSkill name="ReactJs" x="20vw" y="6vw"/>
        <PartSkill name="ThreeJS" x="0vw" y="12vw"/>
        <PartSkill name="NextJs" x="-20vw" y="-15vw"/>
        <PartSkill name="TailwindCSS" x="15vw" y="-12vw"/>
        <PartSkill name="Photoshop" x="32vw" y="-5vw"/>
        <PartSkill name="Blender" x="0vw" y="-20vw"/>
        <PartSkill name="Python" x="-25vw" y="18vw"/>
        <PartSkill name="Ilustrator" x="18vw" y="18vw"/>
        <PartSkill name="Microsoft Office" x="-5vw" y="21vw"/>
      </div>
    </>
  );
};

export default Skill;
