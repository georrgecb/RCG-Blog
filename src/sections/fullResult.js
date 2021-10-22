import React from "react";

const FullResult = ({
  result: { HomeTeam, AwayTeam, HomeTeamScore, AwayTeamScore, Victory },
}) => {
  return (
    <section className="relative max-w-5xl mx-auto grid text-white my-10 grid-cols-4">
      <h2 className="absolute opacity-0 md:opacity-20 text-gray-200 md:text-6xl lg:text-8xl text-center md:top-14 lg:top-10 right-10 flex items-center">
        {Victory ? "VICTORIE" : "INFRANGERE"}
      </h2>
      <h4
        className={`${
          HomeTeam.toLowerCase().includes("grivi") ? "text-5xl" : ""
        } col-span-3 p-5 text-3xl bg-black flex items-center`}
      >
        {HomeTeam}
      </h4>
      <h4 className="col-span-1 p-5 text-5xl text-center bg-red-700 flex items-center justify-center">
        {HomeTeamScore}
      </h4>
      <h4
        className={`${
          AwayTeam.toLowerCase().includes("grivi") ? "text-5xl" : ""
        } col-span-3 p-5 text-3xl bg-black flex items-center`}
      >
        {AwayTeam}
      </h4>
      <h4 className="col-span-1 p-5 text-5xl text-center bg-red-700 flex items-center justify-center">
        {AwayTeamScore}
      </h4>
    </section>
  );
};

export default FullResult;
