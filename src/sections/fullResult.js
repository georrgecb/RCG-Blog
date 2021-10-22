import React from "react";

const FullResult = ({
  result: { HomeTeam, AwayTeam, HomeTeamScore, AwayTeamScore, Victory },
}) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto mb-10 text-center text-xl lg:text-3xl text-white md:grid grid-cols-8 justify-center items-center">
        <h3 className="bg-black p-2 col-span-3">{HomeTeam}</h3>
        <h3
          className={` col-span-1 lg:border-l-8 lg:border-r-4 border-white p-6 ${
            Victory ? "bg-red-700" : "bg-black"
          }`}
        >
          {HomeTeamScore}
        </h3>
        <h3
          className={` col-span-1 lg:border-r-8 lg:border-l-4  border-white p-6 ${
            Victory ? "bg-red-700" : "bg-black"
          }`}
        >
          {AwayTeamScore}
        </h3>{" "}
        <h3 className="bg-black text-xl lg:text-3xl p-2 col-span-3">
          {AwayTeam}
        </h3>
      </div>
    </section>
  );
};

export default FullResult;
