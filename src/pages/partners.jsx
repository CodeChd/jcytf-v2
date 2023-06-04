import ChurchPartners from "@/components/ChurchPartners"
import HeroComponent from "@/components/HeroComponent"

const partners = () => {
  return (
    <>
    
    <HeroComponent
         title="Together We Serve"
         desc="Discover the organizations and individuals that help us make a difference in our community and beyond."
         btnName="Become A Partner?"
         href=""
         className="bg-Pos bg-partners bg-mediumsc bg-no-repeat wide:bg-ultrasc"
         />
        <ChurchPartners/>
    </>
  )
}

export default partners