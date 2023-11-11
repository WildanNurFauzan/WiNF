import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import GithubIcon from "@/icons/GithubIcon";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sementaraG from "../../public/images/hajdg.jpg";
import PriAniText from "@/components/PriAniText";
import GithubForProject from "@/icons/GithubForProject";
import StarryParticle from "@/components/StarryParticle";
import TransitionEffect from "@/components/TransitionEffect";
import ParticlesContainer from "@/components/ParticlesContainer";
// import UseThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex  justify-between items-center rounded-3xl rounded-br-2xl 
    border border-solid border-dark bg-light shadow-2xl p-[30px] relative dark:bg-dark dark:border-light 
     ia:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ia:mb-10 "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={Link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg ia:w-full "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto "
          priority
          sizes="(max-width: 768px)100vw,
              (max-width : 1200px)50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ia:w-full ia:pl-0 ia:pt-6 ">
        <span className="text-primary font-medium text-xl xs:text-base  ">
          {type}
        </span>
        <Link
          href={Link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 lg:mb-0 w-full text-left text-4xl lg:text-2xl  font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-[8px] lg:mt-2px font-medium text-dark dark:text-light  ">
          {summary}
        </p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank " className="w-10">
            <GithubForProject />
          </Link>
          <Link
            href={link}
            target="_blank  "
            className="ml-4 
          rounded-lg bg-dark text-light dark:text-dark dark:bg-light p-2 px-6 text-base font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col justify-between items-center rounded-2xl 
    border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light ia:mb-10 ia:p-4 
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light
      ia:-right-2 ia:w-[101%] ia:h-[102%] xs:rounded-[24px]"
      />
      <Link
        href={Link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl xs:text-sm   ">{type}</span>
        <Link
          href={Link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light xs:text-base">
            {title}
          </h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between  ">
          <Link href={github} target="_blank" className={`w-10`}>
            <GithubForProject />
          </Link>

          <Link
            href={link}
            target="_blank  "
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold hover:underline"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Project Pages </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className={`pt-16 `}>
          <ParticlesContainer className={`-z-50 `} />
          <AnimatedText
            text="Imagination"
            className="flex justify-center lg:!text-6xl  sm:!text6xl xs:!text-4xl "
          />
          <PriAniText
            text="Trumps"
            className="flex justify-center lg:!text-6xl  sm:!text6xl xs:!text-4xl "
          />

          <AnimatedText
            text="Knowledge!"
            className="flex justify-center mb-12 lg:!text-6xl sm:mb-8 sm:!text6xl xs:!text-4xl  "
          />

          <div className="grid grid-cols-12  xl:gap-10 ia:gap-[1rem] gap-24 gap-y-32">
            <div className="col-span-12 ">
              <FeaturedProject
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
             
              <Project
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                link="/"
                github="/"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                link="/"
                github="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
