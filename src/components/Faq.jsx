import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqItems = ({ q, desc }) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div id="faq-container" className="my-3 self-start select-none ">
      <article className="flex items-center gap-2 cursor-pointer border-solid border-1 border-gray-500">
        <button onClick={handleClick} className="bg-orange-600 p-1 rounded-full text-white transition-all">
          {isClick ? <FaMinus className="z-10" /> : <FaPlus className="z-10" />}
        </button>
        <a
          className="text-[1.3rem] font-extrabold font-gilLight"
          onClick={handleClick}
        >
          {q}
        </a>
      </article>
      <div className={`${isClick ? "block p-3" : "hidden"} `}>
        <p className="text-lg font-gilLight font-extrabold">{desc}</p>
      </div>
    </div>
  );
};

const Faq = ({ id }) => {
  return (
    <section id={id} className="py-[3.84rem] w-full min-h-[80vh]">
      <div className="bg-[#ED9121] text-white text-center py-10">
        <div className=" flex flex-col gap-2">
          <h2 className="text-7xl not-italic font-bold font-gil self-center border-b-4 py-2 mb-2 border-white">
            JCYTF CHURCH FAQ
          </h2>
          <p className="text-xl font-medium">
            Below are Frequently Asked Questions on Our Church
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center w-[58%] wide:w-[38%] mx-auto ">
        <h3 className="uppercase text-3xl font-gil border-solid border-b-4 border-orange-600">
          Questions
        </h3>

        <FaqItems
          q="How can I get to the church?"
          desc="To find directions to our church, you can check the address at the
            bottom of our page or visit our About page
            where you will find a map showing our location."
        />

        <FaqItems
          q="Do you have programs for children and youth?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />

        <FaqItems
          q="How can I get involved in the church community?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="How can I contact the church staff or pastor?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="How can I donate or contribute to the church?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="Are there any small groups or Bible study sessions?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="Is there a nursery or childcare available during services?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="Are there any special events or upcoming activities?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="How can I join the church membership?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="Can I request prayer or seek pastoral counseling?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
        <FaqItems
          q="Is there a dress code for church services?"
          desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
        />
      </div>
    </section>
  );
};

export default Faq;
