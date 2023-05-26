import { FaHome } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}  relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Hero = () => {
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
      <section>
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
      w-full p-4 px-20 uppercase flex justify-between text-xl font-bold sticky top-0`}
      >
        <CustomLink href="#" title={<FaHome className="text-4xl" />} />
        <CustomLink href="#" title="About" />
        <CustomLink href="#" title="Connect" />
        <CustomLink href="#" title="Upcoming Events" />
        <CustomLink href="#" title="Pastors" />
        <CustomLink href="#" title="FAQ" />
      </nav>
    </>
  );
};

export default Hero;
