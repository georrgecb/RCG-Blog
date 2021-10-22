import React from "react";
import resultsImg from "../assets/results.jpg";
import playersImg from "../assets/players.jpg";
import historyImg from "../assets/history.jpg";
import FrontSlice from "../components/frontSlice";
import MatchPoster from "../components/matchPoster";
import LogoBar from "../components/logoBar";

const data = [
  { name: "REZULTATE", image: resultsImg, zIndex: "z-30", path: "/rezultate" },
  { name: "ECHIPA", image: playersImg, zIndex: "z-40", path: "/echipa" },
  { name: "ISTORIE", image: historyImg, zIndex: "z-50", path: "/istorie" },
];
const FrontPage = ({ nextMatch }) => {
  return (
    <section className="bg-black overflow-hidden">
      <div className="mx-auto">
        <div className="flex">
          <LogoBar />

          <MatchPoster nextMatch={nextMatch} />

          {data.map((item, index) => (
            <FrontSlice
              key={index}
              zIndex={item.zIndex}
              title={item.name}
              src={item.image}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
