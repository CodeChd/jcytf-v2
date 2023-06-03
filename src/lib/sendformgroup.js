export const SendFormGroup = async (data) => {

    fetch("/api/group", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }).then((res) => {
        if(!res.ok) throw new Error("Failed to send data")
        return res.json()
    })


}