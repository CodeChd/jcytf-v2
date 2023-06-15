import { toast } from "react-hot-toast";
export const SendFormVisit = async (data) => {

    fetch("/api/visit", {
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