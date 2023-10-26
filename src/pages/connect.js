import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import contactImg from "../../public/images/svg/contact-img.svg";
import Image from "next/image";
import AmogusParticles from "@/components/AmogusParticles";
import ConfettiParticles from "@/components/ConfettiParticles";

const connect = () => {
  return (
    <>
      <Head>
        <title>WiNF | Connect Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout className="relative ">
          {/* <div className="-z-999">
          <AmogusParticles />
          </div> */}
          
          <AnimatedText
            text="Get in Touch"
            className="flex justify-center mb-16 text-primary"
          />
          <div className="flex relative border border-solid border-dark shadow-2xl rounded-br-2xl  rounded-3xl justify-center ">
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"/>

            <div className="flex w-full bg-[#B63E96] h-auto pb-10 rounded-[1.2rem] pt-12">
              <div className="w-[36rem] h-250   ">
                <Image src={contactImg} alt="Gambar" className="w-full mt-4" />
              </div>

              <div className="flex flex-col w-[24rem] h-auto mt-4 ">
                <div className="flex  ml-8 w-[160%] h-auto justify-evenly  ">
                  <div className="w-1/2 text-start py-4 pl-[5%] border rounded-2xl mr-4 text-light  ">
                    First Name
                  </div>

                  <div className="w-[50%] text-start py-4 pl-[5%] border rounded-2xl text-light ">
                    Last Name
                  </div>
                </div>
                <div className="flex mt-4  ml-8 w-[160%] h-auto justify-evenly">
                  <div className="w-1/2 text-start py-4 pl-[5%] rounded-2xl border mr-4 text-light">
                    Email
                  </div>
                  <div className="w-1/2 text-start pl-[5%] py-4 border rounded-2xl text-light">
                    Phone 
                  </div>
                </div>
                <div className="mt-4 text-start ml-8 w-[160%] h-[80%] py-4 bg-slate-600 border rounded-2xl pl-[5%]">
                  Type Your Messages
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default connect;
