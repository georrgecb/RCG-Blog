import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/ro";

const SinglePost = ({ title, cover, content, slug, date }) => {
  return (
    <Link href={`/${slug}`}>
      <a>
        <div className="w-full bg-white filter drop-shadow-md flex flex-col container-post">
          <div className="relative post-container">
            <div
              style={{ height: "98%", width: "100%" }}
              className="bg-gradient-to-t from-red-700 to-transparent absolute z-40 duration-700 top-0 left-0 color-overlay"
            ></div>
            {cover && (
              <Image
                src={cover.formats.medium.url}
                height={400}
                width={750}
                objectFit="cover"
                className="filter grayscale drop-shadow-lg"
              />
            )}

            <p className="absolute -bottom-4 right-5 bg-gray-900 text-center text-white font-medium z-40 p-3 hvr-bounce-in">
              {moment(date).locale("ro").format("LL")}
            </p>
          </div>
          <div className="p-5">
            <h5 className="text-3xl font-black text-gray-900 py-3">{title}</h5>

            <p>
              {content.length > 200 ? `${content.slice(0, 200)}...` : content}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SinglePost;
