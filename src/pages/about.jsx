import HeroComponent from "@/components/HeroComponent";
import Identity from "@/components/Identity";
import Mission from "@/components/Mission";
import Visit from "@/components/Visit";
import { Toaster } from "react-hot-toast";
import Map from "@/Loc/Map"

const DEFAULT_CENTER = [14.7089628  , 121.099202420]

const Mapa = () => {
  return (
    
    <Map width="500" height="100" center={DEFAULT_CENTER} zoom={12}>
    {({ TileLayer, Marker, Popup }) => (
      <>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://cjfrancisco.vercel.app&quot;>JCYTF</a> Developer"
        />
        <Marker position={DEFAULT_CENTER}>
          <Popup>
          Jesus Christ Yesterday Today and Forever Church.
          </Popup>
        </Marker>
      </>
    )}
  </Map>
  )
}

const about = () => {
  return (
    <main className="min-h-screen">
      <Toaster/>
      <HeroComponent
        title="About Our Community"
        desc="MONDAY - SUNDAY AT 9:00AM - 5:00PM | SATURDAY - CLOSED"
        btnName="New Here?"
        href="new"
        className="bg-about bg-aboutPos bg-no-repeat lg:bg-mediumsc lg:bg-mediumPos  llg:bg-widesc   gap:bg-constant wide:bg-ul-wide ultra:bg-ul-wide"
      />
      <Mission id="mission"/>
      <Identity />
      <Visit id="new" />
      <Mapa />
    </main>
  );
};

export default about;
