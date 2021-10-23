import React from "react";
import Link from "next/link";
import Countdown from "react-countdown";

const CountdownWidget = ({ nextMatch }) => {
  const Completionist = () => (
    <h5 className="px-2 font-medium text-lg text-white text-center">
      {nextMatch.HomeTeam} - {nextMatch.AwayTeam} s-a incheiat. <br />
      Intra pe canalul nostru{" "}
      <Link
        href="https://www.youtube.com/channel/UCaR6IitBBLZZMRlHmbqNIkQ"
        className="font-bold"
        passHref={true}
      >
        Youtube
      </Link>
    </h5>
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
