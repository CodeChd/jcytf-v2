import Image from "next/image";
import Link from "next/link";

const About = ({ id }) => {
  return (
    <section id={id} className="w-full   min-h-[70vh]  sml:min-h-[80vh]   llg:min-h-[60vh] wide:bg-ul-wide wide:bg-widePos wide:min-h-[45vh] grid place-content-center ">
      <div className="md:px-8 lg:pt-8  sml:px-20 llg:p-14 px-24 flex flex-col gap-4">
        <h2 className="flex self-center xxs:text-xl xs:text-2xl sm:text-4xl lg:text-5xl sml:text-6xl text-7xl  not-italic font-extrabold uppercase border-solid border-b-[6px] pb-2 border-gray-900">
          About Jcytf church
        </h2>

        <div className="w-full mt-12 flex xl:flex-col xl:items-center gap-12 justify-center">
          <article className="inline-block flex-1 xl:max-w-xl max-w-2xl xl:order-2">
            {/* <h3 className="uppercase font-gilLight text-lg font-extrabold text-gray-700">WELCOME</h3> */}
            <p className="md:text-xl xl:text-2xl text-[1.655rem] font-bold font-gilLight not-italic my-4">
              We are a family of men and women who have encountered God and
              committed our lives to the lord, focused on making an impact
              through the work of the holy spirit in transforming lives,
              families, communities and nations, for the glory of God.
            </p>

            <Link
              href="/about"
              className="px-8 p-3 bg-amber-600 rounded text-white font-extrabold
        inline-block text-lg uppercase font-gilLight"
            >
              Read more
            </Link>
          </article>

          <div className="xl:order-1 ">
            <Image
              src="/images/about.jpg"
              width={500}
              height={500}
              className="xl:w-[35rem]  rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
