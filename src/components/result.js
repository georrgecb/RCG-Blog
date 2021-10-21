import React from "react";

const Result = ({ homeTeam, homeTeamScore, awayTeam, awayTeamScore }) => {
  return (
    <div className="bg-black grid grid-cols-3 p-6 lg:p-16 h-full w-full">
      <p className="text-white col-span-2 font-bold text-xl">{homeTeam}</p>
      <p className="text-white bg-red-700 text-center font-black text-xl w-10 ml-auto">
        {homeTeamScore}
      </p>
      <p className="text-white col-span-2 font-bold text-xl">{awayTeam}</p>
      <p className="text-white bg-red-700 text-center font-black text-xl w-10 ml-auto">
        {awayTeamScore}
      </p>
    </div>
  );
};

export default Result;
