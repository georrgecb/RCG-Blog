import axios from "axios";
import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <Link href="/">Go Home</Link>
      <br />
      <br />
      <br />
      {post.Title}
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

    return { props: { post } };
  } catch (error) {
    console.log(error);
  }
}
