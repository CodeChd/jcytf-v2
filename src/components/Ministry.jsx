import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Ministry = () => {
  return (
    <section className='w-full py-20 min-h-[50vh]'>
        <div id='outer' className='max-w-1/2 mx-auto'>
            <div id='inner' className='flex flex-col items-center gap-12'>

                <div className='text-center'>
                <h2 className='text-2xl uppercase font-gilLight font-extrabold mb-2 text-amber-800'>Ministries</h2>
                <p className='text-3xl font-gilLight font-extrabold'>Our Team is committed to walking you through life's events.</p>
                </div>

            <div className='flex gap-20 font-gilLight font-semibold'>
                <p className='flex flex-col items-center mt-3'>
                    <Image src="/kids.svg" width={60} height={70}/>
                    
                    <span className='text-2xl inline-block mt-4'>KIDS MINISTRY</span>
                </p>
                <p className='flex flex-col items-center'>
                    <Image src="/youth.svg" width={60} height={70}/>
                    <span className='text-2xl inline-block mt-4'>YOUTH MINISTRY</span>
                    
                </p>
                <p className='flex flex-col items-center'>
                    <Image src="/junior.svg" width={99} height={70}/>
                    <span className='text-2xl inline-block mt-4'>JUNIOR MINISTRY</span>
                    
                </p>
                <p className='flex flex-col items-center mt-2'>
                    <Image src="/prayer.svg" width={90} height={70}/>
                    <span className='text-2xl inline-block mt-4'>PRAYER MINISTRY</span>
                    
                </p>
                <p className='flex flex-col items-center mt-2'>
                    <Image src="/worship.svg" width={90} height={70}/>
                    <span className='text-2xl inline-block mt-4'>WORSHIP MINISTRY</span>
                    
                </p>

            </div>
            <Link href="/" className=" mr-8  text-2xl font-gilLight font-extrabold ml-4 border-2 border-amber-800 border-solid p-3 rounded text-amber-800">
                        Join Us <FaArrowRight className="inline-block ml-2 "/>
                    </Link>

            </div>
        </div>
    </section>
  )
}

export default Ministry