import Give from "@/components/Give";
import HeroComponent from "@/components/HeroComponent";

const give = () => {
  return (
    <>
      <HeroComponent
        title="Giving"
        desc="Your generosity makes a difference."
        btnName="Give Now"
        href="give"
        className="bg-give bg-aboutPos bg-no-repeat sml:bg-mediumsc llg:bg-widesc wide:bg-ultrasc"
      />
      <Give id="give"/>
    </>
  );
};

export default give;
