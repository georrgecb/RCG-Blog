import React from "react";
import Image from "next/image";
import coverImg from "../assets/cover.jpg";
import resultsImg from "../assets/results.jpg";
import playersImg from "../assets/players.jpg";
import historyImg from "../assets/history.jpg";
import FrontSlice from "../components/frontSlice";
import moment from "moment";

const data = [
  { name: "REZULTATE", image: resultsImg, zIndex: "z-30" },
  { name: "JUCATORI", image: playersImg, zIndex: "z-40" },
  { name: "ISTORIE", image: historyImg, zIndex: "z-50" },
];
const FrontPage = ({ nextMatch }) => {
  return (
    <section className="bg-black overflow-hidden">
      <div className="mx-auto">
        <div className="flex">
          <div className="flex items-center justify-center">
            <h1
              className="hidden bg-red-700 h-full md:block text-8xl text-white transform rotate-180 text-center hvr-sweep-to-top"
              style={styles.verticalText}
            >
              RC GRIVITA
            </h1>
          </div>
          <div className="relative h-screen">
            <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between items-center py-10">
              <div className="text-center">
                <p className="text-white font-bold text-md filter drop-shadow-lg">
                  ETAPA VIITOARE
                </p>
                <div>
                  <p className="text-white font-bold text-lg filter drop-shadow-lg">
                    <span className="text-xl sm:text-2xl lg:text-2xl ">
                      {nextMatch?.HomeTeam} vs {nextMatch?.AwayTeam}
                    </span>{" "}
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
                <p className="text-white font-bold text-md filter drop-shadow-lg">
                  {nextMatch.Stadium && "STADIONUL"}
                </p>
                <div>
                  <p className="text-white font-bold text-lg filter drop-shadow-lg">
                    <span className="text-xl sm:text-2xl lg:text-2xl ">
                      {nextMatch?.Stadium}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <Image src={coverImg} className="filter grayscale z-10" />
          </div>
          {data.map((item, index) => (
            <FrontSlice
              key={index}
              zIndex={item.zIndex}
              title={item.name}
              src={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  verticalText: {
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
  },
};

export default FrontPage;
