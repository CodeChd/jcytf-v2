const Devotionals = () => {
  return (
    <section className="w-full grid place-content-center font-gilLight font-bold sm:px-4 md:px-8 p-14">
      <div className="max-w-5xl  px-8 border-solid border-2 border-black rounded-md rounded-br-3xl p-4 ">
        <div className="w-full flex flex-col gap-10 sml:gap-8 text-2xl ">
          <h2 className="text-4xl">Walking in the Garden</h2>

          <p >
            SCRIPTURE READING — 
            <a className="text-amber-600" href="https://www.biblegateway.com/passage/?search=Genesis%203%3A1-15&version=NIV">
              &nbsp;GENESIS 3:1-15
            </a>
          </p>

          <p className="border-dashed  border-b-2 border-gray-600 p-2">
            The man and his wife heard the sound of the Lord God as he was
            walking in the garden in the cool of the day. . . .
            <span className="block mt-4"> — Genesis 3:8</span>
          </p>
        </div>

        <div className="flex gap-12 mt-4 text-2xl leading-10">

          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-xl tracking-wider">
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
            </p>

          </div>
        </div>


      </div>
      <div className="w-full flex flex-col items-center justify-center gap-8">

              <span className="block mt-8 text-2xl max-w-4xl text-center mx-auto text-gray-600 font-gilLight font-bold"> 
                Lord, you have made us for fellowship with you. Thank you for
                redeeming us through Jesus—to love you, others, and your world.
                Amen.
              </span>
            <a
              href="https://odb.org/deeper"
              className="bg-amber-600 text-white xs:text-xl text-2xl rounded-full p-1 px-4 font-gilLight border-2  border-solid capitalize transition-all hover:text-gray-900 hover:bg-white hover:hover:border-amber-600 self-center -translate-x-[0.25rem]"
              target="_blank"
              >
             More Daily Inspiration
            </a>
              </div>
    </section>
  );
};

export default Devotionals;
