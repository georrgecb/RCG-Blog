import React from "react";

const PlayersCard = ({ position, filterBy, players, highlight }) => {
  return (
    <div
      className={`relative rounded-lg py-10 bg-gray-900 bg-blend-overlay card-bg bg-local bg-no-repeat bg-cover ${
        highlight ? "border-t-8 border-red-700" : ""
      }`}
    >
      <h3
        className={`absolute bottom-1 right-3 text-5xl sm:text-4xl lg:text-6xl overflow-hidden text-center text-white opacity-10`}
      >
        {position.toUpperCase()}
      </h3>
      <div className="flex flex-col justify-around items-stretch">
        {players
          .filter((player) => player.Position === filterBy)
          .map((player) => (
            <div key={player.id} className="">
              <h3 className="text-xl text-gray-50 text-center font-semibold  py-3 transform hover:scale-125 duration-300 cursor-default">
                {player.Name} {player.Captain && "(Capitan)"}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayersCard;
