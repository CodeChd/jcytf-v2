import SmoothScroll from "@/hooks/smoothScroll";
import Image from "next/image";

const Kids = () => {
  return (
    <section className="py-14 bg-[#d97706] text-white ">
      <div className="max-w-7xl sml:max-w-6xl mx-auto min-h-[50vh] flex  items-center">
        <div className="flex gap-18 font-gilLight  font-bold text-xl">
          <div className="flex flex-col justify-end gap-2 py-2">
            <div className="mb-2">
              <h3 className="text-2xl text-[1.5rem] leading-8 tracking-wide text-left font-gilLight font-bold uppercase text-white">
                Kids
              </h3>
              <p className="text-4xl mt-1 max-w-[45ch] text-left font-gil uppercase">
                Leading kids to love God. Follow Jesus. Serve others.
              </p>
            </div>

            <p className="max-w-[50ch]">
              First Kids is excited to partner with you to help the children in
              your life on their journey to know, love and serve Jesus Christ.
              Our small group format encourages children to build relationships
              with peers and leaders while learning about God in creative and
              engaging ways.
            </p>

            <SmoothScroll
              id="ministry"
              title="Learn More"
              className="uppercase font-gilLight mt-5 text-lg transition-transform hover:scale-110 self-start rounded-full p-2 px-4 bg-slate-50 text-gray-800 ring-2 ring-white"
              offset={-90}
            />
          </div>

          <div>
            <Image
              src="/images/place.jpg"
              loading="lazy"
              width={600}
              height={500}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kids;
