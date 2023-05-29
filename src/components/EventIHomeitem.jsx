import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";


const EventHomeItem = ({events, index, src}) => {
  return (
    <div>
      <Image
        src={src ? src : "/favicon.svg"}
        width={425}
        height={400}
        className="rounded"
      />

      <h2 className="text-4xl flex flex-wrap font-gilLight font-extrabold mt-2">
        {events[index].EventName}
      </h2>

      <div className="flex gap-4 mt-2 items-center">
        <p className="text-lg font-gilLight flex items-center gap-2">
          <FaCalendarAlt className="inline-block " />
          <span className="inline-block">{events[index].Date}</span>
        </p>
        <p className="text-lg font-gilLight flex items-center gap-2">
          <FaClock className="inline-block " />
          <span className="inline-block">{events[index].Time}</span>
        </p>
      </div>
    </div>
  );
};

export default EventHomeItem;
