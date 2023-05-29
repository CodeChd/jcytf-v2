import Homepage from "@/scenes/Homepage";

export default function Home({events}) {
  return <Homepage data={events} />;
}


export async function getServerSideProps() {
  //fetch events
  const res = await fetch(
   "https://jcytfchurch.000webhostapp.com/api.php"
  );
  const events = await res.json();

  return {
    props: { events },
  };
}
