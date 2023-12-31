import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}{" "}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-[16rem]">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:!text-[57px] xs:!text-[34px]">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-[100%] ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-[97%] origin-top bg-dark dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[18px] "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Web Developer"
            company="Fiverr"
            companyLink="https://fiverr.com"
            time="2023-present"
            address="msjs"
            work="nsjs jsjs jsjs jsj sws uwiqbsb uisqbs jsj sjjs sjjs jsj sjsjj ajaj jaaaaaaaaajaj jajajaj ajajaj jaj
            ajaajaja jaj"
          />

          <Details
            position="Web Developer"
            company="Fiverr"
            companyLink="https://fiverr.com"
            time="2023-present"
            address="msjs"
            work="nsjs jsjs jsjs jsj sws uwiqbsb uisqbs jsj sjjs sjjs jsj sjsjj ajaj jaaaaaaaaajaj jajajaj ajajaj jaj
            ajaajaja jaj"
          />

          <Details
            position="Web Developer"
            company="Fiverr"
            companyLink="https://fiverr.com"
            time="2023-present"
            address="msjs"
            work="nsjs jsjs jsjs jsj sws uwiqbsb uisqbs jsj sjjs sjjs jsj sjsjj ajaj jaaaaaaaaajaj jajajaj ajajaj jaj
            ajaajaja jaj"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
