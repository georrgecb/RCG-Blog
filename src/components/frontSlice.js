import React from "react";
import Image from "next/image";
import Link from "next/link";

const FrontSlice = ({ zIndex, title, src, path }) => {
  return (
    <Link href={path}>
      <div
        className={`relative cursor-pointer hidden lg:flex h-screen w-1/2 transform hover:scale-150 duration-300 items-center justify-start container-slice ${zIndex}`}
      >
        <h3
          className="absolute text-4xl transform rotate-180 z-10 text-white duration-300 slice-title-effect filter drop-shadow-lg"
          style={styles.verticalText}
        >
          {title}
        </h3>
        <Image
          src={src}
          className="slice-image-effect duration-300"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </div>
    </Link>
  );
};

const styles = {
  verticalText: { writingMode: "vertical-rl" },
};

export default FrontSlice;
