import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/ro";
import ReactMarkdown from "react-markdown";

const SinglePost = ({ title, cover, content, slug, date, latest }) => {
  const stringContent = String(
    content.includes("**")
      ? content.length > 150
        ? `${content.slice(2, 150)}...`
        : content
      : content.length > 150
      ? `${content.slice(0, 150)}...`
      : content
  );

  return (
    <div>
      <Link href={`/${slug}`}>
        <a>
          <div className="w-full bg-gray-50 filter drop-shadow-md flex flex-col h-full">
            <div className="relative">
              <div
                style={{ height: "98%", width: "100%" }}
                className="absolute z-40 duration-300 border-8 border-red-700 top-0 left-0 opacity-0 hover:opacity-70"
              />

              {cover && (
                <Image
                  src={cover.formats.medium.url}
                  height={500}
                  width={800}
                  alt="article cover photo"
                  objectFit="cover"
                  className="filter grayscale"
                />
              )}
              <p
                className={`absolute -bottom-4 right-5 ${
                  latest ? "bg-red-700" : "bg-gray-900"
                } text-md text-center text-white font-medium z-40 p-3 hvr-bounce-in filter drop-shadow-lg`}
              >
                {latest
                  ? "articol nou"
                  : moment(date).locale("ro").format("LL")}
              </p>
            </div>
            <div className="p-5 flex flex-col justify-between items-start h-full">
              <h5 className="text-2xl font-black text-gray-900 pt-3 pb-6">
                {title}
              </h5>

              <div className="font-normal text-lg pb-6">
                <ReactMarkdown>{stringContent}</ReactMarkdown>
              </div>
              <p className="text-black text-lg border-2 p-3 mb-3 hover:bg-gray-200 duration-300 inline-block">
                Citeste continuarea
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default SinglePost;
