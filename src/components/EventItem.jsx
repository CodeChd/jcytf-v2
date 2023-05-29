import React from "react";

const EventItem = () => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-wolfgang-2747449_nfsfqq.jpg"
        width={425}
        height={400}
        className="rounded"
      />

      <h2 className="text-4xl flex flex-wrap font-gilLight font-extrabold mt-2">
        {events.Speaker}
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

export default EventItem;
