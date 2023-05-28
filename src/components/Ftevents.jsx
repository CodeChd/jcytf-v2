import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";



const Ftevents = ({ id }) => {
  return (
    <section id={id} className="w-full my-14 py-14 ">
      <main className="flex flex-col items-center">
        <div className="uppercase ml-[4.5rem]">
          <h3 className="font-gilLight font-extrabold text-gray-700 text-lg">
            What's Happening
          </h3>
          <h2 className="text-7xl font-gil">Upcoming Events</h2>
          <p className="normal-case text-xl max-w-[60ch] font-extrabold font-gilLight mt-2 ">
            Church doesn’t just happen on Sundays. Find times and locations for
            events you don’t want to miss by clicking below.
          </p>
        </div>

        <div className="flex py-14 gap-10 items-center justify-center overflow-hidden">
          <div>
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-wolfgang-2747449_nfsfqq.jpg"
              width={425}
              height={400}
              className="rounded"
            />

            <h2 className="text-4xl flex flex-wrap font-gilLight font-extrabold mt-2">
              Kamusta Ka?
            </h2>

            <div className="flex gap-4 mt-2 items-center">
              <p className="text-lg font-gilLight flex items-center gap-2">
                <FaCalendarAlt className="inline-block " />
                <span className="inline-block">08-10-2023</span>
              </p>
              <p className="text-lg font-gilLight flex items-center gap-2">
                <FaClock className="inline-block " />
                <span className="inline-block">10:00 AM</span>
              </p>
            </div>

          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-josh-sorenson-976866_knj2dr.jpg"
              width={425}
              height={400}
              className="rounded"
            />

             <h2 className="text-4xl font-gilLight font-extrabold mt-2">
              Kamusta Ka?
            </h2>

            <div className="flex gap-4 mt-2 items-center">
              <p className="text-lg font-gilLight flex items-center gap-2">
                <FaCalendarAlt className="inline-block " />
                <span className="inline-block">08-10-2023</span>
              </p>
              <p className="text-lg font-gilLight flex items-center gap-2">
                <FaClock className="inline-block " />
                <span className="inline-block">10:00 AM</span>
              </p>
            </div>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685261903/pexels-teddy-yang-2263436_nxxwsy.jpg"
              width={425}
              height={400}
              className="rounded"
            />

             <h2 className="text-4xl font-gilLight font-extrabold mt-2">
              Kamusta Ka?
            </h2>

            <div className="flex gap-4 mt-2 items-center">
              <p className="text-lg font-gilLight flex items-center gap-2">
                <FaCalendarAlt className="inline-block " />
                <span className="inline-block">08-10-2023</span>
              </p>
              <p className="text-lg font-gilLight flex items-center gap-2">
                <FaClock className="inline-block " />
                <span className="inline-block">10:00 AM</span>
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/"
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
