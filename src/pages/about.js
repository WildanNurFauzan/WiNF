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
      <TransitionEffect/>
      <main className="flex flex-col w-full items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <ConfettiParticles className={"-z-10"} />

          <AnimatedText
            text="Passion is Choiced!"
            className="flex justify-center pb-16 lg:!text-5xl md:!text-4xl xs:!text-[1.7rem] xs:!leading-[24px]  "
          />
          <section className="grid grid-cols-6 w-full gap-16  md:flex-row md:grid-cols-3    ">
            <div className=" col-span-3 flex flex-col items-start justify-start md:order-2 md:col-span-6 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium my-[16px]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I&apos;m Shin, a web developer
                and UI/UX designer with a passion for creating beautiful,
                functional, and user-centered digital experiences. With
                experience in the field. I am always looking for new and
                innovative ways to bring my clients&apos; visions to life.
              </p>
              <p className="font-medium lg:!flex lg:!-mr-[27rem] md:!mr-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I believe that design is about
                more than just making things look pretty - it&apos;s about
                solving problems and creating intuitive, enjoyable experiences
                for users.
              </p>

              <p className="font-medium my-4 lg:!flex lg:!-mr-[27rem] md:!mr-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether I&apos;m working on a
                website, mobile app, or other digital product, I bring my
                commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to
                bring my skills and passion to your next project.
              </p>
            </div>
            <div
              className="col-span-4 relative h-max rounded-2xl border-[3px] 
            border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light lg:!w-[140%] lg:!-ml-[3rem] 
            md:!col-span-5 md:-mr-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[104%] rounded-3xl bg-dark dark:bg-light md:order-1 md:col-span-8  "  />
              <Image
                src={sementaraG}
                alt="Shin"
                className="w-[100%] rounded-2xl h-auto"
                priority
                sizes="(max-width: 768px)100vw,
              (max-width : 1200px)50vw, 33vw"
              />
            </div>

            <section className=" col-span-8 flex  justify-evenly  items-end w-full xl:flex-row md:order-3 md:col-span-6 md:items-center ">
              <div className="flex flex-col  items-end md:justify-start md:items-start   justify-center ">
                <span className="inline-block text-7xl md:text-5xl font-bold ">
                  {" "}
                  <AnimatedNumbers value={10} />+
                </span>

                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col  items-end md:items-start justify-center">
                <span className="inline-block text-7xl md:text-5xl font-bold ">
                  <AnimatedNumbers value={20} />-
                </span>
                <h2 className="text-xl font-medium text-dark/75 dark:text-light/75">
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
