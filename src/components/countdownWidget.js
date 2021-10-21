import React from "react";
import Countdown from "react-countdown";

const CountdownWidget = ({ nextMatch }) => {
  const Completionist = () => (
    <span className="text-md text-center">
      Meciul {nextMatch.HomeTeam} - {nextMatch.AwayTeam} a inceput. Daca s-a
      intamplat sa il ratezi, intra pe canalul nostru de{" "}
      <a
        href="https://www.youtube.com/channel/UCaR6IitBBLZZMRlHmbqNIkQ"
        target="_blank"
        rel="noreferrer"
        className="font-bold text-red-700"
      >
        {" "}
        Youtube
      </a>
      . Ne vedem la urmatorul meci!
    </span>
  );

  return (
    <Countdown
      date={new Date(nextMatch.Date)}
      className="text-5xl font-bold text-white text-center"
    >
      <Completionist />
    </Countdown>
  );
};

export default CountdownWidget;
