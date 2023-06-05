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
        className="bg-give bg-aboutPos bg-no-repeat file:sml:bg-mediumsc lgDesktop:bg-widesc wide:bg-ultrasc"
      />
      <Give id="give"/>
    </>
  );
};

export default give;
