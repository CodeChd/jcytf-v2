import SmoothScroll from "@/hooks/smoothScroll";
import { FaArrowRight } from "react-icons/fa";

const HeroComponent = ({ title, desc, btnName, href = "/", className}) => {


  return (
    <>
      <header className={` ${className} flex items-end w-full brightness-[.65] min-h-[85vh] relative`}></header>
      <div className="absolute z-20 text-white top-1/2 translate-y-[50px] ">
        <div className="p-32 sml:px-[8.5rem]">
          <h1 className="text-6xl font-gil shadow-lg">{title}</h1>
          <p className="text-xl shadow-lg pt-2">{desc}</p>
          <SmoothScroll id={href} title={btnName} offset="" icon={ <FaArrowRight className=" ml-2 inline-block" />} className="text-lg inline-block mt-4 p-2 font-gilLioght font-bold rounded bg-amber-700" />
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
