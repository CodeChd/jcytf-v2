import About from "@/components/About";
import Connect from "@/components/Connect";
import Faq from "@/components/Faq";
import Ftevents from "@/components/Ftevents";
import Hero from "@/components/Hero";
import Pastors from "@/components/Pastors";

const Homepage = ({data}) => {
  return (
    <>
      <Hero id="home"/>
      <About id="about" />
      <Connect id="connect"/>
      <Ftevents id="ftevents" data={data}/>
      <Pastors id="pastors"/>
      <Faq id="faq"/>
    </>
  );
};

export default Homepage;
