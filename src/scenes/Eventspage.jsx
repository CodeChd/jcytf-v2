import Events from "@/components/Events";
import EventsSearch from "@/components/EventsSearch";

const Eventspage = ({eventsData}) => {
  return (
    <main className="bg-slate-200 min-h-screen py-20 flex flex-col">
      <EventsSearch />
      <Events eventsData={eventsData}/>
    </main>
  );
};

export default Eventspage;
