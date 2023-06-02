import Image from "next/image";

const Devotionals = () => {
  return (
    <section className="w-full py-14 min-h-[80vh] grid place-content-center">
      <div className="w-full ">

        <div className="h-50 w-ful">
          <Image src="/images/psalm.png" width={1000} height={500} className="border-solid border-2  border-amber-700"/>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <a href="https://www.biblegateway.com/" className="bg-amber-600 p-3 rounded text-white font-gil uppercase">Verse of the Day</a>
          <a href="https://developer.enewhope.org/api/bible.php?churchname=Jesus%20Christ%20Yesterday%20Today%20and%20Forever%20Church&churchweb=https://jcytfchurch.vercel.app&h1color=003399&h2color=003399&navigationcolor=003399" className="bg-amber-600 p-3 rounded text-white font-gil uppercase" target="_blank">
            Our Devotionals
          </a>
        </div>

      </div>
    </section>
  );
};

export default Devotionals;
