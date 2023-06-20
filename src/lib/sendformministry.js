import { toast } from "react-hot-toast";
export const SendFormMinistry = async (data) => {

    fetch("/api/ministry", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }).then( res => {
        if(res.ok) {
          toast.success("Email Sent!")
        }
        
        if(!res.ok) {
          toast.error("Try again in 1 minute..") 
        }
      })


}