import Image from "next/image";
import { Worship } from "./SVG";
import Link from "next/link";

const Give = ({id}) => {
  return (
    <main className="pb-14">
        <div className="bg-[#d97706] xs:px-4 md:px-8 p-14">
          <div className="max-w-5xl mx-auto text-center text-white">
            <p className="md:text-4xl text-5xl font-gil mb-4">Why We Give</p>
            <p className="md:text-xl text-[1.35rem] leading-9 font-gilLight font-bold">
              At our church we want to see people know Christ, grow together,
              and go serve the world. When you give it fuels the ministries of
              the church to help more and more people become disciples of Jesus
              Christ for the transformation of the world. When we give God a
              portion of the gifts he has given us, they can be multiplied and
              mean more together than they ever could alone.
            </p>
          </div>

        </div>
        <section id={id} className="flex flex-col max-w-5xl mx-auto mt-8 p-14">
          <h3 className="text-2xl self-center uppercase font-semibold mb-8 p-2 border-b-[3px] border-solid border-amber-900 text-amber-600">
            Ways to Give
          </h3>

          <div
            className="grid grid-cols-3
           place-items-center  gap-2 lg:max-w-5xl lg:gap-8 mdItem:grid-cols-1"
          >
            <div className="grid place-items-center bg-slate-100 rounded-md  h-[33rem] p-8  gap-4 leading-8 col-span-1">
              <Worship className=" w-44" />
              <p className="text-3xl font-medium text-center">Give On Sunday</p>
              <p className="text-xl font-gilLight text-center font-semibold">
                During service, feel free to place your offering in one of our
                offering baskets during Sunday service.
              </p>
            </div>

            <h2 className="text-4xl font-gil col-span-1">OR</h2>

            <div className="col-span-1 mdItem:h-full h-[33rem]">
              <Image
                src="/images/gcash.jpg"
                width={400}
                height={300}
                className="h-full rounded-md"
              />
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center gap-4 max-w-6xl mx-auto p-14">
          <hr className="h-[3px] bg-gray-500 w-[10rem]" />
          <h3 className="text-2xl text-center italic font-gilLight">
            Thank You! However you choose to donate to JCYTF, your generous
            and faithful giving is making a difference as together we love well
            and change lives through Christ!
          </h3>
        </div>
<div className="p-8">

        <div className="uppercase bg-slate-100 flex flex-col items-center rounded-md xs:px-2 p-4 max-w-5xl mx-auto">
                <h3 className="text-center md:text-2xl text-3xl font-gilLight font-bold">FIND OUT MORE ABOUT GIVING IN THE CHURCH</h3>
                <div className="flex justify-center items-center mt-8 menu:-translate-x-[2rem] gap-8">
                    <Link href="/#pastors" className="bg-amber-600 rounded-full text-white font-gil text-xl p-2 px-4 xs:text-sm ">EMAIL PASTOR</Link>
                    <Link href="/about/#new" className="bg-amber-600 rounded-full text-white font-gil xs:text-sm  text-xl p-2 px-4">EMAIL US</Link>
                </div>
            </div>
</div>




    </main>
  );
};

export default Give;
