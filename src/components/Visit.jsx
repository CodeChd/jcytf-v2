import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqItems = ({ q, desc }) => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div id="faq-container" className="mt-3 select-none">
      <article className="flex items-center gap-2 cursor-pointer border-solid border-1 border-gray-500">
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

      <div className={`${isClick ? "block p-3" : "hidden"} `}>
        <p className="text-lg font-gilLight text-left font-extrabold">{desc}</p>
      </div>
    </div>
  );
};

const Visit = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-slate-100 min-h-[60vh] grid place-content-center py-8"
    >
      <div className="w-full h-full flex flex-col ">

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-gilLight font-bold">NEW HERE?</h3>
          <h2 className="text-5xl uppercase font-gil font-bold mb-4">
            Coming to visit?
          </h2>
          <p className="w-1/2 mx-auto font-gilLight font-bold text-xl">
            We know visiting a church for the first time can be intimidating,
            and we want to make your visit at First United Methodist a great
            one! When you come in. Further inquiries? you can just click the
            message icon at the right bottom corner of your screen to message
            us.
          </p>
        </div>

        <div className="w-1/2 mx-auto mt-4">
          <FaqItems
            q="WHAT SHOULD I WEAR?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
          />
          <FaqItems
            q="WHAT IS A TYPICAL SERVICE LIKE?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
          />
          <FaqItems
            q="WHERE DO I GO WHEN I ARRIVE?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
          />
          <FaqItems
            q=" DO I NEED TO BE A MEMBER?"
            desc="To find directions to our church, you can check the address at the
              bottom of our page or visit our About page
              where you will find a map showing our location."
          />
        </div>

        <section>
            <div>
                
            </div>

        </section>
      </div>
    </section>
  );
};

export default Visit;
