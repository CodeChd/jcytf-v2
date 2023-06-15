import { toast } from "react-hot-toast";

export const SendFormGroup = async (data) => {
  fetch("/api/group", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then( () => {
  
 
      toast.success("Email Sent!");
    
  });
};
