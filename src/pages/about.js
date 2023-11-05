import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import sementaraG from "../../public/images/hajdg.jpg";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import ConfettiParticles from "@/components/ConfettiParticles";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AmogusParticles from "@/components/AmogusParticles";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>WiNF | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col w-full  justify-center dark:text-light">
        <Layout className="pt-16">
          <ConfettiParticles className={"-z-10"} />

          <AnimatedText
            text="Passion is Choiced!"
            className="flex justify-center pb-16 lg:!text-5xl md:!text-4xl xs:!text-[1.7rem] xs:!leading-[24px]  "
          />
          <section className="grid grid-cols-8 w-full gap-[2rem] ia:gap-8  md:flex-row ia:grid-cols-8     ">
            <div className="  col-span-4 ia:col-span-8  flex flex-col items-start justify-start ia:order-2   ia:text-[24px] xl:mb-10 md:!text-[12px]   ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium   ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I&apos;m Shin, a web developer
                and UI/UX designer with a passion for creating beautiful,
                functional, and user-centered digital experiences. With
                experience in the field. I am always looking for new and
                innovative ways to bring my clients&apos; visions to life.
              </p>

              <p className="font-medium my-[16px] ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I believe that design is about
                more than just making things look pretty - it&apos;s about
                solving problems and creating intuitive, enjoyable experiences
                for users.
              </p>

              <p className="font-medium  ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether I&apos;m working on a
                website, mobile app, or other digital product, I bring my
                commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to
                bring my skills and passion to your next project.
              </p>
            </div>
            <div
              className="col-span-4 w-full  relative h-max rounded-2xl border-[3px] 
            border-solid border-dark bg-light p-8  dark:bg-dark dark:border-light  
             md:!-ml-0  md:!p-4 ia:col-span-8 ia:order-1  "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[104%] rounded-3xl bg-dark dark:bg-light  md:col-span-8   " />
              <Image
                src={sementaraG}
                alt="Shin"
                className="w-[100%] rounded-2xl h-auto "
                priority
                sizes="(max-width: 768px)100vw,
              (max-width : 1200px)50vw, 33vw"
              />
            </div>

            <section className=" col-span-8 ia:col-span-8  flex  justify-evenly  items-end w-full xl:flex-row ia:order-3  ia:items-center ">
              <div className="flex flex-col  items-end   justify-center ia:items-center ">
                <span className="inline-block text-7xl  font-bold  md:text-5xl  xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={10} />+
                </span>

                <h2
                  className="text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                 xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col  items-end  justify-center xl:items-center ">
                <span className="inline-block text-7xl  font-bold  md:text-5xl l xs:text-4xl ">
                  <AnimatedNumbers value={20} />-
                </span>
                <h2
                  className="text-xl font-medium text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base
                 xs:text-sm"
                >
                  Project Completed
                </h2>
              </div>
            </section>
          </section>
          <Skill />
          <Experience className={`md:w-[60%]`} />
          <Education className={`md:w-[60%] `} />
        </Layout>
      </main>
    </>
  );
};

export default about;
