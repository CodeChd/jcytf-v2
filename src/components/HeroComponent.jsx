import SmoothScroll from "@/hooks/smoothScroll";
import { FaArrowRight } from "react-icons/fa";

const HeroComponent = ({ title, desc, btnName, href = "/", className}) => {


  return (
    <header className="relative ">
      <div className={` ${className} flex w-full brightness-[.65] min-h-[85vh]  `}/>
        
      <div className="text-white absolute md:top-[53vh] top-[60vh] xxl:-left-10 sml:px-0 px-32  left-0 mb-4  ">
        <div className="sml:px-[8.5rem]">
          <h1 className="xxl:text-5xl text-6xl font-gil">{title}</h1>
          <p className="text-xl pt-2">{desc}</p>
          <SmoothScroll id={href} title={btnName} offset="" icon={ <FaArrowRight className=" ml-2 inline-block" />} className="text-lg inline-block mt-4 p-2 font-gilLioght font-bold rounded bg-amber-700" />
        </div>
      </div>
    </header>
  );
};

export default HeroComponent;
