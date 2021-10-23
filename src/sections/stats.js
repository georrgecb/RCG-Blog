import React from "react";
import CountdownWidget from "../components/countdownWidget";
import Result from "../components/result";

const Stats = ({ results, nextMatch }) => {
  return (
    <div className="relative bg-gray-50 py-10 flex flex-col xl:flex-row justify-between">
      <h5 className="absolute hidden lg:block text-gray-300 top-14 left-16 font-medium text-lg">
        Ultimele rezultate:
      </h5>
      <div className="flex flex-col lg:flex-row xl:w-3/4">
        {results.slice(-3).map((result, index) => (
          <div key={result.id} className="flex items-center">
            {index !== 0 && (
              <div className="absolute hidden lg:block h-20 border-l transform-gpu -skew-x-12 border-white" />
            )}
            <Result
              homeTeam={result.HomeTeam}
              homeTeamScore={result.HomeTeamScore}
              awayTeam={result.AwayTeam}
              awayTeamScore={result.AwayTeamScore}
            />
          </div>
        ))}
      </div>
      <div className="w-1/4 hidden xl:flex flex-col bg-red-700 justify-center">
        <CountdownWidget nextMatch={nextMatch} />
        <h5 className="px-2 font-medium text-lg text-white text-center">
          pana la urmatoarea partida.
        </h5>
      </div>
    </div>
  );
};

export default Stats;
