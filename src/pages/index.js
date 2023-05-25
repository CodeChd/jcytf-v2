import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {FaHome} from 'react-icons/fa'

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


export default function Home() {
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
    <main>
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
          <Link href="#" className="flex-1 text-center p-6 bg-black text-white hover:text-black hover:bg-white">
            <span>Partner With Us</span>
          </Link>
          <Link href="#" className="flex-1 text-center p-6 bg-black text-white hover:text-black hover:bg-white">
            <span>Programs</span>
          </Link>
          <Link href="#" className="flex-1 text-center p-6 bg-black text-white hover:text-black hover:bg-white">
            <span>Join Us</span>
          </Link>
        </div>
      </section>
      <div className="w-full p-4 px-20">
        <nav className="uppercase flex justify-between text-xl font-bold sticky">
            <CustomLink href="#" title={<FaHome className="text-4xl"/>} />
            <CustomLink href="#" title="About"/>
            <CustomLink href="#" title="Upcoming Events"/>
            <CustomLink href="#" title="Pastors"/>
            <CustomLink href="#" title="Join Us"/>
            <CustomLink href="#" title="FAQ"/>
        </nav>
      </div>
      <section>
        <div id="about" className="p-20 flex justify-center">

            <h2 className="text-7xl font-extrabold uppercase border-solid border-b-[6px] pb-2 border-gray-900">
              About Jcytf church
            </h2>


        </div>
      </section>
    </main>
  );
}
