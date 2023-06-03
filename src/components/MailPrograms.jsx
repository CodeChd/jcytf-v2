import Image from "next/image";
import { useState } from "react";
import { SendFormGroup } from "../lib/sendformgroup";

const initValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const initState = { values: initValues };

const MailPrograms = () => {
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

    try {
      await SendFormGroup(values)
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
          <h1 className="text-5xl text-center font-gil">
            Let us know what Group you would like to find out more about.
          </h1>
          <p className="text-2xl my-4 font-gilLight">
            If you have questions about a specific Group Life group, or if you
            would like more information, please fill out this form and we will
            be in touch with you soon.
          </p>
        </div>

        <div className="w-full flex mt-8 gap-8">
          <div className="w-full">
            <Image
              src="/images/collegeminimage.jpg"
              width={700}
              height={400}
              className="rounded"
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
            <label htmlFor="message">Questions?</label>

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

export default MailPrograms;
