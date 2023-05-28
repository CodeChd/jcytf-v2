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
        <div className="w-full">
          <video
            className="w-full object-cover h-[35rem] "
            loop
            muted
            alt="All the devices"
            src="https://ik.imagekit.io/nntawec2b/VIDEO-BG.mp4?updatedAt=1685008506009"
            ref={videoEl}
          />
        </div>
        <div className="w-full flex gap-1 text-2xl font-bold uppercase">
          <Link
            href="#"
            className="flex-1 text-center p-6 bg-black text-white hover:text-black hover:bg-white"
          >
            <span>Partner With Us</span>
          </Link>
          <Link
            href="#"
            className="flex-1 text-center p-6 bg-black text-white hover:text-black hover:bg-white"
          >
            <span>Programs</span>
          </Link>
          <Link
            href="#"
            className="flex-1 text-center p-6 bg-black text-white hover:text-black hover:bg-white"
          >
            <span>Join Us</span>
          </Link>
        </div>
      </section>
      <nav
        className={`${classNames(
          scrollPosition > 760 && "bg-gray-950 text-white transition-all"
        )} 
      w-full p-4 px-20 uppercase font-gil flex justify-between text-xl font-bold sticky top-0 z-30`}
      >
        <SmoothScroll
          id="home"
          title={<FaHome className="text-3xl" />}
          offset={-105}
        />
        <SmoothScroll id="about" title="About" offset={-90} />
        <SmoothScroll id="connect" title="Connect" offset="" />
        <SmoothScroll id="#" title="Upcoming Events" offset="" />
        <SmoothScroll id="pastors" title="Pastors" offset="" />
        <SmoothScroll id="faq" title="FAQ" offset="" />
      </nav>
    </>
  );
};

export default Hero;
