
const EventsSearch = ({handleChange,handleSubmit,handleSelect, inputVal}) => {

  return (
    <header className="flex flex-col items-center gap-14 py-6">
      <h1 className="text-gray-950 font-gilLight font-extrabold text-7xl">
        Upcoming Events
      </h1>

      <div className="w-[60%]">
        <form onSubmit={handleSubmit} className="uppercase bg-white flex p-2 rounded">
          <input
            type="search"
            className="p-4 w-full bg-search bg-no-repeat bg-iconsize bg-searchBt pl-[4rem] outline-none"
            placeholder="Search Events"
            value={inputVal}
            onChange={handleChange}
          />
          <button className="bg-amber-600 p-2 font-gilLight rounded text-white cursor-pointer font-extrabold w-[10rem]">
            Find events
          </button>
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
