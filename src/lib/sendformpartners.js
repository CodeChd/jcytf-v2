import { toast } from "react-hot-toast";
export const SendFormPartners = async (data) => {

    fetch("/api/partners", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }).then((res) => {
        if (!res.ok) {
            toast.error("Too Many Requests.. try again in 1 minute");

          } 
          if (res.ok) {
            toast.success("Email Sent!");
          }
    })


}