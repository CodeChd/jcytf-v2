import { toast } from "react-hot-toast";

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

      <div className="md:w-[70%] xl:w-[40rem] w-[60rem] ">

        <form className="uppercase bg-white flex md:px-2 md:py-0 p-2 rounded relative">

          <input
             type="text"
            className="p-4 w-full bg-search bg-no-repeat bg-iconsize bg-searchBt pl-[4rem] outline-none"
            placeholder="Search Events"
            value={inputVal}
            onChange={handleChange}
          />




          <div className="flex gap-4 items-center ">
            <button
              onClick={handleSubmit}
              className="bg-amber-600 p-1 mx-2 font-gilLight rounded text-white cursor-pointer font-extrabold  w-[7rem] h-[3rem] md:absolute md:h-[2.5rem] left-[45%] top-[4rem]"
            >
              Find events
            </button>




            <button
              onClick={handleReset}
              className="bg-amber-600 p-1 mx-2 font-gilLight rounded text-white cursor-pointer font-extrabold  w-[7rem] h-[3rem] md:absolute md:h-[2.5rem] left-[73%] top-[4rem]"
            >
              Reset
            </button>
          </div>





        </form>

        <div className="mt-2 ">
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
