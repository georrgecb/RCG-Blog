import logo from "../../assets/logo.jpeg";
import Image from "next/image";
import data from "./header.data";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import React, { useState } from "react";
import Link from "next/link";
import ResultWidget from "../../components/resultWidget";
import Hamburger from "hamburger-react";
import MobileHeader from "./mobileHeader";

const Header = ({ lastResult, frontPage }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className={`bg-black z-50 p-5 ${frontPage && "md:hidden"}`}>
      <div className="container top-0 mx-auto flex md:px-0 justify-between items-center">
        <Image src={logo} width="100" height="100" />
        <div className="md:hidden">
          <Hamburger
            size={40}
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
            color="white"
          />
        </div>
        <div className="hidden md:flex gap-10 justify-center items-center mx-auto ">
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
          ) : (
            <div className="flex justify-center items-center">
              <a
                href="https://www.facebook.com/rcgrivita"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="text-2xl text-white hover:text-red-700 duration-300" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCaR6IitBBLZZMRlHmbqNIkQ/videos"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaYoutube className="text-2xl mx-5 text-white hover:text-red-700 duration-300" />
              </a>
              <a
                href="https://www.instagram.com/rcgrivita/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <RiInstagramFill className="text-2xl text-white hover:text-red-700 duration-300" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-20 left-0">
        <MobileHeader isOpen={isOpen} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default Header;
