import Devotionals from "@/components/Devotionals";

const HeroDevotion = ({ title, desc, className }) => {
  return (
    <>
      <header
        className={` ${className} flex justify-center items-center w-full min-h-[85vh]`}
        >
      <div className="z-20 text-white ">
        <div className="p-32 text-center">
          <h1 className="text-8xl font-gil shadow-lg">{title}</h1>
          <p className="text-xl shadow-lg pt-2">{desc}</p>
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
        desc="Devotional Verses to Uplift Your Soul"
        className="bg-devotion bg-aboutPos bg-no-repeat bg-mediumsc wide:bg-ultrasc"
      />

      <Devotionals />
    </main>
  );
};

export default devotional;
