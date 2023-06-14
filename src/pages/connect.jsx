import HeroComponent from "@/components/HeroComponent";
import Kids from "@/components/Kids"
import LifeGroup from "@/components/LifeGroup";
import Ministry from "@/components/Ministry";
import Youth from "@/components/Youth";
import { Toaster } from "react-hot-toast";


const connect = () => {
  return (
    <main>
      <Toaster/>
      <header>
        <HeroComponent
         title="Get Connected"
         desc="No matter where you are in life, there is a place for you here"
         btnName="Join Us"
         href="ministry"
         className="bg-connect bg-no-repeat sml:bg-smallsc sml:bg-smallPos wide:bg-ul-wide ultra:bg-ul-wide"
        />
    </header>
      <Kids id="kids" />
      <Youth id="youth"/>
      <LifeGroup id="programs"/>
      <Ministry id="ministry"/>
    </main>
  );
};

export default connect;
