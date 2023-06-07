import { toast } from "react-hot-toast";
import EventItem from "./EventItem";
import EventsSearch from "./EventsSearch";
import { useEffect, useState } from "react";

const Events = ({ eventsData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState(eventsData);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  
      
      setSubmit(true);
      const newFilterData = eventsData.filter((event) =>
      event.EventName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterData(newFilterData);
    
  };

  const handleChange = (e) => {
    if(e.target.value.length === 24){
     toast.error("Input exceed 24 characters!")
     setSearchTerm("")
      return
    }
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFilterData(eventsData);
    // console.log(searchTerm)
  }, [searchTerm]);

  return (
    <>
      <EventsSearch
        inputVal={searchTerm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <section className="w-full mt-14 flex flex-col relative">
        <h2 className="border-b-4 border-solid border-amber-700 self-center text-2xl font-gilLight ">
          JUNE 2023
        </h2>

        {submit && searchTerm !== ""
          ? filterData.map((events) => (
              <EventItem key={events.id} events={events} />
            ))
          : eventsData.map((events) => (
              <EventItem key={events.id} events={events} />
            ))}
      </section>
    </>
  );
};

export default Events;
