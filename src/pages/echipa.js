import React from "react";
import teamImg from "../assets/players.jpg";
import PageTemplate from "../sections/pageTemplate";
import Footer from "../sections/footer";
import axios from "axios";
import PlayersCard from "../components/playersCard";

const Team = ({ players }) => {
  return (
    <div>
      <PageTemplate pageCover={teamImg} pageTitle="Echipa actuala" />
      <div className="container mx-auto pb-20 px-5 md:px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
        <PlayersCard players={players} filterBy="pilier" position="pilier" />
        <PlayersCard players={players} filterBy="aripa" position="aripa" />
        <PlayersCard players={players} filterBy="centru" position="centru" />
        <PlayersCard
          players={players}
          filterBy="mijlocas"
          position="mijlocas"
        />
        <PlayersCard players={players} filterBy="taloner" position="taloner" />

        <PlayersCard
          players={players}
          filterBy="linia2"
          position="linia a II-a"
        />

        <PlayersCard players={players} filterBy="flanker" position="flanker" />
        <PlayersCard players={players} filterBy="nr8" position="numar 8" />
        <PlayersCard
          players={players}
          filterBy="antrenor"
          position="antrenor"
          highlight={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Team;

export async function getStaticProps() {
  try {
    const URL_API = process.env.BACKEND_ADDRESS;

    const resPlayers = await axios.get(`${URL_API}/teams`);
    const players = resPlayers.data;

    return {
      props: { players },
    };
  } catch (error) {
    console.log(error);
  }
}
