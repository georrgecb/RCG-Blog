import React from "react";
import { GiTrophy, GiTrophyCup, GiLaurelsTrophy } from "react-icons/gi";
import SingleTrophy from "../components/singleTrophy";
const data = {
  iconSuperLiga: <GiTrophy />,
  iconCup: <GiTrophyCup />,
  iconEuropeanCup: <GiLaurelsTrophy />,
};

const Trophies = ({ trophies }) => {
  const SuperLigaYears = trophies
    .filter((trophy) => trophy.Cup === "superliga")
    .map((trophy) => [trophy.Year]);

  const CupYears = trophies
    .filter((trophy) => trophy.Cup === "cupa")
    .map((trophy) => [trophy.Year]);

  const EuropeanCupYears = trophies
    .filter((trophy) => trophy.Cup === "cce")
    .map((trophy) => [trophy.Year]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-20 justify-center items-stretch ">
      <div>
        <SingleTrophy
          icon={data.iconSuperLiga}
          cupNumber={SuperLigaYears.length}
          cup={"SuperLiga"}
          years={SuperLigaYears.join(", ")}
        />
      </div>
      <div>
        <SingleTrophy
          icon={data.iconEuropeanCup}
          cupNumber={EuropeanCupYears.length}
          cup={"Cupa Campionilor Europeni"}
          years={EuropeanCupYears.join(", ")}
        />
      </div>
      <div>
        <SingleTrophy
          icon={data.iconCup}
          cupNumber={CupYears.length}
          cup={"Cupa Romaniei"}
          years={CupYears.join(", ")}
        />
      </div>
    </div>
  );
};

export default Trophies;
