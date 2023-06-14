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
         className="bg-partners sml:bg-mediumsc sml:bg-Solo llg:bg-widesc llg:bg-mediumPos bg-no-repeat wide:bg-ul-wide ultra:bg-ul-wide" 
         />
        <ChurchPartners id="partners"/>
    </>
  )
}

export default partners