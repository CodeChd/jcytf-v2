const EventsSearch = () => {
  return (
      <header className="flex flex-col items-center gap-14">
        <h1 className="text-gray-950 font-gilLight font-extrabold text-7xl">Upcoming Events</h1>

        <div className="w-[60%]">
          <form className="uppercase bg-white flex p-2 rounded">
            <input type="search" className="p-4 w-full bg-search bg-no-repeat bg-16 bg-searchBt pl-[4rem] outline-none" placeholder="Search Events"/>
            <button className="bg-amber-600 p-2 font-gilLight rounded text-white cursor-pointer font-extrabold w-[10rem]">
              Find events
            </button>
          </form>

          <div className="mt-2 ">
            <select name="EVENTS" className="p-2">
              <option value="">Select Month</option>
            </select>
          </div>
        </div>
      </header>
  );
};

export default EventsSearch;
