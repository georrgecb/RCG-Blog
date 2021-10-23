import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <section className="bg-black  h-screen w-full">
      <div className="flex flex-col container mx-auto justify-center items-center h-full">
        <ImSpinner2 className="animate-spin text-white text-center text-3xl mb-5" />
        <h5 className="text-3xl text-center text-white">
          Pagina se incarca...
        </h5>
      </div>
    </section>
  );
};

export default Loading;
