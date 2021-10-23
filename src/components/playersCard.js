import React from "react";

const PlayersCard = ({ position, filterBy, players, highlight }) => {
  return (
    <div className="border rounded-lg py-10 bg-gray-900 bg-blend-overlay card-bg bg-local bg-no-repeat bg-cover">
      <h3
        className={`text-5xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r ${
          highlight ? "from-red-400 to-blue-500" : "from-green-400 to-blue-500"
        }`}
      >
        {position.toUpperCase()}
      </h3>
      <div className="flex flex-col justify-start items-stretch">
        {players
          .filter((player) => player.Position === filterBy)
          .map((player) => (
            <div key={player.id} className="border-gray-800 border-t-2">
              <h3 className="text-xl  text-gray-50 text-center font-semibold  py-3 hover:text-blue-500 transform hover:scale-150 duration-300 cursor-default">
                {player.Name}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayersCard;
