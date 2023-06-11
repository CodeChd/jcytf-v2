import { useState } from "react";
import { FaPlus, FaMinus, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import VisitMail from "./MailVisit";
import { useCollapse } from "react-collapsed";

const FaqItems = ({ q, desc }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  return (
    <div id="faq-container" className="my-3 self-start select-none  ">
      <button
        {...getToggleProps({
          style: { display: "block" },
          onClick: () => setExpanded((x) => !x),
          
        })}
        className="bg-orange-600 p-1 rounded-full text-white transition-all mr-2"
      >
        {isExpanded ? (
          <FaMinus className="z-10" />
        ) : (
          <FaPlus className="z-10" />
        )}
      </button>

      <a className="text-[1.3rem] font-extrabold font-gilLight">{q}</a>


      <div {...getCollapseProps()} className="rounded-md my-4">
        <p  className="py-3 text-lg font-gilLight font-extrabold transition-all">
          {desc}
        </p>
      </div>

    </div>
  );
};
const Visit = ({ id }) => {
  return (
    <section id={id} className="bg-slate-50 pt-12">
      <div className="w-full h-full grid place-content-center min-h-[60vh]">
        <div className="flex flex-col items-center ">
          <h3 className="text-xl font-gilLight font-bold text-amber-800">
            NEW HERE?
          </h3>
          <h2 className="text-5xl uppercase font-gil font-bold mb-4 ">
            Coming to visit?
          </h2>
          <p className="max-w-7xl text-center mx-auto font-gilLight font-extrabold text-[1.40rem] leading-10">
            We know visiting a church for the first time can be intimidating,
            and we want to make your visit at Jesus Christ Yesterday Today And
            Forever Church a great one! When you come in. Further inquiries about the church? you
            can just click the message icon at the right bottom corner of your
            screen to message us or fill out the form below and one of our staff will get in contact with you as soon as we can.
          </p>
        </div>

        <div className="max-w-5xl mx-auto my-8 flex gap-[10rem]">
          <div>


          <FaqItems
            q="WHAT SHOULD I WEAR?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
            className="justify-center "
          />
          <FaqItems
            q="WHAT IS A TYPICAL SERVICE LIKE?"
            desc="To find directions to our church, you can check the address at the
            bottom of our page or visit our About page
            where you will find a map showing our location."
            className="justify-center"
            />
          <FaqItems
            q="WHERE DO I GO WHEN I ARRIVE?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
            className="justify-center"
          />
          <FaqItems
            q=" DO I NEED TO BE A MEMBER?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
              className="justify-center "
              />
          <FaqItems
            q="HOW CAN I GIVE?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
              className="justify-center "
              />
              </div>
            <div className="sticky top-0 z-30 ml-8">

              <VisitMail/>
            </div>
        </div>
      </div>
      <section className="w-full bg-sched bg-mediumPos bg-no-repeat bg-cover lgDesktop:bg-widesc wide:bg-ultrasc min-h-[50vh] py-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center ">
          <h2 className="text-3xl uppercase font-gilLight font-extrabold text-white border-b-2 border-solid border-white">
            Schedule of Services
          </h2>

          <div className="grid grid-cols-2 justify-center gap-8">
            <div className=" col-span-2 uppercase font-gilLight font-extrabold text-xl text-white">
              <div className="flex flex-col items-center gap-2 mt-4">
                <h3 className="mb-2 text-2xl">Sunday Service</h3>
                <p>KID'S MINISTRY | 8:00AM - 9:00AM</p>
                <p>SUNDAY SCHOOL | 9:30AM - 10:00AM</p>
                <p>DIVINE SERVICE | 10:30AM - 12:30NN</p>
                <p>YOUTH SERVICE | 3:00PM - 5:00PM</p>
                <p className="text-2xl mt-2 flex flex-col items-center">
                  WEDNESDAY PRAYER MEETING
                  <span className="text-xl mt-2">7:00PM - 9:00PM</span>
                </p>
              </div>
            </div>

            <p className=" text-2xl flex flex-col items-center text-white gap-2">
              <FaMapMarkerAlt />
              <span className="">Join Us</span>
              <span className="max-w-[30ch] text-center font-gilLight font-extrabold text-xl ">
                MADJAAS STREET GROUP 2, AREA B, QUEZON CITY, 1119 MANILA
              </span>
            </p>
            <p className="text-2xl flex flex-col items-center text-white gap-2">
              <FaPhoneAlt />
              <span className="">Contact Us</span>
              <span className=" uppercase max-w-[30ch] text-center font-gilLight font-extrabold text-xl ">
                (+63) 997 574 4318 jcytfchurch92@gmail.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Visit;
