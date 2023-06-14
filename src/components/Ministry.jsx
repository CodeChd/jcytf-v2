import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { Youth,Kids, Junior,Prayer, Worship } from './SVG'


const Ministry = ({id}) => {
  return (
    <section id={id} className='w-full p-14 min-h-[65vh]  bg-ministry  bg-no-repeat sml:bg-medimsc     llg:bg-constant  wide:bg-ul-wide ultra:bg-ul-wide brightness-110 grid place-items-center'>
        <div id='outer' className='mx-auto '>
            <div id='inner' className='flex flex-col items-center justify-center gap-12'>

                <div className='text-center text-white'>
                <h2 className='text-6xl capitalize font-gil font-extrabold mb-2 text-amber-600'>Ministries</h2>
                <p className='md:text-2xl text-3xl font-gilLight font-semibold mt-4'>Our Team is committed to walking you through life's events.</p>
                </div>

            <div className='flex xl:flex-wrap justify-center items-center gap-20 font-gilLight font-semibold text-white '>
                <p className='flex flex-col items-center  '>
                    <Kids className="md:h-18 xl:h-20 h-24  fill-white"/>
                    <span className='xl:text-xl text-2xl inline-block mt-4'>Kids Ministry</span>
                </p>
                <p className='flex flex-col items-center'>
                <Youth className="md:h-18 xl:h-20 h-24  fill-white"/>
                    <span className='xl:text-xl text-2xl inline-block mt-4'>Youth Ministry</span>
                    
                </p>
                <p className='flex flex-col items-center'>
                    <Junior className="md:h-18 xl:h-20 h-24  fill-white"/>
                    <span className='xl:text-xl text-2xl inline-block mt-4'>Junior Ministry</span>
                    
                </p>
                <p className='flex flex-col items-center mt-2'>
                    <Prayer className="md:h-18 xl:h-20 h-24  fill-white"/>
                    <span className='xl:text-xl text-2xl inline-block mt-4'>Prayer Ministry</span>
                    
                </p>
                <p className='flex flex-col items-center mt-2'>
                    <Worship className="md:h-18 xl:h-20 h-24  fill-white"/>
                    <span className='xl:text-xl text-2xl inline-block mt-4'>Worship Ministry</span>
                    
                </p>

            </div>
            <Link href="/ministry" className=" mr-8  md:text-lg text-2xl font-gilLight font-extrabold ml-4 border-2 border-white border-solid p-2 px-4  rounded text-white">
                        Join Us <FaArrowRight className="inline-block ml-2 "/>
                    </Link>

            </div>
        </div>
    </section>
  )
}

export default Ministry