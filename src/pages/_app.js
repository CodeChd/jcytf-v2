import Footer from "@/components/Footer";
import "../styles/globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import localFont from "@next/font/local"
import Head from "next/head";

const gil = localFont({
  src: './fonts/Gilroy-ExtraBold.otf',
  variable: '--font-gil-bold',
})

const gilLight = localFont({
  src: './fonts/Gilroy-Light.otf',
  variable: '--font-gil-light',
})

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

      <main
        className={`${fontOs.variable} ${gil.variable} ${gilLight.variable} font-poppins h-full w-full min-h-screen`}
      >
        <Header />
        <script
          src="//code.tidio.co/c4xjzwfmgevog8zseo86d7sbpwijbjfj.js"
          async
        ></script>
        <Component {...pageProps}/>
        <Footer />
      </main>
    </>
  );
}
