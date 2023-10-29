import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/footer.css";
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

export default function App({ Component, pageProps }) {
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
        <Component {...pageProps} />

        <Footer />
      </main>
    </>
  );
}
