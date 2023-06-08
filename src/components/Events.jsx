import { toast } from "react-hot-toast";
import EventItem from "./EventItem";
import EventsSearch from "./EventsSearch";
import { useEffect, useState } from "react";
import { MonthFormatter } from "@/hooks/DateFormatter";

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
  const [month, setMonth] = useState("");
  const [dateVisible, setDateVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      toast.error("Please Input Event Name!");
      return;
    }
    
    
    
    const newFilterData = eventsData.filter((event) => {
      const data = event.EventName.toLowerCase().includes(
        searchTerm.toLowerCase()
      );

      return data;
    });
    
    if(newFilterData.length === 0){
      toast.error("Aba wala nyan oii!")
    }else if(newFilterData.length){

      toast.success("Oh YAN OH")
    }
    
    setFilterInput(newFilterData);
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (filterInput.length > 0) {
      setFilterInput([]);
    }
    setSearchTerm("");
    setMonth("");
    setDateVisible(false);
  };

  const handleChange = (e) => {
    if (e.target.value.length === 32) {
      toast.error("Input exceed 32 characters!");
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
      const eventMonth = MonthFormatter(event);
      return eventMonth === monthIndex;
    });
    setFilterInput(filteredByMonth);
    setSearchTerm("");
    setDateVisible(true);
  };

  useEffect(() => {
    filterInput.filter((event) =>{
      searchTerm === event.EventName && toast.success("Yan oh")
   })
  }, [filterInput])


  return (
    <>
      <EventsSearch
        inputVal={searchTerm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleReset={handleReset}
      />
      <section className="w-full mt-14 flex flex-col relative">
        <h2 className="border-b-4 border-solid border-amber-700 self-center text-3xl font-gilLight font-bold ">
          {month === "" ? null : month}
        </h2>

        <>
          {/* events display */}
          {searchTerm !== "" || month
            ? filterInput
                .slice(0, 3)
                .map((events) => <EventItem key={events.id} events={events} />)
            : eventsData
                .slice(0, 3)
                .map((events) => <EventItem key={events.id} events={events} />)}



          {/* promise handler */}
          {searchTerm !== "" && filterInput.length === 0 ? (
            <h1 className="max-w-5xl mx-auto text-5xl italic font-gilLight mt-20">
              ano hanap te..
            </h1>
          ) : (
            dateVisible &&
            filterInput.length === 0 &&
            month !== "" && (
              <h1 className="max-w-5xl mx-auto text-5xl italic font-gilLight mt-20">
                No Events to Show...
              </h1>
            )
          )}

      
        </>
      </section>
    </>
  );
};

export default Events;
