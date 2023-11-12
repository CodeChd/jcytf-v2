import Image from "next/image";
import Link from "next/link";

const Connect = ({id}) => {
  return (
    <section id={id} className="w-full flex justify-center items-end  bg-[#d97706] text-white min-h-[80vh]">
      <div className="flex flex-col gap-24 sml:gap-8">
        <h2 className="self-center font-extrabold font-gil xxs:text-4xl xs:text-5xl sml:text-6xl text-7xl  not-italic sml:pt-14">
          Get Connected
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-1 xxl:grid-cols-2 w-[75%] mx-auto xxl:text-lg text-gray-900 border-b-0 border-x-white mt-4 border-solid border-2 rounded overflow-hidden">
          <div className=" col-span-1 sm:row-start-1">
            <Image
              src="/images/KIDS.webp"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full "
            />
          </div>
          <div className=" p-8 col-span-1 sm:row-start-2  bg-white">
            <p className="  md:text-xl xxl:text-2xl text-lg font-gilLight font-extrabold uppercase">Kids</p>
            <p className="font-medium md:text-lg xxl:text-xl  sml:text-[0.980rem] text-xl  mt-2 mb-4">
              A fun and safe first step for kids to grow in their faith.
            </p>

            <Link href="/connect/#kids" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>
          </div>
          <div className=" col-span-1 sm:row-start-3 xxl:order-2 xxl:row-start-2">
            <Image
              src="/images/BIBLE.webp"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className=" p-8 col-span-1 sm:row-start-4 xxl:order-1 xxl:row-start-2 bg-yellow-300">
            <p className="md:text-xl xxl:text-2xl text-lg font-gilLight font-extrabold uppercase">Youths</p>
            <p className="font-medium md:text-lg  xxl:text-xl  sml:text-[0.980rem] text-xl mt-2 mb-4">
              Impacting students in their relationship with Jesus.
            </p>
            <Link href="/connect/#youth" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>

          </div>
          <div className=" p-8 col-span-1 sm:row-start-6  xxl:order-2 xxl:row-start-3 bg-green-300">
            <p className="md:text-xl xxl:text-2xl text-lg font-gilLight font-extrabold uppercase">Group Life</p>
            <p className="font-medium md:text-lg  xxl:text-xl  sml:text-[0.980rem] text-xl mt-2 mb-4">
              Adults connecting and growing together. Find your group here.
            </p>
            <Link href="/connect/#programs" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>

          </div>
          <div className="col-span-1 sm:row-start-5 xxl:order-1 xxl:row-start-3 bg-white">
            <Image
              src="/images/GROUP.webp"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className=" p-8 col-span-1 sm:row-start-8  bg-blue-300">
            <p className="md:text-xl xxl:text-2xl text-lg font-gilLight font-extrabold uppercase">Join Us</p>
            <p className="font-medium md:text-lg  xxl:text-xl  sml:text-[0.980rem] text-xl mt-2 mb-4">
              Serving others, locally and internationally.
            </p>
            <Link href="/connect/#ministry" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>

          </div>
          <div className="col-span-1 sm:row-start-7">
            <Image
              src="/images/MEETING.webp"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
