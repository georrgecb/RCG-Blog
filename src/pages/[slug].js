import axios from "axios";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../sections/header/header";

const Post = ({ post, result }) => {
  return (
    <div>
      <Header result={result} />

      <div className="flex flex-col justify-center items-center">
        <Image
          src={post.Cover[0].url}
          objectFit="cover"
          objectPosition="top"
          width="1600"
          height="400"
          className="w-full filter grayscale"
        />
        <h5 className="p-10 -mt-16 text-5xl font-extrabold text-black text-center filter drop-shadow-lg bg-white">
          {" "}
          {post.Title}
        </h5>
      </div>
      <div className="container mx-auto py-10 flex justify-center items-center">
        <p className="px-5 text-xl font-normal max-w-3xl"> {post.Content}</p>
      </div>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  try {
    const response = await axios.get(`${process.env.BACKEND_ADDRESS}/posts`);
    const posts = response.data;

    const paths = posts.map((post) => ({
      params: { slug: post.Slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;

    const res = await axios.get(
      `${process.env.BACKEND_ADDRESS}/posts?Slug=${slug}`
    );
    const post = res.data[0];

    const resResult = await axios.get(`${process.env.BACKEND_ADDRESS}/results`);
    const lastIndex = resResult.data.length - 1;
    const result = resResult.data[lastIndex];

    return { props: { post, result } };
  } catch (error) {
    console.log(error);
  }
}
