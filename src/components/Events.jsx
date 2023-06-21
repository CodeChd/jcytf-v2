import { toast } from "react-hot-toast";
import EventItem from "./EventItem";
import EventsSearch from "./EventsSearch";
import { useState, useEffect } from "react";

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

const Events = () => {
  //misc
  const [searchTerm, setSearchTerm] = useState("");
  const [month, setMonth] = useState("");
  const [dateVisible, setDateVisible] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  //paginated data from backend
  const [eventsPaginate, setEventsPaginate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  //all events
  const [allevents, setAllEvents] = useState([]);

  //Pagination Actions

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  //page numbers
  const renderPaginationButtons = () => {
    const buttons = [];
  
    // display up to 3 page numbers at a time
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);
    if (currentPage === 1) {
      endPage = Math.min(totalPages, 3);
    } else if (currentPage === totalPages) {
      startPage = Math.max(1, totalPages - 2);
    }
    // add page buttons with skipped numbers as dots
    for (let i = startPage; i <= endPage; i++) {
      if (i === startPage && i > 1) {
        buttons.push(
          <span
            key="start-dots"
            className="inline-block text-gray-800 text-4xl cursor-pointer"
            onClick={() => handlePageChange(1)}
          >
            ...
          </span>
        );
      }
      buttons.push(
        <button
          className={`md:px-2 px-8 mt-4 text-lg font-gil ${
            i === currentPage ? "text-amber-400" : "text-gray-800"
          }`}
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
        >
          <span className="text-2xl">{i}</span>
        </button>
      );
      if (i === endPage && i < totalPages) {
        buttons.push(
          <span
            key="end-dots"
            className="inline-block text-gray-800 text-4xl cursor-pointer"
            onClick={() => handlePageChange(totalPages)}
          >
            ...
          </span>
        );
      }
    }
  
    return buttons;
  };
  

  //Actions -start
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      toast.error("Please input an event name");
      return;
    }

    fetch(
      `https://jcytfchurch.online/querydata.php?page=1&per_page=3&search=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data.total_pages);
        // console.log(data.data, "SUBMIT EVENTS");
        setEventsPaginate(data.data);

        if (data.data.length === 0) {
          toast.error(`${searchTerm} doesn't match any events`);
        } else if (data.data.length > 0) {
          toast.success(`Event found related with "${searchTerm}"`);
        }
      })
      .catch((error) => console.error(error));

    setIsSubmit(true);
  };

  const handleReset = (e) => {
    e.preventDefault();

    fetch(`https://jcytfchurch.online/querydata.php?page=1&per_page=3`)
      .then((response) => response.json())
      .then((data) => {
        setAllEvents(data.data);
        setTotalPages(data.total_pages);
        if (data.data.length > 0) {
          setEventsPaginate(data.data);
        }
        // console.log(data.data, "RESET EVENTS");
      })
      .catch((error) => console.error(error));

    setCurrentPage(1);
    setSearchTerm("");
    setMonth("");
    setDateVisible(false);
  };

  //Controlled Input
  const handleChange = (e) => {
    if (e.target.value.length === 22) {
      toast.error("Input exceed 22 characters!");
      setSearchTerm("");
      return;
    }
    setSearchTerm(e.target.value);
    setMonth("");
  };

  //Date filter
  const handleSelect = (e) => {
    const current = e.target.value;

    if (current === "") {
      return;
    }

    setMonth(current);

    fetch(
      `https://jcytfchurch.online/querydata.php?page=1&per_page=3&month=${current}`
    )
      .then((response) => response.json())
      .then((data) => {
        setEventsPaginate(data.data);
        setTotalPages(data.total_pages);

        setDateVisible(true); // indicate that select element is fired
        setCurrentPage(1); // reset current page when changing filters

        if (data.data.length === 0 ) {
          toast.error(`No events found in ${current}`);
        }
        if (data.data.length) {
          toast.success(`Events found in ${current}`);
        }
      })
      .catch((error) => console.error(error));

    setSearchTerm("");
    setDateVisible(true);
  };

  // Actions -end

  //side effects

  //Events Handler
  useEffect(() => {
    // fetch all events data and set eventsPaginate to initial data
    const page = currentPage;
    const perPage = 3;

    if (eventsPaginate.length === 0 || !dateVisible || month === "") {
      fetch(
        `https://jcytfchurch.online/querydata.php?page=${page}&per_page=${perPage}`
      )
        .then((response) => response.json())
        .then((data) => {
          setAllEvents(data.data);
          setTotalPages(data.total_pages);
          // console.log(data.data, "ALL EVENTS");
        })
        .catch((error) => console.error(error));
    }
  }, [currentPage]);

  //Month Filter
  useEffect(() => {
    const page = currentPage;
    // build API URL with query parameters
    let apiUrl = `https://jcytfchurch.online/querydata.php?page=${[
      page,
    ]}&per_page=3`;

    if (month) {
      const monthIndex = months.indexOf(month);
      apiUrl += `&month=${months[monthIndex]}`;
    }
    // make API request

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setEventsPaginate(data.data);
        setTotalPages(data.total_pages);
        // console.log(data.data, "EVENTSPAGINATE");
      })
      .catch((error) => console.error(error));
  }, [currentPage, month]);

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
          {searchTerm !== "" || month ?
          
            eventsPaginate.map((events) => (
                <EventItem key={events.id} events={events} />
              )) 
              :
              searchTerm === "" &&  month === "" && dateVisible ||
                !dateVisible  &&
                allevents.map((evt) => <EventItem key={evt.id} events={evt} />)
            
              }

          {/* promise handler */}
          {searchTerm !== "" &&  eventsPaginate.length === 0 && isSubmit ? (
            <h1 className="max-w-5xl mx-auto sm:text-2xl mdItem:text-4xl text-5xl italic font-gilLight mt-20">
              What{" "}
              <span className="inline-block border-dashed border-b-2 border-amber-600 p-2 er-600 ">
                event
              </span>{" "}
              are you looking for?
            </h1>
          ) : (
            dateVisible &&
            eventsPaginate.length === 0 &&
            month !== "" && (
              <h1 className="max-w-5xl mx-auto md:text-2xl lg:text-4xl text-5xl italic font-gilLight mt-20">
                No Events to Show...
              </h1>
            )
          )}

          {/* pagination */}
          {dateVisible && searchTerm !== "" ||
          eventsPaginate.length === 0 ||
          totalPages === 1 ? null : (
            <div className="self-center text-white ">
              <button
                className={`bg-amber-600 p-2 px-4 mx-4 rounded-full ${
                  currentPage === 1   && "cursor-not-allowed bg-amber-700"
                }`}
                onClick={handlePrevClick}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {renderPaginationButtons()}
              <button
                className={`bg-amber-600 p-2 px-4 mx-4 rounded-full ${
                 currentPage === totalPages && "cursor-not-allowed bg-amber-700 "
                }`}
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      </section>
    </>
  );
};

export default Events;
