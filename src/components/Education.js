import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, typet, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        className=""
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="flex flex-row">
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
          <h3 className="capitalize font-bold text-2xl text-primary sm:text-xl xs:text-lg">
            {typet}
          </h3>
        </div>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-[16rem]">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:!text-[57px]  xs:!text-[34px]">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full  ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-[97%] origin-top bg-dark dark:bg-light md:w-[2px] md:left-[30px] xs:left-[18px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Online"
            typet="Coursework"
            time="2023"
            place="SKill Academy"
            info="sjjs snsu usnns ushns usu nsjs hsjs hss jsjs bssbs usas ushasw uwsuhs"
          />
          <Details
            type="Online"
            typet="Coursework"
            time="2023"
            place="SKill Academy"
            info="sjjs snsu usnns ushns usu nsjs hsjs hss jsjs bssbs usas ushasw uwsuhs"
          />
          <Details
            type="Online"
            typet="Coursework"
            time="2023"
            place="SKill Academy"
            info="sjjs snsu usnns ushns usu nsjs hsjs hss jsjs bssbs usas ushasw uwsuhs"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
