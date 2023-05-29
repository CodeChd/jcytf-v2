import EventItem from "./EventItem";

const Events = ({ eventsData }) => {

    const sample = eventsData.slice(0,3)
  return (
    <section className="w-full">
      {sample.map((events) => (
        <EventItem events={events} />
      ))}
    </section>
  );
};

export default Events;
