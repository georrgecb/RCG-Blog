import React from "react";
import moment from "moment";
import Image from "next/image";
import coverImg from "../assets/cover.jpg";

const MatchPoster = ({ nextMatch }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between items-center py-10">
        <div className="text-center">
          <p className="text-white font-bold filter drop-shadow-lg text-lg">
            ETAPA VIITOARE
          </p>
          <div>
            <p className="text-white font-bold text-lg filter drop-shadow-lg">
              <span className="text-2xl sm:text-3xl ">
                {nextMatch?.HomeTeam} vs {nextMatch?.AwayTeam}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-red-700 text-4xl lg:text-2xl filter drop-shadow-lg">
            {moment(nextMatch?.Date).format("dddd")}
          </h3>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-gray-300 to-white text-5xl sm:text-7xl lg:text-6xl py-5 filter drop-shadow-lg hvr-bob">
            {moment(nextMatch?.Date).format("ll")}
          </h3>
          <h3 className="text-red-700 text-4xl lg:text-2xl filter  drop-shadow-lg">
            ora {moment(nextMatch?.Date).format("LT")}
          </h3>
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-lg filter drop-shadow-lg">
            {nextMatch.Stadium && "STADIONUL"}
          </p>
          <div>
            <p className="text-white font-bold filter drop-shadow-lg">
              <span className="text-2xl sm:text-3xl">{nextMatch?.Stadium}</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={coverImg}
        className="transform-gpu blur-sm lg:blur-0 filter grayscale z-10"
      />
    </div>
  );
};

export default MatchPoster;