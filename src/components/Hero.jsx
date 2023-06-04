import { FaHome } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import SmoothScroll from "@/hooks/smoothScroll";

const Hero = ({ id }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <section id={id}>
        <div className="w-full relative ">
          <div  className="z-10 flex flex-col items-start absolute text-white left-[8rem]  text-left py-7">
          <p className="uppercase font-gilLight font-extrabold text-lg ml-2 mb-6 sml:mb-4 drop-shadow-xl  border-white border-l-2 p-2 rounded border-solid">Welcome Home</p>
          <h1 className="capitalize text-[5.6rem] leading-[1] font-gil max-w-[10ch] drop-shadow-xl xl:text-5xl sml:text-[4.5rem]">Jesus Christ Yesterday Today and Forever Church</h1>
          </div>
          <video
            className="w-full brightness-[.80] object-cover h-[37.55rem] sml:h-[29.5rem] "
            loop
            muted
            alt="All the devices"
            src="https://ik.imagekit.io/nntawec2b/VIDEO-BG.mp4?updatedAt=1685008506009"
            ref={videoEl}
          />
        </div>
        <div className="w-full flex gap-1 text-2xl font-bold uppercase">
          <Link
            href="/partners"
            className="flex-1 text-center p-6 bg-[#d97706] text-white hover:text-black hover:bg-white"
          >
            {/* bg-gradient-to-r from-indigo-500  */}
            <span>Partner With Us</span>
          </Link>
          <Link
            href="/connect/#programs"
            className="flex-1 text-center p-6 bg-[#d97706] text-white hover:text-black hover:bg-white"
          >
            <span>Programs</span>
          </Link>
          <Link
            href="/connect/#ministry"
            className="flex-1 text-center p-6 bg-[#d97706] text-white hover:text-black hover:bg-white"
          >
            <span>Join Us</span>
          </Link>
        </div>
      </section>
      <nav
        className={`${classNames(
          scrollPosition > 760 && "bg-white text-gray-950 transition-all"
        )} 
      w-full p-4 px-20 uppercase font-gil flex justify-between text-xl font-bold sticky top-0 z-30`}
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
