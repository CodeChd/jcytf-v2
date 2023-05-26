import Image from "next/image";

const Connect = () => {
  return (
    <section className="w-full flex justify-center items-end mt-14 bg-gray-950 text-white min-h-[80vh]">
      <div className="flex flex-col gap-24">
        <h2 className="self-center font-extrabold text-7xl non-italic">
          Get Connected
        </h2>

        <div className="grid grid-cols-4 self-center w-[70%] mx-auto text-gray-900 overflow-hidden">
          <div className="inline-block  col-span-1">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685075224/kids-2408614_1920_fxs3md.jpg"
              width={300}
              height={300}
              className="w-full h-full inline-block"
            />
          </div>
          <div className="inline-block p-8 col-span-1 bg-white">
            <p className="text-lg uppercase">Kids</p>
            <p className="font-medium text-xl mt-2">
              A fun and safe first step for kids to grow in their faith.
            </p>
          </div>
          <div className="inline-block col-span-1">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685075876/pexels-nappy-935944_h6qveq.jpg"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
          <div className="inline-block p-8 col-span-1 bg-yellow-300">
            <p className="text-lg uppercase">Youths</p>
            <p className="font-medium text-xl mt-2">
              Impacting students in their relationship with Jesus.
            </p>
          </div>
          <div className="inline-block p-8 col-span-1 bg-green-300">
            <p className="text-lg uppercase">Group Life</p>
            <p className="font-medium text-xl mt-2">
              Adults connecting and growing together. Find your group here.
            </p>
          </div>
          <div className="inline-block  col-span-1 bg-white">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685076438/second-grid_kyeuhe.jpg"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
          <div className="inline-block p-8 col-span-1 bg-blue-300">
            <p className="text-lg uppercase">Join Us</p>
            <p className="font-medium text-xl mt-2">
              Serving others, locally and internationally.
            </p>
          </div>
          <div className="inline-block  col-span-1">
            <Image
              src="https://res.cloudinary.com/dgzvju87l/image/upload/v1685076354/pexels-fox-1595391_lafiwd.jpg"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
