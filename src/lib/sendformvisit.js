import { toast } from "react-hot-toast";
export const SendFormVisit = async (data) => {

    fetch("/api/visit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }).then((res) => {
     
        if(res.ok) toast.success("Email Sent!");
        
    })


}