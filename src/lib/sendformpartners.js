import { toast } from "react-hot-toast";
export const SendFormPartners = async (data) => {

    fetch("/api/partners", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }).then(() => {
       
        
    toast.success("Email Sent!");
          
    })


}