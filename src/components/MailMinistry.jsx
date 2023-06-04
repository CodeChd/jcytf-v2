import Image from "next/image";
import { useState } from "react";
import { SendFormMinistry } from "../lib/sendformministry";
import { toast } from "react-hot-toast";

const initValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const initState = { values: initValues };

const MailMinistry = () => {
  const [state, setState] = useState(initState)

  const {values} = state

  const handleChange = ({target}) => {
      setState((prev) => (
        {
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value
        }
        }
      ))
      
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(values.name.length < 6){
        toast.error("Please input name with at least 6 letters")
        return
    }
    if( isNaN(values.phone) || values.phone.toString().length < 11){
      toast.error("Please enter a valid phone number.")
      return
    }
    if(values.message.length < 6){
        toast.error("Please input message with at least 6 letters")
        return
    }

    try {
      await SendFormMinistry(values)
      toast.success("Email Sent!")
      setState(initState)
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message
    }))
    }
  }

// console.log(values)

  return (
    <main className="min-h-screen py-8 flex items-center">
      <div className="h-full max-w-6xl mx-auto">
        <div>
          <h1 className="text-7xl text-center font-gil">
          Got Questions? Want More Information?
          </h1>
          <p className="text-2xl text-center my-4 font-gilLight">
          Fill out the form below and one of our staff will get in contact with you as soon as we can.
          </p>
        </div>

        <div className="w-full flex mt-8 gap-8">
          <div className="w-full">
            <Image
              src="/images/cross.jpg"
              width={700}
              height={400}
              className="rounded-md"
              priority
            />
          </div>
          
          <form onSubmit={handleSubmit} className="w-full  bg-slate-200 rounded-md flex flex-col p-4 outline-none">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              id="email"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              id="phone"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.phone}
              onChange={handleChange}
            />
            <label htmlFor="message">How Can we help you?</label>

            <textarea
              type="text"
              rows={4}
              placeholder="Message"
              name="message"
              id="message"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={!values.name || !values.email || !values.phone || !values.message}
              className={`${!values.name || !values.email || !values.phone || !values.message ? "cursor-not-allowed" : "cursor-pointer"} p-2 px-4 bg-amber-600 text-white self-start rounded mt-4`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MailMinistry;
