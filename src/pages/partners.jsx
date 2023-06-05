import ChurchPartners from "@/components/ChurchPartners"
import HeroComponent from "@/components/HeroComponent"

const partners = () => {
  return (
    <>
    
    <HeroComponent
         title="Together We Serve"
         desc="Discover the organizations and individuals that help us make a difference in our community and beyond."
         btnName="Become A Partner?"
         href="partners"
         className="bg-mediumPos bg-partners sml:bg-mediumsc lgDesktop:bg-widesc bg-no-repeat wide:bg-ultrasc"
         />
        <ChurchPartners id="partners"/>
    </>
  )
}

export default partners