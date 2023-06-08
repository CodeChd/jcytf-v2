import { toast } from "react-hot-toast";
import EventItem from "./EventItem";
import EventsSearch from "./EventsSearch";
import { useEffect, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Events = ({ eventsData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInput, setFilterInput] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [month, setMonth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(true);
    const newFilterData = eventsData.filter((event) =>
      event.EventName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterInput(newFilterData);
  };

  const handleChange = (e) => {
    if (e.target.value.length === 24) {
      toast.error("Input exceed 24 characters!");
      setSearchTerm("");
      return;
    }
    setSearchTerm(e.target.value);
    setMonth("");
  };

  const handleSelect = (e) => {
    const data = e.target.value;
    setMonth(data);
    const monthIndex = months.indexOf(data);
    const filteredByMonth = eventsData.filter((event) => {
      const eventMonth = event.Date.split("T").shift().split("-")[1] - 1;
      return eventMonth === monthIndex;
    });
    setFilterInput(filteredByMonth);
  };

  //side effects
  // useEffect(() => {
  //   setFilterInput(eventsData);
  // }, [searchTerm]);

  return (
    <>
      <EventsSearch
        inputVal={searchTerm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelect={handleSelect}
      />
      <section className="w-full mt-14 flex flex-col relative">
        <h2 className="border-b-4 border-solid border-amber-700 self-center text-3xl font-gilLight font-bold ">
          {month === "" ? null : month}
        </h2>

        {searchTerm !== "" || month ? 
          filterInput.length > 0 ? (
            filterInput.slice(0, 3).map((events) => (
              <EventItem key={events.id} months={months} events={events} />
            ))
          ) : filterInput.length === 0  &&(
            <h1 className="max-w-5xl mx-auto text-5xl italic font-gilLight mt-20">
              No Events to Show...
            </h1>)
          
         : (
          searchTerm === "" &&
          eventsData
            .slice(0, 3)
            .map((events) => (
              <EventItem key={events.id} months={months} events={events} />
            ))
        )}
      </section>
      
    </>
  );
};

export default Events;
