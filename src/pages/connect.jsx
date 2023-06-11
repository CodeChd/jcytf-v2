import ConnectHero from "@/components/ConnectHero"
import Kids from "@/components/Kids"
import LifeGroup from "@/components/LifeGroup";
import Ministry from "@/components/Ministry";
import Youth from "@/components/Youth";
import { Toaster } from "react-hot-toast";


const connect = () => {
  return (
    <main>
      <Toaster/>
      <ConnectHero dataImg="bg-connect bg-no-repeat sml:bg-smallsc  lgDesktop:bg-widesc wide:bg-ultrasc" />
      <Kids id="kids" />
      <Youth id="youth"/>
      <LifeGroup id="programs"/>
      <Ministry id="ministry"/>
    </main>
  );
};

export default connect;
