import Image from "next/image";

const Identity = () => {
  return (
    <section className=" bg-slate-50  text-gray-950 min-h-[80vh] flex items-center ">
      <div className="max-w-7xl mx-auto sm:px-4  xxl:max-w-6xl wide:max-w-8xl xxl:py-8 p-20">
        <div className="flex xl:flex-col xl:items-center gap-14 items-center font-gilLight font-bold text-xl">
          <div className="xl:w-full  w-[85rem] h-[20rem]">
            <Image
              src="/images/who.jpg"
              loading="lazy"
              width={700}
              height={500}
              className="rounded-md w-full h-full"
            />
          </div>


          <div className="flex flex-col gap-2 justify-end">
            <div className="mb-4">
              <h3 className="xl:self-center text-2xl text-[1.5rem] mb-2 leading-8 text-left font-gilLight font-bold uppercase text-amber-700">
                Who We Are
              </h3>

            <p className="max-w-7xl mx-auto text-xl font-gilLight font-extrabold leading-10 tracking-wide">
              We prioritize simple and clear opportunities to help people take
              Jesus Christ Yesterday, Today and Forever is a church in La
              Trinidad Street, Payatas Quezon City. It is founded by Pastora
              Casimira "Baby" Cabacoy in 1990 and by the grace of God, the
              church continues to hold services on Sundays and other gatherings
              on weekdays. The church has mostly young people members who are
              actively participating in the Kingdom work of God in Payatas.
            </p>

            </div>

        
          </div>

        </div>
      </div>
    </section>
  );
};

export default Identity;
