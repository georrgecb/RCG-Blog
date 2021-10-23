import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const LogoBar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between">
      <div className="flex bg-red-800 py-4 w-24 h-full justify-evenly items-center ">
        <Link href="https://www.facebook.com/rcgrivita" passHref={true}>
          <a>
            <FaFacebookSquare className="text-2xl text-white" />
          </a>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCaR6IitBBLZZMRlHmbqNIkQ/videos"
          passHref={true}
        >
          <a>
            <FaYoutube className="text-2xl text-white" />
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <h1
          className="text-8xl cursor-default py-5 bg-red-700 text-white transform rotate-180 hvr-sweep-to-top"
          style={styles.verticalText}
        >
          RC GRIVITA
        </h1>
      </div>
    </div>
  );
};

export default LogoBar;

const styles = {
  verticalText: {
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
  },
};
