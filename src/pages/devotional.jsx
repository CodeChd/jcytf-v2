import Devotionals from "@/components/Devotionals";

const HeroDevotion = ({ title, desc, className }) => {
  return (
    <>
      <header
        className={` ${className} flex justify-center items-center w-full min-h-[85vh]`}
        >
      <div className="z-20 text-white ">
        <div className="sm:px-8 md:px-14 p-32 text-center">
          <h1 className="md:text-5xl xxl:text-6xl text-8xl font-gil">{title}</h1>
          <p className="text-xl pt-2 max-w-2xl">{desc}</p>
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
        desc="Find daily inspiration with our devotional, perfect for starting your day or winding down before bedtime"
        className="bg-devotion bg-aboutPos bg-no-repeat bg-mediumsc sml:bg-mediumsc   sml:bg-devotion llg:bg-widesc wide:bg-ul-wide ultra:bg-ul-wide"
      />

      <Devotionals />
    </main>
  );
};

export default devotional;
