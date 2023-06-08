import { DateFormatter } from "@/hooks/DateFormatter"
import Image from "next/image"
import Link from "next/link"

const Details = ({data, dtl}) => {

  const evtData = data.filter((e) => e.id === dtl  )
  const EventDate = DateFormatter(evtData[0])


  return (
    <main className='min-h-screen bg-slate-100'>

      <div className="max-w-6xl mx-auto py-14 flex flex-col gap-14">

        <div className="flex justify-between items-start">
          <div>

          <h1 className="text-5xl font-gil mb-3">{evtData[0].EventName}</h1>
          <p className="text-lg font-medium">{evtData[0].Date} @ {evtData[0].Time} </p>
          </div>
          <Link href={`/events`} className="bg-gray-800 p-2 px-8 text-white font-gilLight font-bold rounded">Go Back</Link>
        </div>


        <div>

        <Image src={`https://jcytfchurch.online/images/${evtData[0].featuredimage}`} width={400} height={400} className="w-full"/>
      <p className="mt-4 text-2xl font-gilLight font-medium ">{evtData[0].Description}</p>
        </div>

        <Link href={`/events/gallery/${evtData[0].id}`} className="bg-amber-600 p-2 px-8 self-start text-white font-gilLight font-bold rounded">Gallery</Link>


        <div className="flex gap-14  font-gilLight font-bold tracking-wide">

          <div className="flex flex-col gap-3">

            <h3 className="text-3xl font-bold">Details</h3>
            <p>Date:&nbsp;<span className="text-lg font-gil ml-2 uppercase">{EventDate}</span></p>
            <p>Time:&nbsp;<span className="text-lg font-gil ml-2 uppercase">{evtData[0].Time}</span></p>
       
          </div>

          <div className="flex flex-col gap-2 font-gilLight font-bold capitalize">

            <h3 className="text-3xl font-bold">Venue</h3>
            
            <p>Address: <span className="text-lg font-gil ml-2 uppercase">{evtData[0].Venue}</span></p>
            <p>Speaker: <span className="text-lg font-gil ml- uppercase">{evtData[0].Speaker}</span></p>
            <p>Attendees: <span className="text-lg font-gil ml-2 uppercase">{evtData[0].attendees}</span></p>
            <p>Contact: <span className="text-lg font-gil ml-2 uppercase">(+63) 997 574 4318</span></p>

          </div>


        </div>


      </div>


    </main>
  )
}

export default Details


export async function getServerSideProps({params: {slug} }) {
  //fetch events
  
  const res = await fetch(`https://jcytfchurch.online/api.php`);

  const dtl = slug

  const data = await res.json();

  return {
    props: { data, dtl },
  };
}
