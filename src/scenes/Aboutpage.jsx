import HeroComponent from "@/components/HeroComponent";
import Identity from "@/components/Identity";
import Mission from "@/components/Mission";

const AboutPage = () => {
  return (
    <>
      <HeroComponent
        title="About Our Community"
        desc="MONDAY - SUNDAY AT 9:00AM - 5:00PM | SATURDAY - CLOSED"
        btnName="New Here?"
      />
      <Mission/>
      <Identity/>
    </>
  );
};

export default AboutPage;
