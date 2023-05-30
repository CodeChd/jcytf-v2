import Eventspage from "@/scenes/Eventspage";

const index = ({ evt }) => {
  return (
    <main className=" bg-slate-200 min-h-screen py-20 flex flex-col">
      <Eventspage eventsData={evt} />
    </main>
  );
};

export default index;

export async function getServerSideProps() {
  //fetch events
  const res = await fetch("https://jcytfchurch.000webhostapp.com/api.php");
  const evt = await res.json();

  return {
    props: { evt },
  };
}
