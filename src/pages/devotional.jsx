import Devotionals from "@/components/Devotionals";

const HeroDevotion = ({ title, desc, className }) => {
  return (
    <>
      <header
        className={` ${className} flex justify-center items-center w-full min-h-[85vh]`}
        >
      <div className="z-20 text-white ">
        <div className="sm:px-8 md:px-14 p-32 text-center">
          <h1 className="md:text-5xl xxl:text-6xl text-8xl font-gil shadow-lg">{title}</h1>
          <p className="text-xl shadow-lg pt-2 max-w-2xl">{desc}</p>
        </div>
      </div>
        </header>
    </>
  );
};

const devotional = () => {
  return (
    <main>
      <HeroDevotion
        title="Devotionals"
        desc="Our devotionals, to provide a moment of reflection and inspiration, whether you're looking to start your day with a positive mindset or wind down before bedtime."
        className="bg-devotion bg-aboutPos bg-no-repeat bg-mediumsc wide:bg-ultrasc"
      />

      <Devotionals />
    </main>
  );
};

export default devotional;
