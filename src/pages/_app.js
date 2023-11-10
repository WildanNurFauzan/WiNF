import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/footer.css";
import "@/styles/contact.css";
import { Montserrat, Silkscreen } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  weight: ["400", "700"],
});
// Properties
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-montserrat bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar  />
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}
