import { FaArrowRight } from "react-icons/fa"

const HeroComponent = ({title, desc, btnName}) => {
  return (
    <>
    <header className='flex items-end w-full bg-about brightness-[.45] bg-aboutPos bg-no-repeat bg-100% min-h-[85vh] relative'>
    </header>
        <div className="absolute z-20 text-white top-1/2 translate-y-[50px] ">
            <div className="p-32 ">

            <h1 className="text-6xl font-gil shadow-lg">{title}</h1>
            <p className="text-xl shadow-lg pt-2">{desc}</p>
            <button className="text-lg mt-4 p-2 font-gilLioght font-bold rounded bg-amber-700">{btnName}<FaArrowRight className=" ml-2 inline-block"/></button>
            </div>
        </div>
    </>
  )
}

export default HeroComponent