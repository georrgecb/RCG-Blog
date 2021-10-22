import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../sections/header/header";

export default function PageTemplate({ pageCover, pageTitle, lastResult }) {
  return (
    <div>
      <Header lastResult={lastResult} />
      <div className="flex flex-col justify-center items-center pb-20">
        <Image
          src={pageCover}
          objectFit="cover"
          objectPosition="center"
          width="1600"
          height="400"
          className="w-full filter grayscale"
        />
        <h5 className="p-10 -mt-16 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black text-center filter drop-shadow-lg bg-white">
          {" "}
          {pageTitle}
        </h5>
      </div>
    </div>
  );
}
