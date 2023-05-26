import Image from "next/image";


const About = ({id}) => {
  return (
    <section id={id} className="w-full p-20 ">
    <div className="px-24 flex flex-col gap-4">
      <h2 className="flex self-center text-7xl font-extrabold uppercase border-solid border-b-[6px] pb-2 border-gray-900">
        About Jcytf church
      </h2>

      <div className="w-full mt-8 flex gap-12 justify-center">
        <article className="inline-block flex-1 max-w-2xl">
          <h3 className="uppercase font font-medium">|| WELCOME</h3>
          <p className="text-3xl font-medium non-italic mt-4">
            We are a family of men and women who have encountered God and
            committed our lives to the lord, focused on making an impact
            through the work of the holy spirit in transforming lives,
            families, communities and nations, for the glory of God.
          </p>

          <button
            role="button"
            className="px-12 p-2 bg-amber-600 rounded text-white font-medium
          mt-4 text-lg"
          >
            Read more
          </button>
        </article>

        <div className="inline-block ">
          <Image
            src="/images/about.jpg"
            width={450}
            height={450}
            className="w-full inline-block object-fit"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default About