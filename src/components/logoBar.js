import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

const LogoBar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between">
      <div className="flex bg-red-800 py-4 w-full justify-evenly items-center">
        <a
          href="https://www.facebook.com/rcgrivita"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaFacebookSquare className="text-2xl text-white" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCaR6IitBBLZZMRlHmbqNIkQ/videos"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="text-2xl text-white" />
        </a>
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
