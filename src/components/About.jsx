import Image from "next/image";
import Link from "next/link";

const About = ({ id }) => {
  return (
    <section id={id} className="w-full px-20 py-14 sml:py-8 min-h-[70vh] wide:min-h-[45vh]">
      <div className="px-24 flex flex-col gap-4">
        <h2 className="flex self-center text-7xl sml:text-6xl not-italic font-extrabold uppercase border-solid border-b-[6px] pb-2 border-gray-900">
          About Jcytf church
        </h2>

        <div className="w-full mt-12 flex gap-12 justify-center">
          <article className="inline-block flex-1 max-w-2xl">
            {/* <h3 className="uppercase font-gilLight text-lg font-extrabold text-gray-700">WELCOME</h3> */}
            <p className="text-[1.655rem] font-bold font-gilLight not-italic my-4">
              We are a family of men and women who have encountered God and
              committed our lives to the lord, focused on making an impact
              through the work of the holy spirit in transforming lives,
              families, communities and nations, for the glory of God.
            </p>

            <Link
              href="/about"
              className="px-8 p-3 bg-amber-600 rounded text-white font-extrabold
          mt-4 text-lg uppercase font-gilLight"
            >
              Read more
            </Link>
          </article>

          <div className="inline-block ">
            <Image
              src="/images/about.jpg"
              width={450}
              height={450}
              className="w-full inline-block object-fit rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
