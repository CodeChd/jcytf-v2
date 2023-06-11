import Events from "@/components/Events";
import { Toaster } from "react-hot-toast";

const index = () => {


  return (
    <main className=" bg-slate-200 min-h-screen py-20 flex flex-col">
      <Toaster/>
      <Events />
    </main>
  );
};

export default index;

