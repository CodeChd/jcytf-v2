import { toast } from "react-hot-toast";
export const SendFormMinistry = async (data) => {

    fetch("/api/ministry", {
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