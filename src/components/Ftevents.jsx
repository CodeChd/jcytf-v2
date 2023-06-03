import Link from "next/link";
import EventHomeItem from "./EventIHomeitem";

const Ftevents = ({ id, data }) => {
  const events = data;

  console.log(events);

  return (
    <section id={id} className="w-full my-14 py-14 ">
      <main className="flex flex-col items-center">
        <div className="uppercase ml-[4.5rem]">
          <h3 className="font-gilLight font-extrabold text-gray-700 text-lg">
            What's Happening
          </h3>
          <h2 className="text-7xl sml:text-6xl font-gil">Upcoming Events</h2>
          <p className="normal-case text-xl max-w-[60ch] font-extrabold font-gilLight mt-2 ">
            Church doesn’t just happen on Sundays. Find times and locations for
            events you don’t want to miss by clicking below.
          </p>
        </div>

        <div className="flex py-14 gap-10 items-center justify-center overflow-hidden">
          <EventHomeItem
            events={events}
            index={0}
            src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-wolfgang-2747449_nfsfqq.jpg"
          />
          <EventHomeItem
            events={events}
            index={1}
            src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-josh-sorenson-976866_knj2dr.jpg"
          />
          <EventHomeItem
            events={events}
            index={2}
            src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-teddy-yang-2263436_nxxwsy.jpg"
          />

        </div>
        <Link
          href="/events"
          className="px-8 p-2 bg-amber-600 rounded text-white font-extrabold
          mt-4 text-lg uppercase font-gilLight"
        >
          All Events
        </Link>
      </main>
    </section>
  );
};

export default Ftevents;
