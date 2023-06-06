import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCalendar,AiOutlineClockCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EventItem = ({events}) => {
  return (
    <div id="outer" className="w-[70%] mx-auto my-8">
      <div id="inner" className="flex w-full border-2 border-solid border-slate-400 bg-slate-50 rounded
       ">
        <div className="flex-1 w-full">
          <Image src={`https://jcytfchurch.online/images/${events.featuredimage}`} alt={events.featuredimage} width={300} height={300} className='w-full h-full rounded'/>
          {/* <Image src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-josh-sorenson-976866_knj2dr.jpg" width={300} height={300} className='w-full h-full rounded'/> */}
        </div>

        <div className="flex-[2] flex flex-col justify-center p-4">
          <Link href="/">
            <h3 className='text-4xl font-gilLight font-semibold'>{events.EventName}</h3>
          </Link>
          <p className='mt-2 text-xl'>{events.Description}</p>
        </div>

        <div className=" flex-1  flex flex-col gap-4 justify-center border-l-2 border-slate-400 border-solid text-left p-4">
            <span className=' text-lg'><AiOutlineCalendar className='inline-block' /> {events.Date}</span>
            <span className=''><AiOutlineClockCircle className='inline-block'/> {events.Time}</span>
            <span className=''><FaMapMarkerAlt className='inline-block'/> {events.Venue}</span>
            <button className='self-center rounded p-2 bg-amber-600 text-white'>View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
