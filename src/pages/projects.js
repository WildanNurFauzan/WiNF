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

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex justify-between items-center rounded-3xl rounded-br-2xl 
    border border-solid border-dark bg-light shadow-2xl p-[3rem] relative "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={Link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl  ">{type}</span>
        <Link
          href={Link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-[8px] font-medium text-dark  ">{summary}</p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank " className="w-10">
            <GithubForProject />
          </Link>
          <Link
            href={link}
            target="_blank  "
            className="ml-4 
          rounded-lg bg-dark text-light p-2 px-6 text-base font-semibold"
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
    border border-solid border-dark bg-light shadow-2xl p-6 relative "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
      <Link
        href={Link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl  ">{type}</span>
        <Link
          href={Link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between  ">
          <Link href={github} target="_blank" className="w-10">
            <GithubForProject />
          </Link>

          <Link
            href={link}
            target="_blank  "
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:underline"
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination" className="flex justify-center " />
          <PriAniText text="Trumps" className="flex justify-center " />

          <AnimatedText
            text="Knowledge!"
            className="flex justify-center mb-12  "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6">
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
                summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Calculate Win Rate in MLBB"
                img={sementaraG}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6">
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
