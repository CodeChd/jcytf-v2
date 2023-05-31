import { useState } from "react";
import { FaPlus, FaMinus, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const FaqItems = ({ q, desc, className = "" }) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div id="faq-container" className="mt-3 select-none relative">
      <article
        className={`${className} flex items-center gap-2 cursor-pointer border-solid border-1 border-gray-500`}
      >
        <button
          onClick={handleClick}
          className="bg-orange-600 p-1 rounded-full text-white transition-all"
        >
          {isClick ? <FaMinus className="z-10" /> : <FaPlus className="z-10" />}
        </button>
        <a
          className="text-[1.3rem] text-right  font-extrabold font-gilLight"
          onClick={handleClick}
        >
          {q}
        </a>
      </article>

      <div className={`${isClick ? "block py-3 mx-auto" : "hidden"} `}>
        <p className="text-lg font-gilLight text-left font-extrabold">{desc}</p>
      </div>
    </div>
  );
};

const Visit = ({ id }) => {
  return (
    <section id={id} className="bg-slate-50 pt-8">
      <div className="w-full h-full grid place-content-center min-h-[60vh]">
        <div className="flex flex-col items-center ">
          <h3 className="text-xl font-gilLight font-bold">NEW HERE?</h3>
          <h2 className="text-5xl uppercase font-gil font-bold mb-4">
            Coming to visit?
          </h2>
          <p className="max-w-4xl mx-auto font-gilLight font-bold text-xl">
            We know visiting a church for the first time can be intimidating,
            and we want to make your visit at First United Methodist a great
            one! When you come in. Further inquiries? you can just click the
            message icon at the right bottom corner of your screen to message
            us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-4">
          <FaqItems
            q="WHAT SHOULD I WEAR?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
            className="justify-center mr-[4.8rem]"
          />
          <FaqItems
            q="WHAT IS A TYPICAL SERVICE LIKE?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
            className="justify-center ml-4"
          />
          <FaqItems
            q="WHERE DO I GO WHEN I ARRIVE?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
            className="justify-center ml-2"
          />
          <FaqItems
            q=" DO I NEED TO BE A MEMBER?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
            className="justify-center mr-7 "
          />
        </div>
      </div>
      <section className="w-full bg-sched bg-Pos bg-no-repeat bg-cover bg-100% min-h-[45vh] mt-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center ">
          <h2 className="mt-8 text-3xl uppercase font-gilLight font-extrabold text-white border-b-2 border-solid border-white">
            Schedule of Services
          </h2>

          <div className="flex items-center gap-12 mt-8">
            <div className=" uppercase font-gilLight font-extrabold text-xl text-white">
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="mb-2">Sunday Service</h3>
                <p>KID'S MINISTRY | 8:00AM - 9:00AM</p>
                <p>SUNDAY SCHOOL | 9:30AM - 10:00AM</p>
                <p>DIVINE SERVICE | 10:30AM - 12:30NN</p>
                <p>YOUTH SERVICE | 3:00PM - 5:00PM</p>
              </div>
              <p>WEDNESDAY PRAYER MEETING &nbsp; 7:00PM - 9:00PM</p>
            </div>

            <p className=" text-3xl flex flex-col items-center text-white gap-2">
              <FaMapMarkerAlt />
              <span className="">Join Us</span>
              <span className="max-w-[30ch] text-center font-gilLight font-extrabold text-xl ">
                MADJAAS STREET GROUP 2, AREA B, QUEZON CITY, 1119 MANILA
              </span>
            </p>
            <p className="text-3xl flex flex-col items-center text-white gap-2">
              <FaPhoneAlt />
              <span className="">Contact Us</span>
              <span className="max-w-[30ch] text-center font-gilLight font-extrabold text-xl ">
                (+63) 997 574 4318 HERALDOEDNAS@GMAIL.COM
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Visit;
