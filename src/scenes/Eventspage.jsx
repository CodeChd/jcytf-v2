import Events from "@/components/Events";
import EventsSearch from "@/components/EventsSearch";

const Eventspage = ({eventsData}) => {
  return (
    <>
      <EventsSearch />
      <Events eventsData={eventsData}/>
    </>
  );
};

export default Eventspage;
