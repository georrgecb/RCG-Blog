import React from "react";

const ResultWidget = ({ result }) => {
  return (
    <div className="border bg-gray-900 border-red-700 grid grid-cols-3 p-5 gap-x-5 ">
      <p className="text-white col-span-2 font-bold text-xl">
        {result.HomeTeam}
      </p>
      <p className="text-white bg-red-700 text-center font-black text-xl w-1/2 ml-auto">
        {result.HomeTeamScore}
      </p>
      <p className="text-white col-span-2 font-bold text-xl">
        {result.AwayTeam}
      </p>
      <p className="text-white bg-red-700 text-center font-black text-xl w-1/2 ml-auto">
        {result.AwayTeamScore}
      </p>
    </div>
  );
};

export default ResultWidget;
