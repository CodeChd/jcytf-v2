import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}  relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-amber-400
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} text-white font-gil text-3xl relative group`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-amber-400
      absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-full flex justify-between p-2 px-32 md:px-8 xxl:px-14 bg-white text-gray-950">
      <Link href="/" className="LOGO flex items-center ">
        <img src="/images/logo.png" width={80} alt="logo" />
        <h2 className=" uppercase text-lg px-2  font-medium w-[5rem] ml-1 border-solid border-gray-800 border-l-2">
          JCYTF CHURCH
        </h2>
      </Link>

      <nav className="flex gap-8 text-lg font-medium items-center uppercase xl:hidden">
        <CustomLink href="/about" title="About" className="" />
        <CustomLink href="/connect" title="Connect" className="" />
        <CustomLink href="/events" title="Events" className="" />
        <CustomLink href="/devotional" title="Devotional" className="" />
        <CustomLink href="/partners" title="Partners" className="" />
        <CustomLink href="/give" title="Give" className="" />
      </nav>

      <button
        className=" flex-col justify-center items-center hidden xl:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-gray-950 block h-1 w-8 transition-all duration-0.5 ease-out rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-gray-950 block h-1 w-8 transition-all duration-0.5 ease-out rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-gray-950 block h-1 w-8 transition-all duration-0.5 ease-out rounded-sm -translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {isOpen ? (
        //mobile
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="menu:hidden min-w-[80vw] flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center z-50 bg-dark/80 rounded/lg backdrop-blur-xl py-14 rounded-lg "
        >
          <nav className="flex items-center flex-col justify-center gap-3">
            <MobileCustomLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/connect"
              title="Connect"
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/events"
              title="Events"
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/devotional"
              title="Devotional"
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/partners"
              title="Partners"
              toggle={handleClick}
            />
            <MobileCustomLink href="/give" title="Give" toggle={handleClick} />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Header;
