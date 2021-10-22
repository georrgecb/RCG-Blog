import axios from "axios";
import React from "react";
import Footer from "../sections/footer";
import PageTemplate from "../sections/pageTemplate";

const Post = ({ post, lastResult }) => {
  return (
    <div className="">
      <PageTemplate
        lastResult={lastResult}
        pageCover={post.Cover[0].url}
        pageTitle={post.Title}
      />
      <div className="container mx-auto py-10 flex justify-center items-center">
        <p className="px-5 text-xl font-normal max-w-3xl">{post.Content}</p>
      </div>
      <Footer />
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
      fallback: false,
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

    const resResults = await axios.get(
      `${process.env.BACKEND_ADDRESS}/results`
    );
    const lastIndex = resResults.data.length - 1;
    const lastResult = resResults.data[lastIndex];

    return { props: { post, lastResult } };
  } catch (error) {
    console.log(error);
  }
}
