import { useState } from "react";
import { SendFormVisit } from "../lib/sendformvisit";
import { toast } from "react-hot-toast";

const initValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const initState = { values: initValues };

const VisitMail = () => {
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
        toast.error("Please input name with at least 6 characters")
        return
    }
    if( isNaN(values.phone) || values.phone.toString().length < 11){
      toast.error("Please enter a valid phone number.")
      return
    }
    if(values.message.length < 6){
        toast.error("Please input message with at least 6 characters")
        return
    }

    try {
      await SendFormVisit(values)
      setState(initState)
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message
    }))
    }
  }


  return (
    <main className=" flex items-center">
      <div className="max-w-6xl mx-auto">

        <div className="">
        
          <form onSubmit={handleSubmit} className="xl:w-[20rem] xl:h-[25rem] w-[30rem] h-[30rem] bg-slate-200 rounded-md flex flex-col p-4 justify-around  outline-none text-xl">
            <label htmlFor="name" className='mb-2'>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="email" className='mb-2'>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              id="email"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="phone" className='mb-2'>Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              id="phone"
              className="outline-none focus:placeholder:text-[1rem] placeholder:text-sm"
              value={values.phone}
              onChange={handleChange}
            />
            <label htmlFor="message" className='mb-2'>Questions?</label>

            <textarea
              type="text"
              rows={3}
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

export default VisitMail;
