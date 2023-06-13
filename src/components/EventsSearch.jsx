import {FaCheck, FaTrash } from "react-icons/fa";


const EventsSearch = ({
  handleChange,
  handleSubmit,
  handleSelect,
  inputVal,
  handleReset,
}) => {



  return (
    <header className="flex flex-col items-center gap-14 py-6">
      <h1 className="text-gray-950 font-gilLight font-extrabold md:text-4xl md:font-gil xl:text-5xl text-7xl">
        Upcoming Events
      </h1>

      <div className="xs:w-full md:w-[90%] xl:w-[40rem] w-[60rem] p-4">

        <form className="uppercase bg-white flex md:px-2 p-2 rounded relative">

          <input
             type="text"
            className="p-4 w-full bg-search bg-no-repeat bg-iconsize bg-searchBt pl-[4rem] outline-none"
            placeholder="Search Events"
            value={inputVal}
            onChange={handleChange}
          />




          <div className="flex md:gap-8 gap-2 items-center justify-end ">
            <button
              onClick={handleSubmit}
              className="md:hidden bg-amber-600 p-1 mx-2 font-gilLight rounded text-white cursor-pointer font-extrabold  w-[7rem] h-[3rem] xs:h-[2rem] "
            >
              Find events
            </button>

            <button
              onClick={handleReset}
              className="md:hidden bg-amber-600 p-1 mx-2 font-gilLight rounded text-white cursor-pointer font-extrabold  w-[7rem] h-[3rem] xs:h-[2rem]"
            >
              Reset
            </button>


            <FaCheck   onClick={handleSubmit} role="button" className="mdIcons:hidden text-2xl fill-amber-600"/>
            
            <FaTrash onClick={handleReset} role="button" className="mdIcons:hidden text-2xl text-amber-600 mr-5"/>

          </div>





        </form>
        <div className="mt-2">
          <select onChange={handleSelect} name="EVENTS" className="p-2">
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

      </div>
    </header>
  );
};

export default EventsSearch;
