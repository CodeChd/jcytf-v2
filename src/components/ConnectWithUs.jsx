import Image from "next/image";
import Link from "next/link";

const Connect = ({id}) => {
  return (
    <section id={id} className="w-full flex justify-center items-end  bg-[#d97706] text-white min-h-[80vh]">
      <div className="flex flex-col gap-24 sml:gap-8">
        <h2 className="self-center font-extrabold font-gil text-7xl sml:text-6xl not-italic">
          Get Connected
        </h2>

        <div className="grid grid-cols-4 w-[75%] mx-auto text-gray-900 border-b-0 border-x-white mt-4 border-solid border-2 rounded overflow-hidden">
          <div className="inline-block col-span-1">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685075224/kids-2408614_1920_fxs3md.jpg"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full inline-block"
            />
          </div>
          <div className="inline-block p-8 col-span-1 bg-white">
            <p className="text-lg font-gilLight font-extrabold uppercase">Kids</p>
            <p className="font-medium text-xl sml:text-[0.980rem] mt-2 mb-4">
              A fun and safe first step for kids to grow in their faith.
            </p>

            <Link href="/" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>
          </div>
          <div className="inline-block col-span-1">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685075876/pexels-nappy-935944_h6qveq.jpg"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="inline-block p-8 col-span-1 bg-yellow-300">
            <p className="text-lg font-gilLight font-extrabold uppercase">Youths</p>
            <p className="font-medium text-xl sml:text-[0.980rem] mt-2 mb-4">
              Impacting students in their relationship with Jesus.
            </p>
            <Link href="/" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>

          </div>
          <div className="inline-block p-8 col-span-1 bg-green-300">
            <p className="text-lg font-gilLight font-extrabold uppercase">Group Life</p>
            <p className="font-medium text-xl sml:text-[0.980rem] mt-2 mb-4">
              Adults connecting and growing together. Find your group here.
            </p>
            <Link href="/" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>

          </div>
          <div className="inline-block  col-span-1 bg-white">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685076438/second-grid_kyeuhe.jpg"
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="inline-block p-8 col-span-1 bg-blue-300">
            <p className="text-lg font-gilLight font-extrabold uppercase">Join Us</p>
            <p className="font-medium text-xl sml:text-[0.980rem] mt-2 mb-4">
              Serving others, locally and internationally.
            </p>
            <Link href="/" className="border-b-[1px] border-solid border-gray-700 pb-1">LEARN MORE</Link>

          </div>
          <div className="inline-block  col-span-1">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685076354/pexels-fox-1595391_lafiwd.jpg"
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
