import { toast } from "react-hot-toast";

export const SendFormGroup = async (data) => {
  fetch("/api/group", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then(async (res) => {
    if (!res.ok) {
      toast.error("Too Many Requests.. try again in 1 minute");
    } else if (res.ok) {
      toast.success("Email Sent!");
    }
  });
};
