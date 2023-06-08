import { DateFormatter} from "@/hooks/DateFormatter";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventItem = ({ events }) => {
  const currentDate = DateFormatter(events)

  return (
    <div id="outer" className="w-[70%] mx-auto my-8">
      <div
        id="inner"
        className="flex w-full border-2 border-solid border-orange-100 bg-slate-50 rounded-md overflow-hidden"
      >
        <div className="flex-1 w-full">
          <Image
            src={`https://jcytfchurch.online/images/${events.featuredimage}`}
            alt={events.featuredimage}
            width={300}
            height={300}
            className="w-full h-full rounded"
          />
        </div>

        <div className="flex-[2] flex flex-col justify-center p-4">
          <Link href="/">
            <h3 className="text-4xl font-gilLight font-semibold">
              {events.EventName}
            </h3>
          </Link>
          <p className="mt-2 text-xl">{events.Description}</p>
        </div>

        <div className=" flex-1  flex flex-col gap-5 py-4 font-gilLight font-bold justify-center items-center border-l-2 border-orange-100 border-solid text-left ">
          <span className=" text-xl font-gil ">
            <AiOutlineCalendar className="inline-block" />&nbsp;{currentDate}
          </span>
          <span className="">
            <AiOutlineClockCircle className="inline-block" /> {events.Time}
          </span>
          <span className="">
            <FaMapMarkerAlt className="inline-block" /> {events.Venue}
          </span>
          <Link href={`/events/${events.id}`} className="self-center rounded-sm p-2 px-4 bg-amber-600 text-white">
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
