import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import contactImg from "../../public/images/svg/contact-img.svg";
import Image from "next/image";

const connect = () => {
  return (
    <>
      <Head>
        <title>WiNF | Connect Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout flex>
          <AnimatedText text="Haha" className="flex justify-center mb-16" />

          <div className="flex w-full bg-dark h-auto ">
            <div className="w-[48rem] h-250  ">
              <Image src={contactImg} alt="Gambar" className="w-full" />
            </div>
            <div className="flex flex-col w-[24rem] h-auto">
              <div className="flex bg-slate-600 ml-8 w-full h-auto  ">
                <div className="px-[48px] pt-16 border ">Name</div>
                <div className="px-[48px] pt-16">sks</div>
              </div>
              <div className="flex bg-slate-600 ml-8 w-full h-auto ">
                <div className="px-[48px] pt-16">Name</div>
                <div className="px-[48px] pt-16">sks</div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default connect;
