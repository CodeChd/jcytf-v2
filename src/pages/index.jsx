import About from "@/components/About";
import Connect from "@/components/ConnectWithUs";
import Faq from "@/components/Faq";
import Ftevents from "@/components/Ftevents";
import Hero from "@/components/Hero";
import Pastors from "@/components/Pastors";

export default function Home({ events }) {
  return (
    <main>
      <Hero id="home" />
      <About id="about" />
      <Connect id="connect" />
      <Ftevents id="ftevents" data={events} />
      <Pastors id="pastors" />
      <Faq id="faq" />
    </main>
  );
}

export async function getServerSideProps() {
  //fetch events
  const res = await fetch("https://jcytfchurch.online/queryimg.php");
  const events = await res.json();

  return {
    props: { events },
  };
}
