import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white mt-14">
      <div id="container" className="pt-[40px] pb-[20px]">
        <div id="inner" className="flex justify-center gap-[12rem] uppercase">
          <div id="Contact" className="inline-block mr-14">
            <h3 className="mb-2 text-2xl font-extrabold non-italic normal-case">
              Contact
            </h3>
            <div className="w-[30ch] mb-2">
              <p> Madjaas Street Group 2, Area B, Quezon City, 1119 Manila</p>
            </div>
            <div className="">
              <p>Monday - Sunday at 9:00AM - 5:00PM | Saturday - Closed</p>
              <p>(+63) 997 574 4318</p>
              <p>heraldoednas@gmail.com</p>
            </div>

            <ul className="flex gap-4 mt-4 items-center">
              <li>
                <Link
                  href="/https://web.facebook.com/jcytfchurchpayatas"
                  className="text-xl"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="mailto:heraldoednas@gmail.com" className="text-xl">
                  <AiFillMail />
                </Link>
              </li>
            </ul>
          </div>

          <div id="About" className="inline-block">
            <h3 className="mb-2 text-2xl font-extrabold non-italic normal-case">
              About
            </h3>
            <ul className="flex flex-col">
              <li>
                <Link href="/" className="">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Devotionals?
                </Link>
              </li>
            </ul>
          </div>

          <div id="Connect" className="inline-block">
            <h3 className="mb-2 text-2xl font-extrabold non-italic normal-case">
              Connect
            </h3>
            <ul className="flex flex-col">
              <li>
                <Link href="/" className="">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Youth
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Group Life
                </Link>
              </li>
              <li>
                <Link href="/" className="">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="footer-line"
        className="flex justify-center items-center pt-4 pb-8"
      >
        <hr className="bg-amber-300 border-1 border-solid w-1/2 flex-grow-1" />
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={90}
            height={90}
            className="px-2"
          />
        </Link>
        <hr className="bg-amber-300 border-1 border-solid w-1/2 flex-grow-1" />
      </div>
    </footer>
  );
};

export default Footer;
