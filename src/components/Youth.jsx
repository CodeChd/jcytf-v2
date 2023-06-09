import Image from "next/image"
import Link from "next/link"

const Youth = ({id}) => {
  return (
    <section id={id} className=" bg-slate-50 text-black ">
      <div className="max-w-7xl sml:max-w-6xl mx-auto flex items-cente min-h-[50vh] sm:px-4 p-14">

        <div className="flex xxl:flex-col gap-[5rem] xxl:items-start items-center font-gilLight font-bold text-xl">

          <div className="lg:h-full xxl:w-full xxl:h-[30rem]">
            <Image src="/images/Youth.jpg"  loading="lazy" width={600} height={500}
             className="xxl:w-full xxl:h-full rounded-md"/>
          </div>

          <div className="flex flex-col justify-end gap-2 py-2">

          <div className="mb-2">
          <h3 className="text-2xl text-amber-800 text-[1.5rem] leading-8 tracking-wide text-left font-gilLight font-bold uppercase">
            Youth
          </h3>
          <p className="sm:text-2xl text-4xl mt-1 max-w-[45ch] text-left font-gil uppercase">
          A safe place for teens to develop real relationships. 
          </p>
        </div>
        

            <p className="max-w-[50ch] text-[1.40rem] leading-8">
            The student ministry at our church exists to connect teens to Christ. We create safe environments that allow students to know, experience, and serve Jesus in community.
            </p>

             <Link
              href="/ministry"
              className="font-gilLight uppercase mt-5 text-lg transition-transform hover:scale-110 self-start rounded-full text-white bg-amber-600 p-1 px-4"
            >
             Learn More

            </Link>
          </div>

         
        </div>

      </div>
      
    </section>
  )
}

export default Youth