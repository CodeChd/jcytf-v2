import { FaEnvelope, FaFacebook } from "react-icons/fa";



const Devotionals = () => {
  return (
    <section className="w-full py-14 min-h-[80vh] grid place-content-center font-gilLight font-bold ">
      <div className="max-w-5xl  px-8">
        <div className="w-full flex flex-col gap-12 sml:gap-8 text-2xl ">
          <h2 className="text-4xl">Walking in the Garden</h2>

          <p >
            SCRIPTURE READING —
            <a href="https://www.biblegateway.com/passage/?search=Genesis%203%3A1-15&version=NIV">
              GENESIS 3:1-15
            </a>
          </p>

          <p className="border-dashed  border-b-2 border-gray-600 p-2">
            The man and his wife heard the sound of the Lord God as he was
            walking in the garden in the cool of the day. . . .
            <span className="block mt-4"> — Genesis 3:8</span>
          </p>
        </div>

        <div className="flex gap-12 mt-8 text-2xl leading-10">
          {/* <div className="self-center">

            <h3 className="font-gil">SHARE:</h3>
            <ul className="flex gap-4 mt-2">
              <li><a className="cursor-pointer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://jcytfchurch.vercel.app/devotional"><FaFacebook/></a></li>
              <li><a className="cursor-pointer" href="mailto:"><FaEnvelope/></a></li>
            </ul>
          </div> */}

          <div className="flex flex-col items-center gap-8">
            <p>
              While hiking the Appalachian Trail, I enjoyed the early April
              wildflowers blooming along the pathway. I particularly noticed a
              crocus with a beautiful white flower. Sadly, its stem had broken,
              and it drooped sideways. It reminded me of the first walking scene
              in the Bible. Adam and Eve must have enjoyed walking with God “in
              the cool of the day” in their garden home. But in today’s story
              from Genesis 3, they were deeply anxious. Earlier in the day, they
              had disobeyed God, doing the one thing God had told them not to
              do. God had created Adam and Eve to live in fellowship with
              himself, with each other, and in harmony with the earth and its
              creatures. In their disobedience, however, they tried to hide from
              God, and, as the story continues, we see their alienation from
              each other and from the rest of God’s good creation. When he comes
              to walk with them, God finds Adam and Eve cowering in shame. God
              explains the consequences of their sin. But in his judgment on the
              serpent, we glimpse God’s promise to redeem fallen humanity back
              to fellowship with himself, with each other, and with his world.
              As I hiked through Appalachia in April, I found it was often
              comfortably cool late in the day, and this drew me to look forward
              to walking with God and all his family in the world he has
              promised to redeem.
              <span className="block mt-8 text-3xl text-gray-600 font-gilLight font-bold"> 
                Lord, you have made us for fellowship with you. Thank you for
                redeeming us through Jesus—to love you, others, and your world.
                Amen.
              </span>
            </p>

            <a
              href="https://developer.enewhope.org/api/bible.php?churchname=Jesus%20Christ%20Yesterday%20Today%20and%20Forever%20Church&churchweb=https://jcytfchurch.vercel.app&h1color=003399&h2color=003399&navigationcolor=003399"
              className="mr-[8rem] border-solid border-b-4 border-amber-600 p-3 rounded text-amber-800 font-gilLight uppercase hover:scale-105 transition-transform hover:text-amber-500"
              target="_blank"
            >
              More of Our Devotionals
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Devotionals;
