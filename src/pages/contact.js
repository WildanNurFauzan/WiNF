import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import ArrowRight from "@/icons/HeroIcons";
import Head from "next/head";
import Link from "next/link";
import React from "react";
// import "boxicons";

const contact = () => {
  return (
    <>
      <Head>
        <title>WiNF | Connect Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="bg-light bg-cover bg-no-repeat">
          <AnimatedText
            text="Get in Touch"
            className="flex justify-center mb-16 text-primary dark:text-cerah z-1"
          />
          <div className="grid grid-cols-8 gap-[100px] -z-[25]  ">
            <section className="col-span-4  flex flex-col justify-center items-center    ">
              <h3 className="text-center  mb-[3rem] font-bold text-[28px]">
                Talk to Me
              </h3>

              <div
                className=" relative bg-light pb-8 border border-solid border-dark dark:border-light dark:bg-dark pt-8 rounded-xl w-[70%] flex flex-col justify-items-center  
                 "
              >
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[104%] rounded-3xl bg-dark dark:bg-light    " />
                <div className=" z-10  flex  justify-center w-full mb-2 ">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="text-lg text-center mb-2">Email</div>
                <Link
                  href="Vellvester@gmail.com"
                  target={"_blank"}
                  className="flex justify-center text-lg font-light mb-2"
                >
                  Vellvester@gmail.com
                </Link>
                <Link href="/" className="flex justify-center pb-4 ">
                  <span>Write me</span>&nbsp;
                  <ArrowRight
                    className={`hover:translate-x-4 hover:fill-slate-500`}
                  />
                </Link>
              </div>
            </section>

            <section className="col-span-4  flex flex-col justify-center items-center">
              <h3 className="text-center mb-[3rem] font-bold text-[28px]">
                Write me Your Project
              </h3>
              <div className="rounded-xl bg-dark/80 w-[70%] justify-items-center h-[20vh]">
                fff
              </div>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
