import Link from "next/link";
import EventHomeItem from "./EventIHomeitem";

const Ftevents = ({ id, data }) => {

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
          {data.length === 0 ? (
            <h1 className="text-4xl font-gilLight font-bold italic">No events to show&nbsp;!</h1>
          ) : (
            data.db.slice(0,3).map((evt)=> (
              <EventHomeItem key={evt.id} data={data} events={evt}/>
            ))
            
          )}
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
