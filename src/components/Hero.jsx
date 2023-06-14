import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import SmoothScroll from "@/hooks/smoothScroll";

const Hero = ({ id }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();



  return (
    <>
      <section id={id}>
        <div className="w-full relative ">
          <article className="bg-home lg:min-h-[65vh] md:bg-smallsc md:bg-smallPos lg:bg-mediumsc lg:bg-smallPos sml:bg-widesc llg:bg-widesc  wide:bg-ul-wide ultra:bg-ul-wide bg-no-repeat bg-fixed">
            
          <div  className="z-10 flex flex-col md:px-10 xxl:px-20 px-32  text-white  text-left py-7">

          <p className="uppercase font-gilLight font-extrabold text-lg ml-2 mb-6 sml:mb-4 llg:mb-12 drop-shadow-xl  border-white border-l-2 p-2 rounded border-solid">Welcome Home</p>
          <h1 className="capitalize text-[5.6rem] leading-[1] font-gil max-w-[10ch] drop-shadow-xl  md:text-6xl lg:text-7xl sml:text-[4.5rem]">Jesus Christ Yesterday Today and Forever Church</h1>

          </div>
           
          </article>
        </div>
        <div className="w-full flex md:flex-col gap-1 md:text-lg text-2xl font-bold uppercase">
          <Link
            href="/partners"
            className="flex-1 text-center p-6 sml:p-4 lgDesktop:p-7 bg-[#d97706] text-white hover:text-black hover:bg-white"
          >
            {/* bg-gradient-to-r from-indigo-500  */}
            <span>Partner With Us</span>
          </Link>
          <Link
            href="/connect/#programs"
            className="flex-1 text-center p-6 sml:p-4 lgDesktop:p-7 bg-[#d97706] text-white hover:text-black hover:bg-white"
          >
            <span>Programs</span>
          </Link>
          <Link
            href="/connect/#ministry"
            className="flex-1 text-center p-6 sml:p-4 lgDesktop:p-7 bg-[#d97706] text-white hover:text-black hover:bg-white"
          >
            <span>Join Us</span>
          </Link>
        </div>
      </section>
      <nav
        className={`${classNames(
          scrollPosition > 760 && "bg-white text-gray-950 transition-all"
        )} 
      w-full p-4 px-20 uppercase font-gil  flex xxs:flex-col sm:text-[12px] sm:px-2 sm:flex-wrap md:px-4 md:items-center md:gap-2 justify-between  md:text-sm text-xl font-bold sticky top-0 z-30`}
      >
        <SmoothScroll
          id="home"
          title={<FaHome className="text-3xl" />}
          offset={-105}
        />
        <SmoothScroll id="about" title="About" offset={-90} />
        <SmoothScroll id="connect" title="Connect" offset={-85} />
        <SmoothScroll id="ftevents" title="Upcoming Events" offset={-115} />
        <SmoothScroll id="pastors" title="Pastors" offset={20} />
        <SmoothScroll id="faq" title="FAQ" offset="" />
      </nav>
    </>
  );
};

export default Hero;
