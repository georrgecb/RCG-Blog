import React from "react";

const ResultWidget = ({ lastResult }) => {
  return (
    <div className="border bg-gray-900 border-red-700 grid grid-cols-3 p-5 gap-x-5 hover:bg-red-700 duration-300">
      <p className="text-white col-span-2 font-bold text-xl">
        {lastResult.HomeTeam}
      </p>
      <p className="text-white bg-red-700 text-center font-black text-xl w-1/2 ml-auto">
        {lastResult.HomeTeamScore}
      </p>
      <p className="text-white col-span-2 font-bold text-xl">
        {lastResult.AwayTeam}
      </p>
      <p className="text-white bg-red-700 text-center font-black text-xl w-1/2 ml-auto">
        {lastResult.AwayTeamScore}
      </p>
    </div>
  );
};

export default ResultWidget;
