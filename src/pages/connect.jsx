import ConnectHero from "@/components/ConnectHero"
import Kids from "@/components/Kids"
import LifeGroup from "@/components/LifeGroup";
import Ministry from "@/components/Ministry";
import Youth from "@/components/Youth";


const connect = () => {
  return (
    <main>
      <ConnectHero dataImg="bg-connect bg-Pos2 bg-no-repeat bg-100%" />
      <Kids />
      <Youth/>
      <LifeGroup/>
      <Ministry/>
    </main>
  );
};

export default connect;
