import React from "react";
import data from "./header/header.data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black p-16 flex flex-col justify-center items-center">
      <div className="flex container justify-center items-center mx-auto ">
        {data.map((item, index) => (
          <Link key={index} href={item.path}>
            <a>
              <p className="text-white font-extrabold text-xl hvr-underline-from-left mx-3">
                {item.label}
              </p>
            </a>
          </Link>
        ))}
      </div>
      <p className="text-white text-center text-md mt-10">
        {new Date().getFullYear()} © Rugby Club Grivita
      </p>
    </div>
  );
};

export default Footer;
