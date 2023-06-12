import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-700 text-white ">
      <div id="container" className="pt-[40px] p-8 pb-[20px]">
        <div id="inner" className="flex lg:flex-col lg:gap-4 justify-center gap-[12rem] uppercase">
          <div id="Contact" className="inline-block mr-14">
            <h3 className="font-gil mb-2 text-2xl font-extrabold not-italic normal-case">
              Contact
            </h3>
            <div className="w-[30ch] mb-2 not-italic font-medium">
              <p> Group 2, Area B La Trinidad Street, Quezon City, 1119 Metro Manila</p>
            </div>
            <div className="non-italic font-medium">
              <p>Monday - Sunday at 9:00AM - 5:00PM | Saturday - Closed</p>
              <p>(+63) 997 574 4318</p>
              <p>jcytfchurch92@gmail.com</p>
            </div>
          </div>

          <div id="About" className="inline-block">
            <h3 className="font-gil mb-2 text-2xl font-extrabold not-italic normal-case">
              About
            </h3>
            <ul className="flex flex-col not-italic font-medium">
              <li>
                <Link href="/about/#mission" className="">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/partners" className="">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/devotional" className="">
                  Devotionals
                </Link>
              </li>
              <li>
                <Link href="/about/#new" className="">
                  New Here?
                </Link>
              </li>
            </ul>
          </div>

          <div id="Connect" className="inline-block">
            <h3 className="font-gil mb-2 text-2xl font-extrabold not-italic normal-case">
              Connect
            </h3>
            <ul className="flex flex-col not-italic font-medium">
              <li>
                <Link href="/connect/#kids" className="">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/connect/#youth" className="">
                  Youth
                </Link>
              </li>
              <li>
                <Link href="/connect/#programs" className="">
                  Group Life
                </Link>
              </li>
              <li>
                <Link href="/connect/#ministry" className="">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="footer-line"
        className="flex justify-center items-center pt-4 pb-8 relative"
      >
        <hr className=" w-1/2 flex-grow-1" />
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={90}
            height={90}
            className="px-2"
          />
        </Link>
        <hr className=" w-1/2 flex-grow-1" />
        <div className="relative">
          <ul className="flex gap-4 mt-4 items-center -left-24 absolute">
            <li>
              <Link
                href="https://web.facebook.com/jcytfchurchpayatas"
                target="_blank"
                className="text-xl"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="mailto:jcytfchurch92@gmail.com" className="text-xl">
                <AiFillMail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
