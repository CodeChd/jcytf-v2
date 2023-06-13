import Image from "next/image";
import Link from "next/link";

const Mission = ({id}) => {
  return (
    <section id={id} className=" bg-[#d97706] text-white min-h-[52vh] ">
      <div className="p-14 px-20 max-w-7xl mx-auto sm:px-4 xxl:max-w-5xl wide:max-w-8xl">
     

        <div className="flex mdItem:flex-col mdItem:items-center gap-14 font-gilLight font-bold text-xl">

          <div className="flex flex-col gap-2 justify-end mdItem:order-2">

          <div className="mb-4">
          <h3 className="text-2xl text-[1.5rem] mb-1 leading-8 text-left font-gilLight font-bold uppercase text-white">
            Our Misson & Vision
          </h3>
          <p className="text-3xl mt-1 max-w-[45ch] text-left font-gil uppercase">
            Helping People Take Their Next Steps Toward Christ…Together.
          </p>
        </div>

            <p className="max-w-[50ch] text-[1.40rem]">
              To connect with God, connect with others, and connect others with
              God
            </p>

            <p className="max-w-[60ch] text-[1.40rem]">
              A transformed followers of jesus christ who extend God's love to
              the neighborhood and will effect transformation in the community
              and beyond.
            </p>

            <Link
              href="/ministry"
              className=" mt-2 rounded-full p-2 px-4 bg-slate-50 text-gray-800 self-start"
            >
              Join Us
            </Link>
          </div>

          <div className=" w-full  md:h-full  mdItem:w-full mdItem:h-[20rem] mdItem:order-1">
            <Image
              src="/images/place.jpg"
              loading="lazy"
              width={500}
              height={300}
              className="mdItem:w-full mdItem:h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
