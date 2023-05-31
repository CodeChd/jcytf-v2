
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="py-14 flex justify-center bg-amber-800 text-white min-h-[50vh] ">
      <div className="flex flex-col items-center">
        <div>
          <h3 className="text-2xl text-[1.5rem] leading-8 text-center font-gilLight font-bold uppercase text-white">
            Our Misson
          </h3>
          <p className="text-3xl mt-1 max-w-[45ch] text-center font-gil uppercase">
            Helping People Take Their Next Steps Toward Christ…Together.
          </p>
        </div>

        <div className="flex gap-4 mt-8 font-gilLight font-bold text-xl">
          <div className="flex flex-col gap-2 justify-center p-4">
            <p className="max-w-[50ch]">
              To connect with God, connect with others, and connect others with
              God
            </p>

            <p className="max-w-[60ch]">
              A transformed followers of jesus christ who extend God's love to
              the neighborhood and will effect transformation in the community
              and beyond.
            </p>

             <Link href="/" className=" mt-2 rounded p-2 bg-amber-600 text-white self-start">Get Connected</Link>

          </div>

          <div>
            <Image src="/images/place.jpg" width={400} height={300} className="rounded"/>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Mission;
