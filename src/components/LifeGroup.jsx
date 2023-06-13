import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";



const LifeGroup = ({id}) => {
  return (
    <section id={id} className="w-full min-h-[80vh] grid place-items-center">
                <div id="inner" className="flex flex-col items-center sm:px-4 p-14">

                <div id="heading_holder" className="max-w-5xl mx-auto">
                    <h2 className="text-center md:text-6xl text-8xl font-gil">
                        <p>LIFE</p>
                        <p>GROUP</p>
                    </h2>
                    <p className="md:text-xl text-2xl my-8 lg:text-center font-gilLight font-semibold">Our Groups are designed to help you experience real community and grow in your faith. We have a variety of groups with different focuses but all aimed at the same purpose:</p>
                </div>

                <div id="Groups" className="flex xl:flex-wrap gap-8 justify-center items-center md:text-2xl text-3xl font-gilLight font-extrabold">
                        <div>
                            <span className="border-dashed border-b-2 border-amber-500 py-2">CellGroup</span>
                        </div>
                        <div>
                            <span className="border-dashed border-b-2 border-amber-500 py-2">Mentoring</span>
                        </div>
                        <div>
                            <span className="border-dashed border-b-2 border-amber-500 py-2">SmallGroup</span>
                        </div>
                        <div>
                            <span className="border-dashed border-b-2 border-amber-500 py-2">Livelihood</span>
                        </div>
                    <Link href="/groups" className="md:text-lg ml-4 border-2 border-amber-800 border-solid p-3 rounded text-amber-800">
                        Join Group <FaArrowRight className="inline-block "/>
                    </Link>
                </div>



                </div>
    </section>
  )
}

export default LifeGroup