import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="py-14 bg-[#d97706] text-white min-h-[52vh] ">
      <div className="max-w-7xl mx-auto xxl:max-w-6xl wide:max-w-8xl">
     

        <div className="flex gap-18 font-gilLight font-bold text-xl">
          <div className="flex flex-col gap-2 justify-end">

          <div className="mb-4">
          <h3 className="text-2xl text-[1.5rem] mb-1 leading-8 text-left font-gilLight font-bold uppercase text-white">
            Our Misson
          </h3>
          <p className="text-3xl mt-1 max-w-[45ch] text-left font-gil uppercase">
            Helping People Take Their Next Steps Toward Christ…Together.
          </p>
        </div>

            <p className="max-w-[50ch]">
              To connect with God, connect with others, and connect others with
              God
            </p>

            <p className="max-w-[60ch]">
              A transformed followers of jesus christ who extend God's love to
              the neighborhood and will effect transformation in the community
              and beyond.
            </p>

            <Link
              href="/ministry"
              className=" mt-2 rounded p-2 bg-slate-50 text-gray-800 self-start"
            >
              Join Us
            </Link>
          </div>

          <div>
            <Image
              src="/images/place.jpg"
              loading="lazy"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
