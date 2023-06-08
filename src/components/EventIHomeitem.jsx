import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";


const EventHomeItem = ({events}) => {


  return (
    <div>
      <div className="w-full">

      <Image
        src={events.length === 0 ? "/favicon.svg" : `https://jcytfchurch.online/images/${events.featuredimage}`}
        width={440}
        height={400}
        className="rounded"
        />
        </div>

      <h2 className="text-4xl flex flex-wrap font-gilLight font-extrabold mt-2">
        {events.EventName}
      </h2>

      <div className="flex gap-4 mt-2 items-center">
        <p className="text-lg font-gilLight flex items-center gap-2">
          <FaCalendarAlt className="inline-block " />
          <span className="inline-block">{events.Date}</span>
        </p>
        <p className="text-lg font-gilLight flex items-center gap-2">
          <FaClock className="inline-block " />
          <span className="inline-block">{events.Time}</span>
        </p>
      </div>
    </div>
  );
};

export default EventHomeItem;
