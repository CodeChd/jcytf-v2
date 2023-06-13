import Image from "next/image";
import Link from "next/link";

const ChurchPartners = ({id}) => {
  return (
    <main>
        <div className="bg-[#d97706] text-white flex flex-col items-center  py-8 llg:py-20  gap-4">
          <h2 className="text-7xl xs:text-3xl md:text-4xl mdItem:text-5xl sml:text-6xl llg:text-7xl text-center font-gil">
            PARTNERS IN THE CHURCH
          </h2>
          <p className=" md:text-lg text-2xl text-center">
            God is transforming lives here at JCYTF Church.
          </p>
        </div>

        <div className="flex flex-col gap-14 max-w-[75.6rem] mx-auto p-8 leading-7 text-gray-700">
          <div className=" bg-gray-100 p-4 rounded-md flex mdItem:flex-col gap-8">
            <div className="w-[130rem] mdItem:w-full">
              <Image src="/images/samaritana.jpg" width={500} height={300}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl mb-2">Samaritana</h3>
              <p className="text-xl">
                Samaritana is a non-profit,
                non-denominational organization committed to sharing and living
                out the Gospel among Filipino women caught in prostitution, in
                partnership with other members of the Body of Christ
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-md flex mdItem:flex-col gap-8">
            <div className="flex flex-col justify-center mdItem:order-2">
              <h3 className="text-2xl mb-2">Bawat Isa Mahalaga - B1M</h3>
              <p className="text-xl">
                A movement of citizens and groups of citizens, whose mission is
                to pursue transformation of the Filipino nation.
              </p>
            </div>

            <div className="w-[50rem] mdItem:w-full mdItem:order-1">
              <Image src="/images/b1m.png" width={600} height={500} 
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-md flex mdItem:flex-col gap-8">
            <div className="w-[40rem] mdItem:w-full">
              <Image src="/images/pem.jpg" width={400} height={300}
                className="w-full "
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl mb-2">Payatas Evangical Movement</h3>
              <p className="text-xl">
                Association of churches in Payatas to reach out to the less
                fortunate, whether in spiritual or financial need

                
              </p>
            </div>
          </div>

          <div className="w-full mt-14 flex flex-col items-center gap-8">
            <div className="w-full">
              <Image src="/images/Students_Worship.jpg" width={900} height={700} className="w-full max-w-8xl" />
              <h3 className="text-5xl font-gil text-center mt-4">The Big Picture</h3>
            </div>
            <p className="text-xl">We know that the church is made of people, not buildings. But for people to gather and thrive in community, the right facilities can be dynamic tools for God’s glory. God is calling us to expand our spaces to enable us to better live out Jesus Christ Yesterday Today And Forever Church Values.</p>

            <h3 className="italic self-start text-4xl ">Livelihood and Community</h3>

            <div >
                <p className="text-xl mb-2"><span className="text-2xl font-gil">Livelihood</span> – As we reach more families in our community, we want to create a welcoming, intentional, and livelihood-focused space in our building to support the needs of our community members—a place where they feel at home. Many people in our community face challenges related to employment, economic stability, and access to resources. We know that God cares about every aspect of our lives, including our livelihoods, and we want to be equipped to serve and support those in need.</p>
                <p className="text-xl mt-2"><span className="text-2xl font-gil">Community</span>  - is at the heart of everything we do at our church. We believe that relationships are key to living a fulfilling life and growing in our faith. That's why we're committed to creating a welcoming and inclusive environment where people from all walks of life can come together, share their stories, and support one another.</p>
            </div>

            <Link href="/becomeapartner" className="bg-amber-600 p-3 px-8 text-white text-2xl font-gil rounded-full ">Get Involved</Link>

          </div>

        <section id={id}>
            <div className="flex flex-col items-center gap-4">

            <hr className="h-[3px] bg-gray-500 w-[10rem]"/>
            <h3 className="text-2xl text-center italic font-gilLight">I give thanks to my God whenever I remember you, and in every prayer I make for you all, I pray with joy because of your commitment to church partnerships from the beginning.  Eph 4:3-6
           
            </h3>
            </div>

            <div className="uppercase bg-slate-100 flex flex-col rounded xs:px-2 p-4 mt-8">
                <h3 className="text-center xs md:text-2xl text-3xl font-gilLight font-bold">FIND OUT MORE ABOUT PARTNERS IN THE CHURCH</h3>
                <div className="flex justify-center items-center mt-8 menu:-translate-x-[2rem] gap-8">
                    <Link href="/becomeapartner" className="bg-amber-600 rounded-full text-white font-gil xs:text-sm text-xl p-2 xs:px-2 px-4">Become A Partner</Link>
                    <Link href="/give" className="bg-amber-600 rounded-full text-white font-gil xs:text-sm text-xl p-2 px-4">Give Now</Link>
                </div>
            </div>

        </section>

        </div>
    </main>
  );
};

export default ChurchPartners;
