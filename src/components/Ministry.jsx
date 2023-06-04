import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { Youth,Kids, Junior,Prayer, Worship } from './SVG'


const Ministry = ({id}) => {
  return (
    <section id={id} className='w-full py-20 min-h-[60vh] bg-ministry bg-Pos bg-100% bg-no-repeat brightness-110'>
        <div id='outer' className='max-w-1/2 mx-auto'>
            <div id='inner' className='flex flex-col items-center gap-12'>

                <div className='text-center text-white'>
                <h2 className='text-6xl uppercase font-gil font-extrabold mb-2 text-amber-700'>Ministries</h2>
                <p className='text-4xl font-gilLight font-semibold mt-4'>Our Team is committed to walking you through life's events.</p>
                </div>

            <div className='flex gap-20 font-gilLight font-semibold text-white'>
                <p className='flex flex-col items-center  '>
                    <Kids className="h-24 fill-white"/>
                    <span className='text-2xl inline-block mt-4'>KIDS MINISTRY</span>
                </p>
                <p className='flex flex-col items-center'>
                <Youth className="h-24 fill-white"/>
                    <span className='text-2xl inline-block mt-4'>YOUTH MINISTRY</span>
                    
                </p>
                <p className='flex flex-col items-center'>
                    <Junior className="h-24 fill-white"/>
                    <span className='text-2xl inline-block mt-4'>JUNIOR MINISTRY</span>
                    
                </p>
                <p className='flex flex-col items-center mt-2'>
                    <Prayer className="h-24 fill-white"/>
                    <span className='text-2xl inline-block mt-4'>PRAYER MINISTRY</span>
                    
                </p>
                <p className='flex flex-col items-center mt-2'>
                    <Worship className="h-24 fill-white"/>
                    <span className='text-2xl inline-block mt-4'>WORSHIP MINISTRY</span>
                    
                </p>

            </div>
            <Link href="/ministry" className=" mr-8  text-2xl font-gilLight font-extrabold ml-4 border-2 border-white border-solid p-2 px-4  rounded text-white">
                        Join Us <FaArrowRight className="inline-block ml-2 "/>
                    </Link>

            </div>
        </div>
    </section>
  )
}

export default Ministry