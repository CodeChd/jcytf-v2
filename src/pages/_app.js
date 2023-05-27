import Footer from "@/components/Footer";
import "../styles/globals.css"
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Head from "next/head";

const fontOs = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${fontOs.variable} font-poppins h-full w-full min-h-screen`}>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
