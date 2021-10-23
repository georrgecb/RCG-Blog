import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import Link from "next/link";
const LogoBar = () => {
  return (
    <div className="hidden bg-red-700 md:flex flex-col justify-between items-start">
      <div className="flex bg-red-800 h-16 w-24 justify-evenly items-center">
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
      <div className="flex justify-center items-stretch h-full">
        <h1
          className="text-8xl cursor-default py-4 bg-red-700 text-white text-center transform rotate-180 hvr-sweep-to-top"
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
