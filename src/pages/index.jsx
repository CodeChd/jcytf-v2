import Homepage from "@/scenes/Homepage";

export default function Home({events}) {
  return <Homepage data={events} />;
}


export async function getServerSideProps() {
  //fetch events
  const res = await fetch(
   " http://127.0.0.1/jcytf-php/api.php"
  );
  const events = await res.json();

  return {
    props: { events },
  };
}
