import React from "react";

const FullResult = ({
  result: { HomeTeam, AwayTeam, HomeTeamScore, AwayTeamScore, Victory },
}) => {
  const teamName = (team) => (
    <h4
      className={`${
        HomeTeam.toLowerCase().includes("grivi") ? "md:text-5xl" : ""
      } col-span-3 p-5 text-3xl flex items-center`}
    >
      {team}
    </h4>
  );

  const teamScore = (score) => (
    <h4 className="col-span-1 p-5 text-3xl md:text-5xl text-center bg-red-700 flex items-center justify-center">
      {score}
    </h4>
  );

  return (
    <section className="relative max-w-5xl bg-black mx-auto grid text-white my-10 grid-cols-4">
      <h2 className="absolute opacity-0 md:opacity-20 text-gray-200 md:text-6xl lg:text-8xl text-center md:top-14 lg:top-10 right-10 flex items-center">
        {Victory ? "VICTORIE" : "INFRANGERE"}
      </h2>
      {teamName(HomeTeam)}
      {teamScore(HomeTeamScore)}
      {teamName(AwayTeam)}
      {teamScore(AwayTeamScore)}
    </section>
  );
};

export default FullResult;
