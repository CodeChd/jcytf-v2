import About from "@/components/About";
import Connect from "@/components/Connect";
import Hero from "@/components/Hero";
import Pastors from "@/components/Pastors";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About id="about" />
      <Connect id="connect"/>
      <Pastors id="pastors"/>
    </>
  );
};

export default Homepage;
