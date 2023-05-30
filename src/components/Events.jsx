import EventItem from "./EventItem";

const Events = ({ eventsData }) => {

    const sample = eventsData.slice(0,6)
  return (
    <section className="w-full mt-14 flex flex-col relative">
        <h2 className="border-b-4 border-solid border-amber-700 self-center text-2xl font-gilLight ">MAY 2023</h2>
      {sample.map((events) => (
        <EventItem key={events.id} events={events} />
      ))}
    </section>
  );
};

export default Events;
