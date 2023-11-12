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
    <div
      id="faq-container"
      className="my-3  transition-all xxl:max-w-5xl mx-auto relative"
    >
      <button
        {...getToggleProps({
          style: { display: "block" },
          onClick: () => setExpanded((x) => !x),
        })}
        className="bg-orange-600 p-1 rounded-full text-white transition-all  absolute -left-[2rem]"
      >
        {isExpanded ? (
          <FaMinus className="z-10 " />
        ) : (
          <FaPlus className="z-10 " />
        )}
      </button>

      <a
        {...getToggleProps({
          onClick: () => setExpanded((x) => !x),
        })}
        className="text-[1.3rem] font-extrabold font-gilLight  whitespace-nowrap inline-block"
      >
        {q}
      </a>

      <div {...getCollapseProps()} className="rounded-md my-4 ">
        <p className="py-3 text-lg font-gilLight font-extrabold transition-all max-w-[30ch]">
          {desc}
        </p>
      </div>
    </div>
  );
};
const Visit = ({ id }) => {
  return (
    <section id={id} className="bg-slate-50 ">
      <div className="w-full h-full grid place-content-center min-h-[60vh] sm:px-4 p-14">
        <div className="flex flex-col items-center ">
          <h3 className="text-xl font-gilLight font-bold text-amber-800">
            NEW HERE?
          </h3>
          <h2 className="md:text-4xl text-5xl uppercase font-gil font-bold mb-4 ">
            Coming to visit?
          </h2>
          <p className="max-w-7xl text-center mx-auto font-gilLight font-extrabold md:max-w-3xl md:text-lg xxl:text-xl text-[1.40rem] leading-10 ">
            We know visiting a church for the first time can be intimidating,
            and we want to make your visit at Jesus Christ Yesterday Today And
            Forever Church a great one! When you come in. Further inquiries
            about the church? you can just click the message icon at the right
            bottom corner of your screen to message us or fill out the form
            below and one of our staff will get in contact with you as soon as
            we can.
          </p>
        </div>

        <div className=" mx-auto my-8 flex xxl:flex-col xxl:items-start xxl:gap-14  gap-[5rem]">
          <div className="order-2 xxl:max-w-4xl">
            <FaqItems
              q="WHAT SHOULD I WEAR?"
              desc="There is no dress code for our church services. We welcome everyone to come as they are, whether that means wearing casual or formal attire. The most important thing is that you feel comfortable and welcome in our community"
              className="justify-center "
            />
            <FaqItems
              q="WHAT IS A TYPICAL SERVICE LIKE?"
              desc="Our church services typically include music, prayer, and a sermon. We offer a variety of worship styles, from traditional to contemporary, to suit the preferences of our community. We welcome everyone to join us in celebrating and exploring our faith, and we hope to see you at one of our services soon."
              className="justify-center"
            />
            <FaqItems
              q="WHERE DO I GO WHEN I ARRIVE?"
              desc="When you arrive at our church, please look for our greeters or ushers who will welcome you and direct you to our guest area. If you have any questions or need assistance, please feel free to ask our greeters or ushers. We are here to help you feel comfortable and welcome in our community."
              className="justify-center"
            />
            <FaqItems
              q=" DO I NEED TO BE A MEMBER?"
              desc="No, you do not need to be a member to attend our church services or events. We welcome everyone, regardless of their background or beliefs."
              className="justify-center "
            />
          </div>
          <div className=" ml-8 xxl:ml-0 menu:sticky menu:top-0 menu:z-30 order-1">
            <VisitMail />
          </div>
        </div>
      </div>
      <section className="w-full xs:px-4 p-14 bg-sched bg-mediumPos bg-no-repeat bg-cover llg:bg-widesc wide:bg-ul-wide min-h-[50vh] py-8 grid place-content-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center ">
          <h2 className="xs:text-2xl text-3xl uppercase font-gilLight font-extrabold text-white border-b-2 border-solid border-white">
            Schedule of Services
          </h2>

          <div className="grid grid-cols-1 place-content-center justify-center items-center gap-8">
            <div className=" col-span-2 uppercase font-gilLight font-extrabold xs:text-lg  text-xl text-white">
              <div className="flex flex-col items-center gap-2 mt-4">
                <h3 className="mb-2 xs:text-xl text-2xl">Sunday Service</h3>
                <p>KID'S MINISTRY | 8:00AM - 9:00AM</p>
                <p>SUNDAY SCHOOL | 9:30AM - 10:00AM</p>
                <p>DIVINE SERVICE | 10:30AM - 12:30NN</p>
                <p>YOUTH SERVICE | 3:00PM - 5:00PM</p>
                <p className="xs:text-xl  text-2xl mt-2 flex flex-col items-center">
                  WEDNESDAY PRAYER MEETING
                  <span className="xs:text-lg  text-xl mt-2">
                    7:00PM - 9:00PM
                  </span>
                </p>
              </div>
            </div>

            <div className="col-span-2 flex xxl:flex-col gap-8">
              <p className=" text-2xl flex flex-col items-center text-white gap-2">
                <FaMapMarkerAlt />
                <span className="">Join Us</span>
                <span className="max-w-[30ch] text-center font-gilLight font-extrabold xs:text-lg  text-xl ">
                  MADJAAS STREET GROUP 2, AREA B, QUEZON CITY, 1119 MANILA
                </span>
              </p>
              <p className="text-2xl flex flex-col items-center text-white gap-2">
                <FaPhoneAlt />
                <span className="">Contact Us</span>
                <span className=" uppercase max-w-[30ch] text-center font-gilLight font-extrabold xs:text-lg  text-xl ">
                  (+63) 997 574 4318 jcytfchurch92@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Visit;
