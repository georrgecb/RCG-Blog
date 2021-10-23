import React from "react";

const SingleTrophy = ({ icon, cupNumber, cup, years }) => {
  return (
    <div className="p-5 hover:shadow-md duration-300 h-full border rounded-lg flex flex-col justify-between w-full items-center flex-nowrap hvr-icon-grow">
      <div className="text-8xl text-black text-center hvr-icon">{icon}</div>{" "}
      <h4 className="text-3xl text-black py-5 text-center">
        <span className=" text-red-700">{cupNumber}x</span> {cup}
      </h4>
      <p className="text-xl font-semibold text-black text-center px-10">
        {years}
      </p>
    </div>
  );
};

export default SingleTrophy;
