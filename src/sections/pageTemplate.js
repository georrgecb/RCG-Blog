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
          alt="page cover photo"
          className="w-full filter grayscale"
        />
        <h5 className="p-5 md:p-10 md:-mt-16 text-4xl xl:text-5xl font-extrabold text-black text-center filter drop-shadow-md bg-white w-full md:w-auto md:max-w-3xl lg:max-w-4xl">
          {pageTitle}
        </h5>
      </div>
    </div>
  );
}
