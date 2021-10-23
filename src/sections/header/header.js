import grivita from "../../assets/grivita-font.jpg";
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
      <div className="md:hidden absolute top-0 left-0">
        <MobileHeader isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div className="container top-0 mx-auto flex md:px-0 justify-between items-center">
        <Link href="/">
          <a>
            <Image
              src={grivita}
              width="229"
              className="cursor-pointer"
              height="70"
              quality="100"
              alt="logo"
            />
          </a>
        </Link>
        <div className="md:hidden">
          <Hamburger
            size={40}
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
            color="white"
          />
        </div>
        <div className="hidden md:flex justify-center items-center mx-auto">
          {data.map((item, index) => (
            <Link key={index} href={item.path}>
              <a>
                <p className="text-white font-extrabold text-xl hvr-underline-from-left mx-5">
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
              <Link href="https://www.facebook.com/rcgrivita" passHref={true}>
                <a>
                  <FaFacebookSquare className="text-2xl text-white hover:text-red-700 duration-300" />
                </a>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCaR6IitBBLZZMRlHmbqNIkQ/videos"
                passHref={true}
              >
                <a>
                  <FaYoutube className="text-2xl mx-5 text-white hover:text-red-700 duration-300" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/rcgrivita/" passHref={true}>
                <a>
                  <RiInstagramFill className="text-2xl text-white hover:text-red-700 duration-300" />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
