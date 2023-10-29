import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import contactImg from "../../public/images/svg/contact-img.svg";
import Image from "next/image";
import pixbg from "../../public/images/pixbg.jpg";
// import AmogusParticles from "@/components/AmogusParticles";
// import ConfettiParticles from "@/components/ConfettiParticles";

const PixBG = () => {
  return (
    <>
      <Image alt="bg" className="w-[100%] relative" src={pixbg} />
    </>
  );
};

const connect = () => {
  return (
    <>
      <Head>
        <title>WiNF | Connect Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout className={`relative  ${pixbg}`}>
          {/* <div className="-z-999">
          <AmogusParticles />
          </div> */}

          <AnimatedText
            text="Get in Touch"
            className="flex justify-center mb-16 text-primary dark:text-cerah z-1"
          />
          <div className="flex relative  shadow-2xl rounded-br-2xl  rounded-3xl justify-center ">
            <div className="absolute -top-[1.8px]  -left-[2px] -z-10 w-[102%] h-[105%] rounded-[3rem] bg-dark  dark:bg-cerah"  />

            <div className="flex w-full  bg-[#B63E96] h-[50] pb-32 rounded-[3rem] pt-12 pl-16 relative">
              <div className="w-[36rem] h-250   ">
                <Image src={contactImg} alt="Gambar" className="w-full mt-4" />
              </div>

              <div className="flex flex-col w-[24rem] h-auto mt-4  ">
                <div className="flex  ml-8 w-[140%] h-auto justify-evenly  ">
                  <div className=" w-1/2 text-start py-4 pl-[5%] border-2 rounded-2xl mr-4 text-light  ">
                    First Name
                  </div>

                  <div className="w-[50%] text-start py-4 pl-[5%] border-2 rounded-2xl text-light ">
                    Last Name
                  </div>
                </div>
                <div className="flex mt-4  ml-8 w-[140%] h-auto justify-evenly">
                  <div className="w-1/2 text-start py-4 pl-[5%] rounded-2xl border-2 mr-4 text-light">
                    Email
                  </div>
                  <div className="w-1/2 text-start pl-[5%] py-4 border-2 rounded-2xl text-light">
                    Phone
                  </div>
                </div>
                <div className="mt-4 mb-11 text-start ml-8 w-[140%] h-[80%] py-4 bg-slate-600 border-2 rounded-2xl pl-[5%]">
                  Type Your Messages
                </div>

                <button className=" absolute bottom-24 right-[30.5rem] w-[6rem] p-3 bg-primary border-2  rounded-2xl cursor-pointer flex  items-center justify-center dark:bg-cerah 
                hover:bg-white hover:scale-[120%] hover:duration-150 font-semibold dark:hover:bg-yellow-950 dark:hover:text-light">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default connect;
