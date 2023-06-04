import ConnectHero from "@/components/ConnectHero"
import Kids from "@/components/Kids"
import LifeGroup from "@/components/LifeGroup";
import Ministry from "@/components/Ministry";
import Youth from "@/components/Youth";


const connect = () => {
  return (
    <main>
      <ConnectHero dataImg="bg-connect bg-Pos2 bg-no-repeat bg-mediumsc wide:bg-ultrasc" />
      <Kids />
      <Youth/>
      <LifeGroup id="programs"/>
      <Ministry id="ministry"/>
    </main>
  );
};

export default connect;
