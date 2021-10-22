import logo from "../../assets/logo.jpeg";
import Image from "next/image";
import data from "./header.data";
import React from "react";
import Link from "next/link";
import ResultWidget from "../../components/resultWidget";

const Header = ({ lastResult, frontPage }) => {
  return (
    <section className={`bg-black p-5 ${frontPage && "md:hidden"}`}>
      <div className="container mx-auto flex  md:px-0 justify-between">
        <Image src={logo} width="100" height="100" />
        <div className="flex gap-10 justify-center items-center mx-auto ">
          {data.map((item, index) => (
            <Link key={index} href={item.path}>
              <a>
                <p className="text-white font-extrabold text-xl hvr-underline-from-left">
                  {item.label}
                </p>
              </a>
            </Link>
          ))}
        </div>
        <div className="hidden xl:block">
          {!frontPage && lastResult ? (
            <ResultWidget lastResult={lastResult} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Header;
