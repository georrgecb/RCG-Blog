import logo from "../../assets/logo.jpeg";
import Image from "next/image";

import React from "react";

const Header = () => {
  return (
    <div className="flex p-5 justify-between items-center">
      <Image width={80} height={80} src={logo} />
      <div>
        <p className="text-sm">Sambata, 10 Noiembrie:</p>{" "}
        <p className="font-bold text-xl text-red-700">
          RC Grivita <span className="font-medium text-black">vs</span> Olimpia
          Bucuresti
        </p>
      </div>
    </div>
  );
};

export default Header;
