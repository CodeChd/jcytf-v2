import Events from "@/components/Events";
import EventsSearch from "@/components/EventsSearch";

const index = ({ evt }) => {
  return (
    <main className=" bg-slate-200 min-h-screen py-20 flex flex-col">
      <EventsSearch />
      <Events eventsData={evt} />
    </main>
  );
};

export default index;

export async function getServerSideProps() {
  //fetch events
  const res = await fetch("https://jcytfchurch.online/api.php");
  const evt = await res.json();

  return {
    props: { evt },
  };
}
