

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

export const MonthFormatter = (month) => {
    const eventMonth = month.Date.split("T").shift().split("-")[1] - 1;
    return eventMonth
} 

export const DaysFormatter = (days) => {
    const Days = days.Date.split("T").shift().split("-")[2];
    return Days
} 

export const DateFormatter = (month) => {
    const eventMonth = month.Date.split("T").shift().split("-")[1] - 1;
    const Days = month.Date.split("T").shift().split("-")[2];
    return `${months[eventMonth]} ${Days}`
} 