import HeroComponent from "@/components/HeroComponent";
import Identity from "@/components/Identity";
import Mapa from "@/components/Map";
import Mission from "@/components/Mission";
import Visit from "@/components/Visit";

const about = () => {
  return (
    <main className="min-h-screen">
      <HeroComponent
        title="About Our Community"
        desc="MONDAY - SUNDAY AT 9:00AM - 5:00PM | SATURDAY - CLOSED"
        btnName="New Here?"
        href="new"
        className="bg-about bg-aboutPos bg-no-repeat bg-100%"
      />
      <Mission />
      <Identity />
      <Visit id="new" />
      <Mapa />
    </main>
  );
};

export default about;
